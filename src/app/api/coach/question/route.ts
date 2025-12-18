import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { topic = "väjningsplikt", difficulty = 2 } = await req.json();

  const systemPrompt = `
Du är en svensk körkortsutbildare.

Skapa EN realistisk teorifråga för B-körkort.

Svara ENDAST med giltig JSON i exakt detta format:

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
Svårighetsgrad: ${difficulty}/5
`;

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
  });

  const text = response.output_text;

  try {
    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json(
      { error: "Invalid AI JSON", raw: text },
      { status: 500 }
    );
  }
}
