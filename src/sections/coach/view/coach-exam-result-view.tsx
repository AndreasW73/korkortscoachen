'use client';

import {
  Stack,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
  Chip,
} from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard';

// ------------------------------------------------------
// Types
// ------------------------------------------------------

type TopicStats = {
  total: number;
  correct: number;
};

type CoachProgress = {
  total: number;
  correct: number;
  topics: Record<string, TopicStats>;
};

type FinishReason = 'completed' | 'time';

// ------------------------------------------------------
// Config (kan justeras senare)
// ------------------------------------------------------

const TOTAL_QUESTIONS = 20;
const PASS_PERCENT = 80; // förenklad regel
const PASS_MIN_CORRECT = Math.ceil(TOTAL_QUESTIONS * (PASS_PERCENT / 100));

// ------------------------------------------------------
// Props
// ------------------------------------------------------

type Props = {
  progress: CoachProgress;
  finishReason?: FinishReason;
  onRestart: () => void;
};

// ------------------------------------------------------
// Component
// ------------------------------------------------------

export function CoachExamResultView({
  progress,
  finishReason = 'completed',
  onRestart,
}: Props) {
  const percent =
    progress.total === 0
      ? 0
      : Math.round((progress.correct / progress.total) * 100);

  const passed =
    progress.correct >= PASS_MIN_CORRECT && percent >= PASS_PERCENT;

  const topicScores = Object.entries(progress.topics).map(([topic, stats]) => ({
    topic,
    total: stats.total,
    percent:
      stats.total === 0
        ? 0
        : Math.round((stats.correct / stats.total) * 100),
  }));

  const needsWork = topicScores
    .filter((t) => t.total >= 2 && t.percent < PASS_PERCENT)
    .sort((a, b) => a.percent - b.percent);

  return (
    <DashboardContent maxWidth="sm">
      <Stack spacing={3}>
        {/* Header */}
        <Typography variant="h4" align="center">
          Resultat – Teoriprov B
        </Typography>

        {/* Result card */}
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography
                variant="h5"
                color={passed ? 'success.main' : 'error.main'}
              >
                {passed ? 'Godkänd' : 'Underkänd'}
              </Typography>

              <Typography variant="body1">
                Antal rätt: <strong>{progress.correct}</strong> av{' '}
                <strong>{TOTAL_QUESTIONS}</strong>
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Krav för godkänt: minst {PASS_MIN_CORRECT} rätt (
                {PASS_PERCENT}%)
              </Typography>

              <Typography variant="h6">{percent} %</Typography>

              {finishReason === 'time' && (
                <Typography variant="body2" color="warning.main">
                  Provet avslutades eftersom tiden tog slut.
                </Typography>
              )}
            </Stack>
          </CardContent>
        </Card>

        {/* Feedback */}
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Bedömning</Typography>

              <Typography variant="body2" color="text.secondary">
                {passed
                  ? 'Resultatet motsvarar en godkänd nivå på teoriprovet.'
                  : 'Resultatet motsvarar inte godkänd nivå. Du behöver förbättra dina kunskaper inom vissa områden.'}
              </Typography>

              {needsWork.length > 0 && (
                <>
                  <Divider />

                  <Typography variant="subtitle2">
                    Ämnen att öva mer på
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {needsWork.map((t) => (
                      <Chip
                        key={t.topic}
                        label={`${t.topic} ${t.percent}%`}
                        size="small"
                        color="warning"
                      />
                    ))}
                  </Stack>
                </>
              )}
            </Stack>
          </CardContent>
        </Card>

        {/* Actions */}
        <Stack spacing={2}>
          <Button variant="contained" onClick={onRestart}>
            Gör om provet
          </Button>

          <Typography
            variant="caption"
            color="text.secondary"
            align="center"
          >
            Detta är ett övningsprov och ersätter inte Trafikverkets officiella
            teoriprov.
          </Typography>
        </Stack>
      </Stack>
    </DashboardContent>
  );
}
