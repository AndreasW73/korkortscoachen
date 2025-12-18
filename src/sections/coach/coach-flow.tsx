'use client';

import { Stack } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';

import { CoachScenarioCard } from './coach-scenario-card';
import { CoachQuestionCard } from './coach-question-card';
import { CoachResultCard } from './coach-result-card';
import { AiCoachResponse, CoachQuestion, mapAiToCoachQuestion } from './mapper';

// ------------------------------------------------------
// Props
// ------------------------------------------------------

type Props = {
  onAnswerEvaluated: (topic: string, isCorrect: boolean) => void;
};

// ------------------------------------------------------
// API
// ------------------------------------------------------

async function fetchNextQuestion(topic: string): Promise<AiCoachResponse> {
  const res = await fetch('/api/coach/question', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      topic,
      difficulty: 2,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch coach question');
  }

  return res.json();
}

// ------------------------------------------------------
// Component
// ------------------------------------------------------

export function CoachFlow({ onAnswerEvaluated }: Props) {
  const [question, setQuestion] = useState<CoachQuestion | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);

  // initial load
  useEffect(() => {
    fetchNextQuestion('väjningsplikt').then((data) => {
      const mapped = mapAiToCoachQuestion(data, 'väjningsplikt');
      setQuestion(mapped);
    });
  }, []);

  const onAnswer = useCallback(
    (optionId: string) => {
      if (!question) return;

      setSelectedOptionId(optionId);
      setShowResult(true);

      const isCorrect = optionId === question.question.correctOptionId;
      setLastCorrect(isCorrect);

      // 🔑 Rapportera uppåt
      onAnswerEvaluated(question.topic, isCorrect);
    },
    [question, onAnswerEvaluated]
  );

  const handleNextQuestion = useCallback(async () => {
    setSelectedOptionId(null);
    setShowResult(false);
    setLastCorrect(null);

    // topic kan bli dynamisk senare (adaptiv AI)
    const topic = question?.topic ?? 'väjningsplikt';

    const data = await fetchNextQuestion(topic);
    const mapped = mapAiToCoachQuestion(data, topic);
    setQuestion(mapped);
  }, [question]);

  if (!question) return null;

  return (
    <Stack spacing={3}>
      <CoachScenarioCard
        title={question.scenario.title}
        description={question.scenario.text}
        tags={question.scenario.tags}
      />

      <CoachQuestionCard
        question={question.question}
        selectedOptionId={selectedOptionId}
        correctOptionId={question.question.correctOptionId}
        disabled={showResult}
        onAnswer={onAnswer}
      />

      {showResult && lastCorrect !== null && (
        <CoachResultCard
          correct={lastCorrect}
          explanation={question.question.explanation}
          onContinue={handleNextQuestion}
        />
      )}
    </Stack>
  );
}
