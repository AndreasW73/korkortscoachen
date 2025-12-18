import type { IDateValue } from 'src/types/common';

export type CompanyTestimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
  ratingNumber: number;
  postedDate: IDateValue;
};

export const _companyTestimonials: CompanyTestimonial[] = [
  {
    name: 'Elin Sjöberg',
    role: 'People & Culture',
    company: 'Techbolag (50 pers)',
    content:
      'Vi testade Körkortscoachen som en “fredagsförmån”. Enkelt upplägg, tydlig kommunikation och medarbetarna älskade kvaliteten. Det här gav mer snack i fikarummet än någon annan förmån vi provat.',
    avatarUrl: '/assets/avatars/avatar_1.jpg',
    ratingNumber: 5,
    postedDate: new Date('2025-10-18'),
  },
  {
    name: 'Jonas Lind',
    role: 'Office Manager',
    company: 'Konsultbyrå (120 pers)',
    content:
      'Leveranserna till kontoret fungerade överraskande smidigt. Vi kunde välja veckor, antal och olika lådor. Körkortscoachen tog hand om logistiken och det sparade oss massor av tid.',
    avatarUrl: '/assets/avatars/avatar_2.jpg',
    ratingNumber: 5,
    postedDate: new Date('2025-09-27'),
  },
  {
    name: 'Sara Bergström',
    role: 'CFO',
    company: 'Industriföretag (200 pers)',
    content:
      'Det vi gillade var transparensen: tydliga priser, faktura och bra underlag. Dessutom känns det bra att pengarna går till svenska producenter.',
    avatarUrl: '/assets/avatars/avatar_3.jpg',
    ratingNumber: 5,
    postedDate: new Date('2025-08-30'),
  },
  {
    name: 'Mikael Norén',
    role: 'Team Lead',
    company: 'Produktteam (18 pers)',
    content:
      'Perfekt som gåva vid milstolpar och onboardings. Lådorna kändes exklusiva och hela upplevelsen var premium – från beställning till leverans.',
    avatarUrl: '/assets/avatars/avatar_4.jpg',
    ratingNumber: 5,
    postedDate: new Date('2025-11-03'),
  },
  {
    name: 'Amina Khalil',
    role: 'HR Business Partner',
    company: 'Skalbolag (80 pers)',
    content:
      'Medarbetarna uppskattade att det var “på riktigt” — lokal mat med ursprung, inte en generisk present. Vi kommer köra igen inför jul och sommar.',
    avatarUrl: '/assets/avatars/avatar_5.jpg',
    ratingNumber: 5,
    postedDate: new Date('2025-11-21'),
  },
  {
    name: 'Oskar Holm',
    role: 'COO',
    company: 'Startup (35 pers)',
    content:
      'Körkortscoachen var enkelt att komma igång med. Vi började litet och skruvade upp när vi såg responsen. Bra uppföljning och tydlig plan.',
    avatarUrl: '/assets/avatars/avatar_6.jpg',
    ratingNumber: 4,
    postedDate: new Date('2025-12-02'),
  },
];
