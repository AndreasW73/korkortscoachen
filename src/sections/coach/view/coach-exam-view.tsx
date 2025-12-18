'use client';

import { useEffect, useMemo, useState } from 'react';
import { Stack, Typography, LinearProgress, Snackbar, Alert } from '@mui/material';

import { CoachFlow } from '../coach-flow';
import { CoachExamResult } from '../coach-exam-result';

const TOTAL_QUESTIONS = 2;
const TIME_LIMIT_MS = 30 * 60 * 1000; // 30 min
const WARNING_MS = 5 * 60 * 1000; // 5 min kvar

function formatMs(ms: number) {
  const clamped = Math.max(0, ms);
  const totalSeconds = Math.floor(clamped / 1000);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function CoachExamView() {
  const [answers, setAnswers] = useState<{ topic: string; correct: boolean; timeMs: number }[]>([]);
  const [finished, setFinished] = useState(false);

  const [startTime] = useState(() => Date.now());
  const [now, setNow] = useState(() => Date.now());

  const [warningShown, setWarningShown] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const elapsedMs = now - startTime;
  const remainingMs = TIME_LIMIT_MS - elapsedMs;

  const timeProgress = useMemo(() => {
    const p = (elapsedMs / TIME_LIMIT_MS) * 100;
    return Math.min(100, Math.max(0, p));
  }, [elapsedMs]);

  // Tick timer
  useEffect(() => {
    if (finished) return;

    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, [finished]);

  // 5-min warning + auto-finish
  useEffect(() => {
    if (finished) return;

    // Auto-finish when time is up
    if (remainingMs <= 0) {
      setFinished(true);
      return;
    }

    // Show warning once when <= 5 min
    if (!warningShown && remainingMs <= WARNING_MS) {
      setWarningShown(true);
      setShowWarning(true);
    }
  }, [remainingMs, finished, warningShown]);

  function handleAnswer(topic: string, isCorrect: boolean, timeMs: number) {
    setAnswers((prev) => {
      const next = [...prev, { topic, correct: isCorrect, timeMs }];

      if (next.length >= TOTAL_QUESTIONS) {
        setFinished(true);
      }

      return next;
    });
  }

  if (finished) {
    return <CoachExamResult answers={answers} totalTimeMs={Math.min(elapsedMs, TIME_LIMIT_MS)} />;
  }

  return (
    <Stack spacing={2}>
      {/* Exam timer header */}
      <Stack spacing={1}>
        <Typography variant="subtitle2" color="text.secondary">
          Tid kvar: <strong>{formatMs(remainingMs)}</strong> • Fråga {answers.length + 1}/{TOTAL_QUESTIONS}
        </Typography>

        <LinearProgress variant="determinate" value={timeProgress} sx={{ height: 8, borderRadius: 1 }} />
      </Stack>

      <CoachFlow
        mode="exam"
        onAnswerEvaluated={handleAnswer}
        weakTopics={[]} // exam: blandat
      />

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
