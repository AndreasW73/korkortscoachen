import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function FaqsForm({ sx, ...other }: BoxProps) {
  return (
    <Box sx={sx} {...other}>
      <Typography variant="h4">Hittade du inte rätt hjälp?</Typography>
      <Box
        sx={{
          my: 5,
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField fullWidth label="Namn" />
        <TextField fullWidth label="E-post" />
        <TextField fullWidth label="Ämne" />
        <TextField fullWidth label="Skriv ditt meddelande här." multiline rows={4} />
      </Box>

      <Button size="large" variant="contained">
        Skicka
      </Button>
    </Box>
  );
}
