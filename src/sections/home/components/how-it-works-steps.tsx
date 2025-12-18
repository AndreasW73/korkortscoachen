import type { ReactNode } from 'react';

export type HowItWorksStep = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

export const steps: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Lokala producenter lägger upp sina lådor',
    description: 'Bönder i hela Sverige skapar sina unika gårdslådor med säsongens bästa.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Barn */}
        <path d="M10 26 L24 14 L38 26" />
        <path d="M14 26 V38 H34 V26" />
        <path d="M21 38 V30 H27 V38" />
        {/* Sun */}
        <circle cx="36" cy="12" r="4" />
        <path d="M36 4 V2 M36 22 V20 M28 12 H26 M46 12 H44" />
        {/* Ground */}
        <path d="M6 40 Q24 36 42 40" />
      </svg>
    ),
  },

  {
    number: '02',
    title: 'Du beställer online – inga mellanhänder',
    description: 'Välj din gårdslåda och leveransvecka. Enkel beställning, rättvisa priser.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Phone */}
        <rect x="14" y="6" width="20" height="36" rx="3" />
        <line x1="20" y1="36" x2="28" y2="36" />
        {/* Cart */}
        <path d="M18 16 H22 L24 24 H30" />
        <circle cx="24" cy="28" r="1.5" />
        <circle cx="30" cy="28" r="1.5" />
        {/* Click */}
        <circle cx="34" cy="10" r="3" />
        <path d="M34 6 V14 M30 10 H38" />
      </svg>
    ),
  },

  {
    number: '03',
    title: 'Gården packar – vi samordnar',
    description: 'Varje producent packar sin del med omsorg. Vi samordnar logistiken.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Box */}
        <path d="M8 18 L24 10 L40 18 V34 L24 42 L8 34 Z" />
        <path d="M24 10 V42" />
        <path d="M8 18 L24 26 L40 18" />
        {/* Items */}
        <ellipse cx="18" cy="16" rx="3" ry="2" />
        <ellipse cx="30" cy="16" rx="2.5" ry="1.5" />
        {/* Heart */}
        <path d="M24 6 C22 4 18 5 18 8 C18 11 24 14 24 14 C24 14 30 11 30 8 C30 5 26 4 24 6" />
      </svg>
    ),
  },

  {
    number: '04',
    title: 'Leverans hem till din dörr',
    description: 'Färska råvaror levereras direkt till dig – från jord till bord på rekordtid.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* House */}
        <path d="M28 24 L36 30 V40 H28 V32 H32 V40" />
        <path d="M28 24 L32 20 L36 24" />
        {/* Van */}
        <rect x="6" y="28" width="18" height="10" rx="2" />
        <path d="M16 28 V22 H22 L26 28" />
        <circle cx="10" cy="40" r="3" />
        <circle cx="20" cy="40" r="3" />
        {/* Motion */}
        <path d="M2 30 H0 M2 34 H0 M2 38 H0" />
      </svg>
    ),
  },
];
