'use client';

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import { CONFIG } from 'src/global-config';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

// ----------------------------------------------------------------------

export function HomeHero({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(
                90deg,
                rgba(0,0,0,0.70) 0%,
                rgba(0,0,0,0.45) 45%,
                rgba(0,0,0,0.15) 100%
              )`,
              // Byt till din Körkortscoachen-hero (lägg gärna i samma assets/background-mapp)
              `url(${CONFIG.assetsDir}/assets/background/hero-background.jpg)`,
            ],
          }),
          height: { md: 560 },
          py: { xs: 10, md: 0 },
          overflow: 'hidden',
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
            maxWidth: 720,
          }}
        >
          {/* Badge */}
          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Box
              sx={{
                display: 'inline-flex',
                px: 2,
                py: 0.75,
                mb: 3,
                borderRadius: 999,
                bgcolor: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <Typography variant="body2" sx={{ color: 'common.white', fontWeight: 600 }}>
                AI-coach för svenskt körkort
              </Typography>
            </Box>
          </m.div>

          {/* Title */}
          <AnimateText
            component="h1"
            variant="h1"
            textContent={['Körkortscoachen', 'din körkortscoach']}
            variants={varFade('inRight', { distance: 24 })}
            sx={{
              color: 'common.white',
              [`& .${animateTextClasses.line}[data-index="0"]`]: {
                [`& .${animateTextClasses.word}[data-index="0"]`]: { color: 'primary.main' },
              },
            }}
          />

          {/* Subtitle */}
          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                color: 'common.white',
                fontWeight: 'fontWeightSemiBold',
                opacity: 0.95,
                maxWidth: 560,
              }}
            >
              Träna teori och förstå reglerna — på ditt språk, i din takt.
            </Typography>
          </m.div>

          {/* CTA buttons */}
          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/practice"
                sx={{
                  px: 3,
                  py: 1.5,
                  fontWeight: 700,
                  color: 'primary.main',
                  bgcolor: 'common.white',
                  '&:hover': { bgcolor: 'grey.100' },
                }}
              >
                Börja träna gratis
              </Button>

              {/* <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/how-it-works"
                sx={{
                  px: 3,
                  py: 1.5,
                  fontWeight: 700,
                  color: 'common.white',
                  borderColor: 'rgba(255,255,255,0.5)',
                  '&:hover': { borderColor: 'common.white' },
                }}
              >
                Så funkar det
              </Button> */}
            </Stack>
          </m.div>

          {/* Bullets */}
          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                mt: 6,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Stack direction="row" spacing={1.25} alignItems="center">
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  Frågor som täcker hela teorin
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.25} alignItems="center">
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  Förklaringar på flera språk
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.25} alignItems="center">
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  Anpassad träning efter dina svagheter
                </Typography>
              </Stack>
            </Stack>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
