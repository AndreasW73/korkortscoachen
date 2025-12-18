export type CoachQuestion = {
  id: string;
  topic: string;
  scenario: {
    title: string;
    text: string;
    tags?: string[];
  };
  question: {
    text: string;
    options: Array<{ id: 'A' | 'B' | 'C' | 'D'; text: string }>;
    correctOptionId: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    optionExplanations?: Partial<Record<'A' | 'B' | 'C' | 'D', string>>;
  };
};

export type AiCoachResponse = {
  scenario: {
    title: string;
    text: string;
    tags?: string[];
  };
  question: string;
  options: Array<{ id: 'A' | 'B' | 'C' | 'D'; text: string }>;
  correct: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  optionExplanations: Record<'A' | 'B' | 'C' | 'D', string>;
};


// ------------------------------------------------------
// Mapper: AI → intern modell
// ------------------------------------------------------

export function mapAiToCoachQuestion(
  data: AiCoachResponse,
  topic: string
): CoachQuestion {
  return {
    id: crypto.randomUUID(),
    topic,
    scenario: data.scenario,
    question: {
      text: data.question,
      options: data.options,
      correctOptionId: data.correct,
      explanation: data.explanation,
      optionExplanations: Object.fromEntries(
        data.options.map((o) => [
          o.id,
          o.id === data.correct
            ? 'Detta är rätt enligt trafikreglerna.'
            : 'Detta alternativ stämmer inte enligt trafikreglerna.',
        ])
      ) as Partial<Record<'A' | 'B' | 'C' | 'D', string>>,
    },
  };
}
