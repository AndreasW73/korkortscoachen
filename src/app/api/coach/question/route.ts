// app/api/coach/route.ts
import OpenAI from "openai";
import { NextResponse } from "next/server";
import crypto from "crypto";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const ENABLE_FALLBACK = true;

// Keep responses small to avoid huge logs / 431 issues
function truncate(s: string, max = 800) {
  if (!s) return s;
  return s.length > max ? s.slice(0, max) + `… (truncated, len=${s.length})` : s;
}

function nowMs() {
  return Date.now();
}

function getFallbackQuestion(topic: string) {
  // Deterministic, valid JSON shape that matches your UI/mapper
  return {
    scenario: {
      title: "Standardfråga – väjningsplikt",
      text: `Du närmar dig en korsning i tätort. Du är osäker på vem som har företräde.`,
      tags: ["väjningsplikt", "korsning", "grundregler", topic].filter(Boolean),
    },
    question: "Vad gäller som grundregel när inget annat är utmärkt i en korsning?",
    options: [
      { id: "A", text: "Högerregeln gäller" },
      { id: "B", text: "Den som kör snabbast har företräde" },
      { id: "C", text: "Den som kommer från vänster har företräde" },
      { id: "D", text: "Den som har flest passagerare har företräde" },
    ],
    correct: "A" as const,
    explanation:
      "När inget annat är utmärkt gäller i regel högerregeln: du ska lämna företräde åt fordon som kommer från höger.",
    optionExplanations: {
      A: "Rätt. Högerregeln gäller när korsningen saknar annan reglering.",
      B: "Fel. Hastighet avgör aldrig företräde.",
      C: "Fel. Det är fordon från höger du ska lämna företräde åt.",
      D: "Fel. Antal passagerare påverkar inte trafikregler.",
    },
  };
}

// Optional: tiny helper to validate your AI JSON shape a bit
function isLikelyValidCoachJson(obj: any) {
  return (
    obj &&
    typeof obj === "object" &&
    obj.scenario &&
    typeof obj.question === "string" &&
    Array.isArray(obj.options) &&
    typeof obj.correct === "string" &&
    typeof obj.explanation === "string" &&
    obj.optionExplanations &&
    typeof obj.optionExplanations === "object"
  );
}

export async function POST(req: Request) {
  const rid = crypto.randomUUID();
  const startedAt = nowMs();

  // Always return rid so you can correlate UI reports with logs
  const baseLog = { rid };

  try {
    // ---- Parse request safely
    let body: any;
    try {
      body = await req.json();
    } catch (e) {
      console.error("[coach][bad-json-body]", { ...baseLog, err: String(e) });
      return NextResponse.json(
        { status: "error", rid, message: "Invalid request JSON" },
        { status: 400 }
      );
    }

    const { topic, difficulty = 2, weakTopics = [] } = body ?? {};

    // ---- Validate input
    if (typeof topic !== "string" || topic.trim().length === 0) {
      console.error("[coach][bad-input]", {
        ...baseLog,
        topicType: typeof topic,
        topicValue: truncate(String(topic ?? ""), 120),
      });

      return NextResponse.json(
        { status: "error", rid, message: "Missing/invalid 'topic'" },
        { status: 400 }
      );
    }

    const safeDifficulty =
      typeof difficulty === "number" && Number.isFinite(difficulty)
        ? Math.min(5, Math.max(1, Math.round(difficulty)))
        : 2;

    const safeWeakTopics = Array.isArray(weakTopics)
      ? weakTopics.filter((x) => typeof x === "string" && x.trim().length > 0).slice(0, 8)
      : [];

    console.log("[coach][request]", {
      ...baseLog,
      topic,
      difficulty: safeDifficulty,
      weakTopicsCount: safeWeakTopics.length,
    });

    // ---- Prompts
    const systemPrompt = `
Du är en svensk körkortsutbildare.

Skapa EN realistisk teorifråga för B-körkort.

Om användaren är svag inom vissa ämnen ska du prioritera dessa,
men fortfarande skapa en varierad och realistisk fråga.

Svaga ämnen:
${safeWeakTopics.length > 0 ? safeWeakTopics.join(", ") : "inga specifika"}

Svara ENDAST med giltig JSON enligt formatet nedan.

{
  "scenario": {
    "title": string,
    "text": string,
    "tags": string[]
  },
  "question": string,
  "options": [
    { "id": "A", "text": string },
    { "id": "B", "text": string },
    { "id": "C", "text": string },
    { "id": "D", "text": string }
  ],
  "correct": "A" | "B" | "C" | "D",
  "explanation": string,
  "optionExplanations": {
    "A": string,
    "B": string,
    "C": string,
    "D": string
  }
}

Regler:
- Ett (och endast ett) rätt svar
- Alla svarsalternativ ska ha en pedagogisk förklaring
- Språk: svenska
- Inga extra fält
`;

    const userPrompt = `
Ämne: ${topic}
Svårighetsgrad: ${safeDifficulty}/5
`;

    // ---- Call OpenAI
    let response: any;
    try {
      response = await openai.responses.create({
        model: "gpt-4.1-mini",
        input: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        // If your model supports it, this reduces JSON parse failures a lot:
        // response_format: { type: "json_object" },
      });
    } catch (e: any) {
      console.error("[coach][openai-error]", {
        ...baseLog,
        ms: nowMs() - startedAt,
        status: e?.status,
        code: e?.code,
        message: e?.message ?? String(e),
      });

      if (ENABLE_FALLBACK) {
        return NextResponse.json({
          status: "ok",
          rid,
          source: "fallback",
          data: getFallbackQuestion(topic),
        });
      }

      return NextResponse.json(
        {
          status: "unavailable",
          rid,
          message: "Tjänsten är tillfälligt otillgänglig. Försök igen strax.",
        },
        { status: 503 }
      );
    }

    const text = response?.output_text ?? "";

    console.log("[coach][openai-ok]", {
      ...baseLog,
      ms: nowMs() - startedAt,
      openaiResponseId: response?.id,
      model: response?.model,
      outputLen: text.length,
      outputPreview: truncate(text, 400),
    });

    // ---- Parse AI JSON
    try {
      const parsed = JSON.parse(text);

      if (!isLikelyValidCoachJson(parsed)) {
        // Shape mismatch → treat as failure, use fallback/unavailable
        console.error("[coach][shape-mismatch]", {
          ...baseLog,
          ms: nowMs() - startedAt,
          outputPreview: truncate(text, 800),
        });

        if (ENABLE_FALLBACK) {
          return NextResponse.json({
            status: "ok",
            rid,
            source: "fallback",
            data: getFallbackQuestion(topic),
          });
        }

        return NextResponse.json(
          {
            status: "unavailable",
            rid,
            message: "Tjänsten är tillfälligt otillgänglig. Försök igen strax.",
          },
          { status: 503 }
        );
      }

      return NextResponse.json({
        status: "ok",
        rid,
        source: "ai",
        data: parsed,
      });
    } catch (e) {
      console.error("[coach][parse-error]", {
        ...baseLog,
        ms: nowMs() - startedAt,
        err: String(e),
        outputLen: text.length,
        outputPreview: truncate(text, 800),
      });

      if (ENABLE_FALLBACK) {
        return NextResponse.json({
          status: "ok",
          rid,
          source: "fallback",
          data: getFallbackQuestion(topic),
        });
      }

      return NextResponse.json(
        {
          status: "unavailable",
          rid,
          message: "Tjänsten är tillfälligt otillgänglig. Försök igen strax.",
        },
        { status: 503 }
      );
    }
  } catch (e) {
    console.error("[coach][unexpected-error]", {
      rid,
      ms: nowMs() - startedAt,
      err: e instanceof Error ? { name: e.name, message: e.message, stack: e.stack } : String(e),
    });

    if (ENABLE_FALLBACK) {
      return NextResponse.json({
        status: "ok",
        rid,
        source: "fallback",
        data: getFallbackQuestion("okänt ämne"),
      });
    }

    return NextResponse.json(
      {
        status: "unavailable",
        rid,
        message: "Tjänsten är tillfälligt otillgänglig. Försök igen strax.",
      },
      { status: 503 }
    );
  }
}
