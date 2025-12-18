'use client';

import { Card, CardContent, Stack, Typography, Button } from '@mui/material';

type Props = {
  correct: boolean;
  explanation: string;
  onContinue: () => void | Promise<void>;
};

export function CoachResultCard({ correct, explanation, onContinue }: Props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6" color={correct ? 'success.main' : 'error.main'}>
            {correct ? 'Rätt!' : 'Fel'}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {explanation}
          </Typography>

          <Button variant="contained" onClick={() => void onContinue()}>
            Nästa fråga
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
