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

export function CoachQuestionCard({
  question,
  selectedOptionId,
  correctOptionId,
  disabled,
  onAnswer,
}: {
  question: {
    text: string;
    options: Array<{ id: 'A' | 'B' | 'C' | 'D'; text: string }>;
    optionExplanations?: Partial<Record<'A' | 'B' | 'C' | 'D', string>>;
  };
  selectedOptionId?: string | null;
  correctOptionId?: string;
  disabled?: boolean;
  onAnswer: (optionId: string) => void;
}) {
  return (
    <Card>
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

            let color: 'default' | 'error' | 'success' = 'default';
            if (disabled && isCorrect) color = 'success';
            if (disabled && isSelected && !isCorrect) color = 'error';

            return (
              <Box key={o.id} sx={{ mb: 1 }}>
                <FormControlLabel
                  value={o.id}
                  disabled={disabled}
                  control={<Radio color={color} />}
                  label={`${o.id}. ${o.text}`}
                  onClick={() => !disabled && onAnswer(o.id)}
                />

                {disabled && question.optionExplanations?.[o.id] && (
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 4,
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
