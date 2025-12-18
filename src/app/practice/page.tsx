import type { Metadata } from 'next';
import { CONFIG } from 'src/global-config';
import { CoachView } from 'src/sections/coach/view/coach-view';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Chat | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <CoachView />;
}
