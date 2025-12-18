'use client';

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CircleSvg, FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

type StepLike = {
  number?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type HowItWorksProps = BoxProps & {
  steps?: StepLike[];
  caption?: string;
  title?: string;
  txtGradient?: string;
  imageSrc?: string;
  imageAlt?: string;
  showStepNumber?: boolean;
};

const renderLines = () => (
  <>
    <FloatPlusIcon sx={{ top: 72, left: 72 }} />
    <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
    <FloatLine sx={{ top: 80, left: 0 }} />
    <FloatLine sx={{ bottom: 80, left: 0 }} />
    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HowItWorks({
  sx,
  steps = ITEMS,
  caption = 'Så fungerar det',
 title = 'Så funkar det',
txtGradient = 'Tre steg till provklar',
  imageSrc = `${CONFIG.assetsDir}/assets/background/hero-körkortscoachen.jpg`,
  // Alternativ om du inte har egen asset ännu:
  // imageSrc = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop',
  imageAlt = 'Körkortscoachen flöde',
  showStepNumber = true,
  ...other
}: HowItWorksProps) {
  const renderDescription = () => (
    <>
      <SectionTitle
        caption={caption}
        title={title}
        txtGradient={txtGradient}
        sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
      />

      <Stack spacing={6} sx={{ maxWidth: { sm: 560, md: 420 }, mx: { xs: 'auto', md: 'unset' } }}>
        {steps.map((item) => (
          <Box
            component={m.div}
            variants={varFade('inUp', { distance: 24 })}
            key={`${item.number ?? ''}-${item.title}`}
            sx={{ gap: 3, display: 'flex', alignItems: 'flex-start' }}
          >
            <SvgIcon sx={{ width: 40, height: 40 }}>{item.icon}</SvgIcon>

            <Stack spacing={1}>
              {showStepNumber && item.number && (
                <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 1, lineHeight: 1.2 }}>
                  STEG {item.number}
                </Typography>
              )}

              <Typography variant="h5" component="h3">
                {item.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </>
  );

  const renderImage = () => (
    <Stack
      component={m.div}
      variants={varFade('inRight', { distance: 24 })}
      sx={{ height: 1, alignItems: 'center', position: 'relative', justifyContent: 'center' }}
    >
      <Box
        sx={[
          (theme) => ({
            left: 0,
            width: 720,
            borderRadius: 2,
            position: 'absolute',
            bgcolor: 'background.default',
            overflow: 'hidden',
            boxShadow: `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
            ...theme.applyStyles('dark', {
              boxShadow: `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)}`,
            }),
          }),
        ]}
      >
        <Box component="img" alt={imageAlt} src={imageSrc} sx={{ width: 720, display: 'block' }} />
      </Box>
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={[
        { overflow: 'hidden', position: 'relative', py: { xs: 10, md: 20 } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container sx={{ position: 'relative' }}>
          <Grid container columnSpacing={{ xs: 0, md: 8 }} sx={{ position: 'relative', zIndex: 9 }}>
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>{renderDescription()}</Grid>
            <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ md: 6, lg: 5 }}>
              {renderImage()}
            </Grid>
          </Grid>

          <CircleSvg variants={varFade('in')} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const ITEMS: StepLike[] = [
  {
    number: '01',
    title: 'Sätt ditt provdatum',
    description: 'Vi skapar en personlig plan som passar din tidslinje.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="12" y="8" width="24" height="32" rx="3" />
        <path d="M16 16 H32 M16 22 H32 M16 28 H28" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Träna med coachen',
    description: 'Få feedback på varje svar och förstå dina misstag.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 14 H36 V28 H22 L16 34 V28 H12 Z" />
        <path d="M18 20 H30" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Bli provklar',
    description: 'Se din redo-score växa tills du är redo för provet.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <path d="M14 24 L21 31 L34 18" />
      </svg>
    ),
  },
];

