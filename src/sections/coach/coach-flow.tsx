'use client';

import { Stack } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';

import { CoachScenarioCard } from './coach-scenario-card';
import { CoachQuestionCard } from './coach-question-card';
import { CoachResultCard } from './coach-result-card';
import { AiCoachResponse, CoachQuestion, mapAiToCoachQuestion } from './mapper';
import { getNextQuestion } from './question-provider';

// ------------------------------------------------------
// Props
// ------------------------------------------------------

type Props = {
  onAnswerEvaluated: (topic: string, isCorrect: boolean) => void;
  weakTopics: string[];
};


// ------------------------------------------------------
// API



// ------------------------------------------------------
// Component
// ------------------------------------------------------

export function CoachFlow({ onAnswerEvaluated, weakTopics }: Props) {
  const [question, setQuestion] = useState<CoachQuestion | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);

  const mode = (process.env.NEXT_PUBLIC_COACH_MODE ?? 'auto') as 'ai' | 'mock' | 'auto';


  // initial load
useEffect(() => {
  getNextQuestion({
    topicFallback: 'väjningsplikt',
    weakTopics: [],
    difficulty: 2,
    mode: mode,
  }).then((data) => {
    setQuestion(mapAiToCoachQuestion(data, 'väjningsplikt'));
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
  console.log('NEXT QUESTION CLICKED');

  setSelectedOptionId(null);
  setShowResult(false);
  setLastCorrect(null);

  const topic = question?.topic ?? 'väjningsplikt';

  const data = await getNextQuestion({
    topicFallback: topic,
    weakTopics,
    difficulty: 2,
    mode: mode,
  });

  console.log('NEW DATA', data);

  const mapped = mapAiToCoachQuestion(data, topic);
  setQuestion(mapped);
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
          onContinue={handleNextQuestion}
        />
      )}
    </Stack>
  );
}
