'use client';

import { Card, CardContent, Typography, Stack, Chip } from '@mui/material';

export function CoachExamResult({
  answers,
  totalTimeMs,
}: {
  answers: { topic: string; correct: boolean; timeMs: number }[];
  totalTimeMs: number;
}) {
  const correctCount = answers.filter((a) => a.correct).length;
  const passed = correctCount >= 16; // ex: 80 %

  const byTopic = answers.reduce<Record<string, { total: number; correct: number }>>(
    (acc, a) => {
      acc[a.topic] ??= { total: 0, correct: 0 };
      acc[a.topic].total++;
      if (a.correct) acc[a.topic].correct++;
      return acc;
    },
    {}
  );

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h5">
            {passed ? '🎉 Godkänd!' : '❌ Ej godkänd'}
          </Typography>

          <Typography>
            Rätt svar: {correctCount} / {answers.length}
          </Typography>

          <Typography>
            Tid: {(totalTimeMs / 60000).toFixed(1)} min
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {Object.entries(byTopic).map(([topic, s]) => (
              <Chip
                key={topic}
                label={`${topic}: ${Math.round(
                  (s.correct / s.total) * 100
                )}%`}
                color={s.correct / s.total < 0.7 ? 'warning' : 'default'}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
