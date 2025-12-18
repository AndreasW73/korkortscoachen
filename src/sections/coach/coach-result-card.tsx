import { Alert, AlertTitle, Button, Typography } from '@mui/material';

type Props = {
  correct: boolean;
  explanation: string;
  onContinue: () => void;
};

export function CoachResultCard({ correct, explanation, onContinue }: Props) {
  const title = correct ? 'Rätt svar' : 'Fel svar';

  return (
    <Alert
      severity={correct ? 'success' : 'error'}
      variant="outlined"
      action={
        <Button
          onClick={onContinue}
          variant="contained"
          size="small"
          aria-label="Nästa fråga"
        >
          Nästa fråga
        </Button>
      }
      sx={{
        alignItems: 'flex-start',
        '& .MuiAlert-message': { width: '100%' },
      }}
    >
      <AlertTitle sx={{ mb: 0.5 }}>{title}</AlertTitle>

      <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
        {explanation}
      </Typography>
    </Alert>
  );
}
