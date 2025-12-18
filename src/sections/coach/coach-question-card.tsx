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

export function CoachQuestionCard({
  question,
  selectedOptionId,
  correctOptionId,
  disabled = false,
  revealAnswer = true,
  onAnswer,
}: {
  question: {
    text: string;
    options: Array<{ id: OptionId; text: string }>;
    optionExplanations?: Partial<Record<OptionId, string>>;
  };
  selectedOptionId?: OptionId | null;
  correctOptionId: OptionId;
  disabled?: boolean;
  revealAnswer?: boolean;
  onAnswer: (optionId: OptionId) => void;
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="overline" color="text.secondary">
          Fråga
        </Typography>

        <Typography variant="h6" gutterBottom>
          {question.text}
        </Typography>

        <RadioGroup value={selectedOptionId ?? ''}>
          {question.options.map((o) => {
            const isSelected = selectedOptionId === o.id;
            const isCorrect = correctOptionId === o.id;

            let color: 'default' | 'error' | 'success' = 'default';
            if (disabled && revealAnswer && isCorrect) color = 'success';
            if (disabled && revealAnswer && isSelected && !isCorrect) color = 'error';

            return (
              <Box
                key={o.id}
                sx={{
                  mb: 1,
                  p: 1,
                  borderRadius: 1,
                  ...(disabled &&
                    revealAnswer &&
                    isCorrect && {
                      bgcolor: 'success.lighter',
                    }),
                  ...(disabled &&
                    revealAnswer &&
                    isSelected &&
                    !isCorrect && {
                      bgcolor: 'error.lighter',
                    }),
                }}
              >
                <FormControlLabel
                  value={o.id}
                  disabled={disabled}
                  control={<Radio color={color} />}
                  label={`${o.id}. ${o.text}`}
                  onClick={() => !disabled && onAnswer(o.id)}
                />

                {disabled && revealAnswer && question.optionExplanations?.[o.id] && (
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
