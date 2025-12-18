'use client';

import { Stack, Button } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';

import { CoachScenarioCard } from './coach-scenario-card';
import { CoachQuestionCard } from './coach-question-card';
import { CoachResultCard } from './coach-result-card';
import { CoachQuestion, mapAiToCoachQuestion } from './mapper';
import { getNextQuestion } from './question-provider';

// ------------------------------------------------------
// Types
// ------------------------------------------------------

type CoachMode = 'practice' | 'exam';
type OptionId = 'A' | 'B' | 'C' | 'D';

type Props = {
  mode?: CoachMode;
  onAnswerEvaluated: (topic: string, isCorrect: boolean, timeMs: number) => void;
  weakTopics: string[];
};

// ------------------------------------------------------
// Component
// ------------------------------------------------------

export function CoachFlow({ mode = 'practice', onAnswerEvaluated, weakTopics }: Props) {
  const [question, setQuestion] = useState<CoachQuestion | null>(null);

  const [selectedOptionId, setSelectedOptionId] = useState<OptionId | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);

  const [questionStartTime, setQuestionStartTime] = useState<number | null>(null);
  const [lastTimeMs, setLastTimeMs] = useState<number | null>(null);

  const [isLoadingNext, setIsLoadingNext] = useState(false);

  const apiMode = (process.env.NEXT_PUBLIC_COACH_MODE ?? 'auto') as 'ai' | 'mock' | 'auto';

  const loadQuestion = useCallback(
    async (topicFallback: string) => {
      const data = await getNextQuestion({
        topicFallback,
        weakTopics,
        difficulty: 2,
        mode: apiMode,
      });

      const mapped = mapAiToCoachQuestion(data, topicFallback);
      setQuestion(mapped);
      setQuestionStartTime(Date.now());
    },
    [weakTopics, apiMode]
  );

  // initial load
  useEffect(() => {
    void loadQuestion(weakTopics[0] ?? 'väjningsplikt');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextQuestion = useCallback(async () => {
    if (isLoadingNext) return;

    setIsLoadingNext(true);

    // reset UI state
    setSelectedOptionId(null);
    setShowResult(false);
    setLastCorrect(null);
    setLastTimeMs(null);

    try {
      const topicFallback = question?.topic ?? weakTopics[0] ?? 'väjningsplikt';
      await loadQuestion(topicFallback);
    } finally {
      setIsLoadingNext(false);
    }
  }, [isLoadingNext, question?.topic, weakTopics, loadQuestion]);

  const onAnswer = useCallback(
    (optionId: OptionId) => {
      if (!question || !questionStartTime || isLoadingNext) return;

      const elapsedMs = Date.now() - questionStartTime;
      setLastTimeMs(elapsedMs);

      // lock the answer
      setSelectedOptionId(optionId);
      setShowResult(true);

      const isCorrect = optionId === question.question.correctOptionId;
      setLastCorrect(isCorrect);

      onAnswerEvaluated(question.topic, isCorrect, elapsedMs);
    },
    [question, questionStartTime, isLoadingNext, onAnswerEvaluated]
  );

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
        disabled={showResult || isLoadingNext}
        revealAnswer={mode !== 'exam'}
        onAnswer={onAnswer}
      />

      {/* EXAM: no feedback, just "Next question" */}
      {mode === 'exam' && showResult && (
        <Button variant="contained" onClick={() => void handleNextQuestion()} disabled={isLoadingNext}>
          Nästa fråga
        </Button>
      )}

      {/* PRACTICE: show result card */}
      {mode === 'practice' && showResult && lastCorrect !== null && (
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
