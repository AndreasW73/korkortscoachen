'use client';

import { Stack } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';

import { CoachScenarioCard } from './coach-scenario-card';
import { CoachQuestionCard } from './coach-question-card';
import { CoachResultCard } from './coach-result-card';
import { CoachQuestion, mapAiToCoachQuestion } from './mapper';
import { getNextQuestion } from './question-provider';

// ------------------------------------------------------
// Props
// ------------------------------------------------------

type Props = {
  onAnswerEvaluated: (topic: string, isCorrect: boolean) => void;
  weakTopics: string[];
};

type OptionId = 'A' | 'B' | 'C' | 'D';

// Component
// ------------------------------------------------------

export function CoachFlow({ onAnswerEvaluated, weakTopics }: Props) {
  const [question, setQuestion] = useState<CoachQuestion | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<OptionId | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<number | null>(null);
  const [lastTimeMs, setLastTimeMs] = useState<number | null>(null);


  const mode = (process.env.NEXT_PUBLIC_COACH_MODE ?? 'auto') as 'ai' | 'mock' | 'auto';
  const initialTopic = weakTopics[0] ?? 'väjningsplikt';

  // initial load
useEffect(() => {
  let cancelled = false;

  getNextQuestion({
    topicFallback: 'väjningsplikt',
    weakTopics,
    difficulty: 2,
    mode,
  }).then((data) => {
    if (cancelled) return;

    const mapped = mapAiToCoachQuestion(data, 'väjningsplikt');
    setQuestion(mapped);
    setQuestionStartTime(Date.now());
  });

  return () => {
    cancelled = true;
  };
}, []);




const onAnswer = useCallback(
  (optionId: OptionId) => {
    if (!question || !questionStartTime) return;

    const elapsedMs = Date.now() - questionStartTime;
    setLastTimeMs(elapsedMs);

    setSelectedOptionId(optionId);
    setShowResult(true);

    const isCorrect = optionId === question.question.correctOptionId;
    setLastCorrect(isCorrect);

    onAnswerEvaluated(question.topic, isCorrect);
  },
  [question, questionStartTime, onAnswerEvaluated]
);


const handleNextQuestion = useCallback(async () => {
  setSelectedOptionId(null);
  setShowResult(false);
  setLastCorrect(null);
  setLastTimeMs(null);

  const topic = question?.topic ?? 'väjningsplikt';

  const data = await getNextQuestion({
    topicFallback: topic,
    weakTopics,
    difficulty: 2,
    mode: mode,
  });

  const mapped = mapAiToCoachQuestion(data, topic);
  setQuestion(mapped);
  setQuestionStartTime(Date.now()); // ⏱️ restart
}, [question, weakTopics]);


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
        timeMs={lastTimeMs ?? undefined}
        onContinue={handleNextQuestion}
      />
)}

    </Stack>
  );
}
