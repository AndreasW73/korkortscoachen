import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// ----------------------------------------------------------------------

export function SignUpTerms({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="span"
      sx={[
        () => ({
          mt: 3,
          display: 'block',
          textAlign: 'center',
          typography: 'caption',
          color: 'text.secondary',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {'Genom att skapa ett konto godkänner jag '}
      <Link underline="always" color="text.primary">
        Användarvillkoren
      </Link>
      {' och '}
      <Link underline="always" color="text.primary">
        Integritetspolicyn
      </Link>
      .
    </Box>
  );
}
