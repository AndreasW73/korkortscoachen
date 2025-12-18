'use client';

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify, IconifyName } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CircleSvg, FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

type ValueItem = {
  icon: IconifyName;
  title: string;
  description: string;
};

type WhyRoadBuddyProps = BoxProps & {
  items?: ValueItem[];
  caption?: string;
  title?: string;
  txtGradient?: string;
  imageAlt?: string;
};

const DEFAULT_ITEMS = [
  {
    icon: 'solar:shield-check-bold',
    title: 'Träna rätt saker',
    description:
      'RoadBuddy hjälper dig fokusera på det som faktiskt kommer på provet, med smarta övningar och tydliga förklaringar.',
  },
  {
    icon: 'solar:chat-round-dots-line-duotone',
    title: 'Förklarar på ditt språk',
    description:
      'Få regler och trafiklogik förklarad på ett sätt som du förstår – perfekt om svenska inte är ditt första språk.',
  },
  {
    icon: 'solar:graph-up-bold',
    title: 'Personlig plan & feedback',
    description:
      'AI:n ser vad du missar, anpassar svårighetsgrad och ger dig en plan fram till teoriprovet.',
  },
] satisfies ValueItem[];

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <FloatPlusIcon sx={{ top: 72, left: 72 }} />
    <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
    <FloatLine sx={{ top: 80, left: 0 }} />
    <FloatLine sx={{ bottom: 80, left: 0 }} />
    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

// ----------------------------------------------------------------------

export function WhyRoadBuddy({
  sx,
  items = DEFAULT_ITEMS,
  caption = 'Varför RoadBuddy',
  title = 'Vi gör det enklare att klara teorin,',
  txtGradient = 'snabbare och tryggare',
  imageAlt = 'RoadBuddy körkortscoach',
  ...other
}: WhyRoadBuddyProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
          py: { xs: 10, md: 20 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container
          maxWidth={false}
          sx={{
            position: 'relative',
            px: { xs: 2, sm: 3, md: 6, lg: 10 },
          }}
        >
          <Grid container sx={{ position: 'relative', zIndex: 9 }}>
            <Grid size={12}>
              <SectionTitle
                caption={caption}
                title={title}
                txtGradient={txtGradient}
                sx={{
                  mb: { xs: 5, md: 8 },
                  textAlign: 'center',
                }}
              />

              <Grid container spacing={3} sx={{ width: '100%' }}>
                {items.map((item) => (
                  <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                    <Box
                      component={m.div}
                      variants={varFade('inUp', { distance: 24 })}
                      sx={(theme) => ({
                        p: 3,
                        height: '100%',
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        transition: theme.transitions.create(['transform', 'box-shadow', 'border-color']),
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          borderColor: varAlpha(theme.vars.palette.primary.mainChannel, 0.35),
                          boxShadow: `0 16px 40px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.18)}`,
                        },
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          width: 52,
                          height: 52,
                          borderRadius: 1.5,
                          display: 'grid',
                          placeItems: 'center',
                          bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.12),
                          color: 'primary.main',
                        })}
                        aria-label={imageAlt}
                      >
                        <Iconify icon={item.icon} width={28} />
                      </Box>

                      <Typography variant="h6">{item.title}</Typography>
                      <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <CircleSvg variants={varFade('in')} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Box>
  );
}
