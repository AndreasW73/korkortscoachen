'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import { Stack, Typography, LinearProgress, Snackbar, Alert } from '@mui/material';

import { CoachFlow } from '../coach-flow';
import { CoachExamResultView } from './coach-exam-result-view';

const TOTAL_QUESTIONS = 2;
const TIME_LIMIT_MS = 2 * 60 * 1000; // 30 min
const WARNING_MS = 5 * 60 * 1000; // 5 min kvar

type TopicStats = { total: number; correct: number };

type CoachProgress = {
  total: number;
  correct: number;
  topics: Record<string, TopicStats>;
};

function formatMs(ms: number) {
  const clamped = Math.max(0, ms);
  const totalSeconds = Math.floor(clamped / 1000);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function CoachExamView() {
  const [progress, setProgress] = useState<CoachProgress>({
    total: 0,
    correct: 0,
    topics: {},
  });

  const [finished, setFinished] = useState(false);

  const [startTime, setStartTime] = useState(() => Date.now());
  const [now, setNow] = useState(() => Date.now());

  const [warningShown, setWarningShown] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [finishReason, setFinishReason] = useState<'completed' | 'time'>('completed');

  const elapsedMs = now - startTime;
  const remainingMs = TIME_LIMIT_MS - elapsedMs;

  const timeProgress = useMemo(() => {
    const p = (elapsedMs / TIME_LIMIT_MS) * 100;
    return Math.min(100, Math.max(0, p));
  }, [elapsedMs]);

  // Beräkna weakTopics från progress (svagast först)
  const weakTopics = useMemo(() => {
    const scores = Object.entries(progress.topics)
      .map(([topic, s]) => ({
        topic,
        total: s.total,
        percent: s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100),
      }))
      .filter((t) => t.total >= 2)
      .sort((a, b) => a.percent - b.percent);

    return scores.slice(0, 3).map((s) => s.topic);
  }, [progress.topics]);

  // Tick timer
 useEffect(() => {
  if (finished) {
    return undefined;
  }

  const id = setInterval(() => setNow(Date.now()), 250);

  return () => {
    clearInterval(id);
  };
}, [finished]);


 // 5-min warning + auto-finish
useEffect(() => {
  if (finished) {
    return undefined;
  }

  if (remainingMs <= 0) {
    setFinished(true);
    setFinishReason('time');
    return undefined;
  }

  if (!warningShown && remainingMs <= WARNING_MS) {
    setWarningShown(true);
    setShowWarning(true);
  }

  return undefined;
}, [remainingMs, finished, warningShown]);


  const handleAnswerEvaluated = useCallback(
    (topic: string, isCorrect: boolean, _timeMs: number) => {
      setProgress((prev) => {
        const prevTopic = prev.topics[topic] ?? { total: 0, correct: 0 };

        const next: CoachProgress = {
          total: prev.total + 1,
          correct: prev.correct + (isCorrect ? 1 : 0),
          topics: {
            ...prev.topics,
            [topic]: {
              total: prevTopic.total + 1,
              correct: prevTopic.correct + (isCorrect ? 1 : 0),
            },
          },
        };

        if (next.total >= TOTAL_QUESTIONS) {
          setFinished(true);
        }

        return next;
      });
    },
    []
  );

  const restart = useCallback(() => {
    setProgress({ total: 0, correct: 0, topics: {} });
    setFinished(false);
    setWarningShown(false);
    setShowWarning(false);
    const t = Date.now();
    setStartTime(t);
    setNow(t);
  }, []);

  if (finished) {
    return <CoachExamResultView  finishReason={finishReason}  progress={progress} onRestart={restart} />;
  }

  return (
    <Stack spacing={2}>
      {/* Exam timer header */}
      <Stack spacing={1}>
        <Typography variant="subtitle2" color="text.secondary">
          Tid kvar: <strong>{formatMs(remainingMs)}</strong> • Fråga{' '}
          {Math.min(progress.total + 1, TOTAL_QUESTIONS)}/{TOTAL_QUESTIONS}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={timeProgress}
          sx={{ height: 8, borderRadius: 1 }}
        />
      </Stack>

      <CoachFlow mode="exam" weakTopics={weakTopics} onAnswerEvaluated={handleAnswerEvaluated} />

      <Snackbar
        open={showWarning}
        autoHideDuration={6000}
        onClose={() => setShowWarning(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="warning" onClose={() => setShowWarning(false)} sx={{ width: '100%' }}>
          5 minuter kvar! Fokusera på att svara i tid.
        </Alert>
      </Snackbar>
    </Stack>
  );
}
