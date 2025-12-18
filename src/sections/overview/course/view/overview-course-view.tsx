'use client';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import { cardClasses } from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';
import { DashboardContent } from 'src/layouts/dashboard';
import { _coursesContinue, _coursesFeatured, _coursesReminder } from 'src/_mock';

import { CourseProgress } from '../course-progress';
import { CourseContinue } from '../course-continue';
import { CourseFeatured } from '../course-featured';
import { CourseReminders } from '../course-reminders';
import { CourseMyAccount } from '../course-my-account';
import { CourseHoursSpent } from '../course-hours-spent';
import { CourseMyStrength } from '../course-my-strength';
import { CourseWidgetSummary } from '../course-widget-summary';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------
// ...imports oförändrade

export function OverviewCourseView() {
  const { user } = useAuthContext();
  const userPhoto = user?.photoURL ?? user?.user_metadata?.avatar_url;
  const userName = user?.displayName ?? user?.user_metadata?.full_name;

  return (
    <DashboardContent
      maxWidth={false}
      disablePadding
      sx={[
        (theme) => ({
          borderTop: { lg: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` },
        }),
      ]}
    >
      <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: { xs: 'column', lg: 'row' } }}>
        <Box
          sx={[
            (theme) => ({
              gap: 3,
              display: 'flex',
              minWidth: { lg: 0 },
              py: { lg: 3, xl: 5 },
              flexDirection: 'column',
              flex: { lg: '1 1 auto' },
              px: { xs: 2, sm: 3, xl: 5 },
              borderRight: { lg: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` },
            }),
          ]}
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Hej, {userName} 👋
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Dags att bli mer provklar idag.
            </Typography>
          </Box>

          <Box
            sx={{
              gap: 3,
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
            }}
          >
            <CourseWidgetSummary
              title="Pågående pass"
              total={6}
              icon={`${CONFIG.assetsDir}/assets/icons/courses/ic-courses-progress.svg`}
            />

            <CourseWidgetSummary
              title="Klara områden"
              total={3}
              color="success"
              icon={`${CONFIG.assetsDir}/assets/icons/courses/ic-courses-completed.svg`}
            />

            <CourseWidgetSummary
              title="Redo-score"
              total={72}
              color="secondary"
              icon={`${CONFIG.assetsDir}/assets/icons/courses/ic-courses-certificates.svg`}
            />
          </Box>

          {/* <CourseHoursSpent
            title="Tid spenderad"
            chart={{
              series: [
                {
                  name: 'Vecka',
                  categories: ['V 1', 'V 2', 'V 3', 'V 4', 'V 5'],
                  data: [{ data: [10, 41, 35, 51, 49] }],
                },
                {
                  name: 'Månad',
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep'],
                  data: [{ data: [83, 112, 119, 88, 103, 112, 114, 108, 93] }],
                },
                {
                  name: 'År',
                  categories: ['2020', '2021', '2022', '2023', '2024', '2025'],
                  data: [{ data: [24, 72, 64, 96, 76, 41] }],
                },
              ],
            }}
          /> */}

          <Box
            sx={{
              gap: 3,
              display: 'grid',
              alignItems: 'flex-start',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
            }}
          >
            <CourseProgress
              title="Träningsstatus"
              chart={{
                series: [
                  { label: 'Att börja', value: 45 },
                  { label: 'Pågår', value: 25 },
                  { label: 'Klart', value: 20 },
                ],
              }}
            />

            <CourseContinue title="Fortsätt träna" list={_coursesContinue} />
          </Box>

          <CourseFeatured title="Rekommenderad träning" list={_coursesFeatured} />
        </Box>

        <Box
          sx={{
            width: 1,
            display: 'flex',
            flexDirection: 'column',
            px: { xs: 2, sm: 3, xl: 5 },
            pt: { lg: 8, xl: 10 },
            pb: { xs: 8, xl: 10 },
            flexShrink: { lg: 0 },
            gap: { xs: 3, lg: 5, xl: 8 },
            maxWidth: { lg: 320, xl: 360 },
            bgcolor: { lg: 'background.neutral' },
            [`& .${cardClasses.root}`]: {
              p: { xs: 3, lg: 0 },
              boxShadow: { lg: 'none' },
              bgcolor: { lg: 'transparent' },
            },
          }}
        >
          <CourseMyAccount />

          <CourseMyStrength
            title="Dina styrkor"
            chart={{
              categories: [
                'Vägmärken',
                'Trafikregler',
                'Hastighet & avstånd',
                'Riskmedvetenhet',
                'Miljö & eco-driving',
                'Säkerhet',
              ],
              series: [{ data: [80, 55, 40, 65, 90, 30] }],
            }}
          />

          <CourseReminders title="Påminnelser" list={_coursesReminder} />
        </Box>
      </Box>
    </DashboardContent>
  );
}
