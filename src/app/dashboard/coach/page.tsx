import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';
import { CoachExamView } from 'src/sections/coach/view/coach-exam-view';

import { CoachView } from 'src/sections/coach/view/coach-view';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Chat | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  // return <CoachView />;
  return <CoachExamView />;
}
