import type { AiCoachResponse } from './mapper';
import { MOCK_QUESTIONS } from './mock-questions';

let mockIndex = 0;

function pickMockSequential(): AiCoachResponse {
  const q = MOCK_QUESTIONS[mockIndex % MOCK_QUESTIONS.length];
  mockIndex++;
  return q;
}

export async function getNextQuestion(params: {
  topicFallback: string;
  weakTopics: string[];
  difficulty: number;
  mode?: 'ai' | 'mock' | 'auto';
}): Promise<AiCoachResponse> {
  const { mode = 'auto' } = params;

  if (mode === 'mock') {
    return pickMockSequential();
  }

  if (mode === 'ai') {
    const res = await fetch('/api/coach/question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (!res.ok) throw new Error('AI failed');
    return res.json();
  }

  // auto = AI → fallback mock
  try {
    const res = await fetch('/api/coach/question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (!res.ok) throw new Error('AI failed');
    return res.json();
  } catch {
    return pickMockSequential();
  }
}
