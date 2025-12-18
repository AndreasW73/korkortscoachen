'use client';

import { Stack } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';

import { DashboardContent } from 'src/layouts/dashboard';
import { CoachHeader } from '../coach-header';
import { CoachFlow } from '../coach-flow';


// --------------------------------------------------
// Progress-typer
// --------------------------------------------------

const STORAGE_KEY = 'roadbuddy.coach.progress.v1';

type TopicStats = {
  total: number;
  correct: number;
};

export type CoachProgress = {
  total: number;
  correct: number;
  topics: Record<string, TopicStats>;
};

// --------------------------------------------------

function loadProgress(): CoachProgress {
  if (typeof window === 'undefined') {
    return { total: 0, correct: 0, topics: {} };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { total: 0, correct: 0, topics: {} };
    return JSON.parse(raw);
  } catch {
    return { total: 0, correct: 0, topics: {} };
  }
}

function saveProgress(p: CoachProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

// --------------------------------------------------

export function CoachView() {
  const [progress, setProgress] = useState<CoachProgress>({
    total: 0,
    correct: 0,
    topics: {},
  });

  // load on mount
  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const updateProgress = useCallback(
    (topic: string, isCorrect: boolean) => {
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

        saveProgress(next);
        return next;
      });
    },
    []
  );

  // ----------------------------------------------
  // Derived UI data
  // ----------------------------------------------

  const progressPercent =
    progress.total === 0
      ? 0
      : Math.round((progress.correct / progress.total) * 100);

  const topicScores = Object.entries(progress.topics)
    .map(([topic, stats]) => ({
      topic,
      total: stats.total,
      percent:
        stats.total === 0
          ? 0
          : Math.round((stats.correct / stats.total) * 100),
    }))
    .filter((t) => t.total >= 2);

  const strengths = [...topicScores]
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 2);

  const needsWork = [...topicScores]
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 2);

  return (
    <DashboardContent maxWidth="md">
      <Stack spacing={3}>
        <CoachHeader
          percent={progressPercent}
          strengths={strengths}
          needsWork={needsWork}
        />

        <CoachFlow onAnswerEvaluated={updateProgress} />
      </Stack>
    </DashboardContent>
  );
}
