import { MOCK_QUESTIONS_BY_TOPIC } from './mock-questions';
import type { AiCoachResponse } from './mapper';

const topicIndex: Record<string, number> = {};

function pickMockByTopic(topic: string): AiCoachResponse {
  const list =
    MOCK_QUESTIONS_BY_TOPIC[topic] ??
    Object.values(MOCK_QUESTIONS_BY_TOPIC).flat();

  if (!topicIndex[topic]) topicIndex[topic] = 0;

  const q = list[topicIndex[topic] % list.length];
  topicIndex[topic]++;

  return q;
}

export async function getNextQuestion(params: {
  topicFallback: string;
  weakTopics: string[];
  difficulty: number;
  mode?: 'ai' | 'mock' | 'auto';
}): Promise<AiCoachResponse> {
  const { mode = 'auto', weakTopics, topicFallback } = params;

 if (mode === 'mock') {
  const topic = weakTopics.find(Boolean) ?? topicFallback;
  return pickMockByTopic(topic);
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
    const topic = weakTopics[0] ?? topicFallback;
    return pickMockByTopic(topic);
  }
}
