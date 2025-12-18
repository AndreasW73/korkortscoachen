'use client';

import { CompanyHero } from '../company-hero';
import { AboutWhat } from '../about-what';
import { AboutTeam } from '../about-team';
import { AboutVision } from '../about-vision';
import { CompanyTestimonials } from '../company-testimonials';

// ----------------------------------------------------------------------

export function CompanyView() {
  return (
    <>
      <CompanyHero />

      {/* <AboutWhat />

      <AboutVision />

      <AboutTeam /> */}

      <CompanyTestimonials />
    </>
  );
}
