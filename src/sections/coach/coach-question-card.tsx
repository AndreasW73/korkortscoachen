'use client';

import {
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from '@mui/material';

type OptionId = 'A' | 'B' | 'C' | 'D';

type Props = {
  question: {
    text: string;
    options: Array<{ id: OptionId; text: string }>;
    optionExplanations?: Partial<Record<OptionId, string>>;
  };
  selectedOptionId?: OptionId | null;
  correctOptionId: OptionId;
  disabled?: boolean;
  onAnswer: (optionId: OptionId) => void;
};

export function CoachQuestionCard({
  question,
  selectedOptionId,
  correctOptionId,
  disabled = false,
  onAnswer,
}: Props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="overline" color="text.secondary">
          Fråga
        </Typography>

        <Typography variant="h6" gutterBottom>
          {question.text}
        </Typography>

        <RadioGroup value={selectedOptionId}>
          {question.options.map((o) => {
            const isSelected = selectedOptionId === o.id;
            const isCorrect = correctOptionId === o.id;

            let color: 'default' | 'success' | 'error' = 'default';
            if (disabled && isCorrect) color = 'success';
            if (disabled && isSelected && !isCorrect) color = 'error';

            return (
              <Box
                key={o.id}
                sx={{
                  mb: 1,
                  p: 1,
                  borderRadius: 1,
                  ...(disabled && isCorrect && {
                    bgcolor: 'success.lighter',
                  }),
                  ...(disabled && isSelected && !isCorrect && {
                    bgcolor: 'error.lighter',
                  }),
                }}
              >
                <FormControlLabel
                  value={o.id}
                  control={<Radio color={color} />}
                  label={`${o.id}. ${o.text}`}
                  disabled={disabled}
                  onClick={() => !disabled && onAnswer(o.id)}
                />

                {disabled && question.optionExplanations?.[o.id] && (
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 4,
                      mt: 0.5,
                      color: isCorrect ? 'success.main' : 'text.secondary',
                    }}
                  >
                    {question.optionExplanations[o.id]}
                  </Typography>
                )}
              </Box>
            );
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
