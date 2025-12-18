'use client';

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import { CONFIG } from 'src/global-config';
import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';
import Link from 'next/link';

// ----------------------------------------------------------------------

type CompanyHeroProps = BoxProps & {
  caption?: string;
  headline?: [string, string];
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
};

export function CompanyHero({
  sx,
  caption = 'Körkortscoachen för företag',
  headline = ['Gårdslådor som', 'uppskattas på jobbet'],
  description = 'Ge medarbetarna en nyttig och uppskattad förmån – lokalt producerade gårdslådor, levererade smidigt till kontoret eller hem.',
  primaryCtaText = 'Be om offert',
  primaryCtaHref = '/foretag/offert',
  secondaryCtaText = 'Så funkar det',
  secondaryCtaHref = '/company',
  imageSrc = `${CONFIG.assetsDir}/assets/images/company/corporate-gift-box.jpg`,
  ...other
}: CompanyHeroProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              // En liten gradient först för bättre läsbarhet
              `linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.40) 55%, rgba(0,0,0,0.10) 100%)`,

              `url(${imageSrc})`,
            ],
          }),
          height: { md: 560 },
          py: { xs: 10, md: 0 },
          overflow: 'hidden',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            maxWidth: 760,
          }}
        >
          {/* Caption */}
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
                {caption}
              </Typography>
            </Box>
          </m.div>

          {/* Headline */}
          <AnimateText
            component="h1"
            variant="h1"
            textContent={headline}
            variants={varFade('inRight', { distance: 24 })}
            sx={{
              color: 'common.white',
              [`& .${animateTextClasses.line}[data-index="0"]`]: {
                [`& .${animateTextClasses.word}[data-index="0"]`]: { color: 'primary.main' },
              },
            }}
          />

          {/* Description */}
          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                color: 'common.white',
                fontWeight: 'fontWeightSemiBold',
                opacity: 0.95,
                maxWidth: 640,
                mx: { xs: 'auto', md: 0 },
              }}
            >
              {description}
            </Typography>
          </m.div>

          {/* CTAs */}
          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                mt: 4,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                href={primaryCtaHref}
                sx={{ px: 3, py: 1.5, fontWeight: 800 }}
              >
                {primaryCtaText}
              </Button>

              <Button
                variant="outlined"
                size="large"
                component={Link}
                href={secondaryCtaHref}
                sx={{
                  px: 3,
                  py: 1.5,
                  fontWeight: 800,
                  color: 'common.white',
                  borderColor: 'rgba(255,255,255,0.55)',
                  '&:hover': { borderColor: 'common.white' },
                }}
              >
                {secondaryCtaText}
              </Button>
            </Stack>
          </m.div>

          {/* Quick bullets */}
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
                  Flexibel volym & leverans
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.25} alignItems="center">
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  Faktura & företagsupplägg
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.25} alignItems="center">
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  Lokala producenter
                </Typography>
              </Stack>
            </Stack>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
