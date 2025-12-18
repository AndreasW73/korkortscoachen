import { Card, CardContent, Typography, Stack, Chip, CardActions, Button } from "@mui/material";

export function CoachScenarioCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags?: string[];
}) {
  return (
    <Card>
      <CardContent>
        <Typography variant="overline">Scenario</Typography>
        <Typography variant="h5">{title}</Typography>
        <Typography>{description}</Typography>

        {tags && (
          <Stack direction="row" spacing={1} mt={2}>
            {tags.map((t) => (
              <Chip key={t} label={t} size="small" />
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}

