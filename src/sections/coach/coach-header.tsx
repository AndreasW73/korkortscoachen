import { Stack, Typography, LinearProgress, Chip } from '@mui/material';

type TopicBadge = {
  topic: string;
  percent: number;
};

type Props = {
  percent?: number;
  strengths?: TopicBadge[];
  needsWork?: TopicBadge[];
};

export function CoachHeader({
  percent = 0,
  strengths = [],
  needsWork = [],
}: Props) {
  return (
    <Stack spacing={1}>
     {percent === 0 && (
  <Typography variant="body2" color="text.secondary">
    Svara på några frågor för att se din nivå.
  </Typography>
)}


      <LinearProgress
        variant="determinate"
        value={percent}
        sx={{ height: 8, borderRadius: 1 }}
      />

      {strengths.length > 0 && (
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Typography variant="caption">Styrkor:</Typography>
          {strengths.map((s) => (
            <Chip key={s.topic} size="small" label={`${s.topic} ${s.percent}%`} />
          ))}
        </Stack>
      )}

      {needsWork.length > 0 && (
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Typography variant="caption">Öva mer:</Typography>
          {needsWork.map((n) => (
            <Chip
              key={n.topic}
              size="small"
              color="warning"
              label={`${n.topic} ${n.percent}%`}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
