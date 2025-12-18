import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fToNow } from 'src/utils/format-time';
import { _mock } from 'src/_mock';

import { varFade, MotionViewport, AnimateCountUp } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  carouselBreakpoints,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        left: 80,
        position: 'absolute',
        transform: 'translateX(-50%)',
      }}
    >
      <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
      <FloatTriangleDownIcon
        sx={{
          width: 30,
          height: 15,
          opacity: 0.24,
          position: 'static',
        }}
      />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function CompanyTestimonials({ sx, ...other }: BoxProps) {
  const carousel = useCarousel({
    align: 'start',
    slidesToShow: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
    breakpoints: {
      [carouselBreakpoints.sm]: { slideSpacing: '24px' },
      [carouselBreakpoints.md]: { slideSpacing: '40px' },
      [carouselBreakpoints.lg]: { slideSpacing: '64px' },
    },
  });

  const renderDescription = () => (
    <SectionTitle
      caption="Företagskunder"
      title="Uppskattat av"
      txtGradient="medarbetare"
      sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}
    />
  );

  const horizontalDivider = (position: 'top' | 'bottom') => (
    <Divider
      component="div"
      sx={[
        (theme) => ({
          width: 1,
          opacity: 0.16,
          height: '1px',
          border: 'none',
          position: 'absolute',
          background: `linear-gradient(to right, transparent 0%, ${theme.vars.palette.grey[500]} 50%, transparent 100%)`,
          ...(position === 'top' && { top: 0 }),
          ...(position === 'bottom' && { bottom: 0 }),
        }),
      ]}
    />
  );

  const verticalDivider = () => (
    <Divider
      component="div"
      orientation="vertical"
      flexItem
      sx={[
        (theme) => ({
          width: '1px',
          opacity: 0.16,
          border: 'none',
          background: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.grey[500]} 50%, transparent 100%)`,
          display: { xs: 'none', md: 'block' },
        }),
      ]}
    />
  );

  const renderContent = () => (
    <Stack sx={{ position: 'relative', py: { xs: 5, md: 8 } }}>
      {horizontalDivider('top')}

      <Carousel carousel={carousel}>
        {TESTIMONIALS.map((item) => (
          <Stack key={item.id} component={m.div} variants={varFade('in')}>
            <Stack spacing={1} sx={{ typography: 'subtitle2' }}>
              <Rating size="small" name="read-only" value={item.rating} precision={0.5} readOnly />
              {item.category}
            </Stack>

            <Typography
              sx={(theme) => ({
                ...theme.mixins.maxLine({ line: 4, persistent: theme.typography.body1 }),
                mt: 2,
                mb: 3,
              })}
            >
              {item.content}
            </Typography>

            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <Avatar alt={item.name} src={item.avatar} sx={{ width: 48, height: 48 }} />
              <Stack sx={{ typography: 'subtitle1' }}>
                <Box component="span">{item.name}</Box>

                <Box component="span" sx={{ typography: 'body2', color: 'text.disabled' }}>
                  {fToNow(new Date(item.postedAt))}
                </Box>
              </Stack>
            </Box>
          </Stack>
        ))}
      </Carousel>

      <Box
        sx={{
          mt: { xs: 5, md: 8 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CarouselDotButtons
          variant="rounded"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
        />

        <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
      </Box>
    </Stack>
  );

  const renderNumber = () => (
    <Stack sx={{ py: { xs: 5, md: 8 }, position: 'relative' }}>
      {horizontalDivider('top')}

      <Stack divider={verticalDivider()} sx={{ gap: 5, flexDirection: { xs: 'column', md: 'row' } }}>
        {[
          { label: 'Företag som testat', value: 42 },
          { label: 'Leveranser genomförda', value: 1.26 }, // 1.26k+
          { label: 'Genomsnittsbetyg', value: 4.9 },
        ].map((item) => (
          <Stack key={item.label} spacing={2} sx={{ textAlign: 'center', width: 1 }}>
            <m.div variants={varFade('inUp', { distance: 24 })}>
              <AnimateCountUp
                to={item.value}
                unit={item.label === 'Leveranser genomförda' ? 'k+' : item.label === 'Genomsnittsbetyg' ? '' : '+'}
                toFixed={item.label === 'Genomsnittsbetyg' ? 1 : item.label === 'Leveranser genomförda' ? 2 : 0}
                sx={[
                  (theme) => ({
                    fontWeight: 'fontWeightBold',
                    fontSize: { xs: 40, md: 64 },
                    lineHeight: { xs: 50 / 40, md: 80 / 64 },
                    fontFamily: theme.typography.fontSecondaryFamily,
                  }),
                ]}
              />
            </m.div>

            <m.div variants={varFade('inUp', { distance: 24 })}>
              <Box
                component="span"
                sx={[
                  (theme) => ({
                    ...theme.mixins.textGradient(
                      `90deg, ${theme.vars.palette.text.primary}, ${varAlpha(
                        theme.vars.palette.text.primaryChannel,
                        0.2
                      )}`
                    ),
                    opacity: 0.4,
                    typography: 'h6',
                  }),
                ]}
              >
                {item.label}
              </Box>
            </m.div>
          </Stack>
        ))}
      </Stack>

      {horizontalDivider('bottom')}
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={[{ py: 10, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container>
          {renderDescription()}
          {renderContent()}
          {renderNumber()}
        </Container>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const createReview = (index: number) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  avatar: _mock.image.avatar(index),
  rating: 5,
});

// ✅ Körkortscoachen B2B testimonials (svenska)
const TESTIMONIALS = [
  {
    ...createReview(1),
    category: 'Smidig administration',
    content:
      'Vi satte upp ett upplägg för fredagslådor på 10 minuter. Körkortscoachen skötte kommunikationen och leveranserna kom exakt som utlovat.',
    postedAt: '2025-11-21T09:00:00Z',
  },
  {
    ...createReview(2),
    category: 'Uppskattad förmån',
    content:
      'Det här blev snabbt en favorit bland medarbetarna. Känns lyxigt men samtidigt “på riktigt” med tydligt ursprung och bra kvalitet.',
    postedAt: '2025-10-30T12:00:00Z',
  },
  {
    ...createReview(3),
    category: 'Kvalitet & transparens',
    content:
      'Bra råvaror, tydlig spårbarhet och rättvist upplägg. Extra plus att producenterna lyfts fram – det bygger stolthet internt också.',
    postedAt: '2025-10-06T08:30:00Z',
  },
  {
    ...createReview(4),
    category: 'Leverans till kontor',
    content:
      'Leveransfönster och volymer var flexibla. Vi började med 25 lådor och kunde enkelt skala upp inför kampanjveckor.',
    postedAt: '2025-09-14T15:10:00Z',
  },
  {
    ...createReview(5),
    category: 'Faktura & underlag',
    content:
      'Fakturahanteringen var enkel och underlagen tydliga. Passar perfekt för företagspolicy och budgetuppföljning.',
    postedAt: '2025-08-28T10:00:00Z',
  },
  {
    ...createReview(6),
    category: 'Gåva som känns modern',
    content:
      'Vi använde Körkortscoachen som sommarpresent. Det kändes mer personligt än presentkort och gav ett mycket bättre intryck.',
    postedAt: '2025-07-03T13:45:00Z',
  },
  {
    ...createReview(7),
    category: 'Hållbart val',
    content:
      'Lokalt, säsongsbaserat och utan onödiga mellanhänder. Det ligger helt i linje med våra hållbarhetsmål.',
    postedAt: '2025-06-12T09:15:00Z',
  },
  {
    ...createReview(8),
    category: 'Support & uppföljning',
    content:
      'Snabba svar och bra uppföljning. Vi fick hjälp att välja rätt upplägg för olika team och kostpreferenser.',
    postedAt: '2025-12-01T07:50:00Z',
  },
];
