import type { Metadata } from 'next';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Körkortscoachen – AI-coach för körkortet',
  description:
    'Träna på körkortsteorin med Körkortscoachen. En AI-driven körkortscoach som förklarar reglerna på ditt språk och anpassar träningen efter dig.',
};

export default function Page() {
  return <HomeView />;
}
