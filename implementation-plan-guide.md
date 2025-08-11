SUMMARY

This document lists a step-by-step plan to fix the current issues you listed for https://synqer.ai (Vercel/Next.js site). It includes: quick fixes, developer tasks (code snippets & diffs), QA checklist, rollout plan, and suggested copy rewrites tailored to your ICPs (HR, municipal staff, budget planners, data-loggers).

PRIORITY MATRIX

P0 (Fix now):

/he (Hebrew) route failing or misconfigured — blocks Hebrew users and SEO

All CTAs linking to scheduling must point to your Calendly URL immediately

Remove admin-only copy from public pages

P1 (High priority):

Logo too large (shrink 50%) — visual polish & header layout

Carousel animation is janky — UX/performance hit

Dark theme: too dark, move to cyan-ish palette (accessible)

P2 (Nice-to-have / follow-up):

Add analytics & UTM on CTA

Add automated visual tests + accessibility checks

Localized SEO meta & hreflang mapping

QUICK TECH DIAGNOSIS (evidence)

The English site /en is live and contains several CTAs that currently link to Calendly (generic). Example: "Schedule Consultation" links to calendly.com from the live page. (I inspected the page at https://synqer.ai/en). citeturn0view0

The Hebrew route /he currently fails to open in my automated check (could be misconfigured routing or missing files on the server). Start debugging with Next.js i18n routing and Vercel logs. citeturn2search0turn2search3

Carousel and animation improvements should rely on GPU-friendly transforms and/or a tested slider library like Swiper.js. Use transform/opacity, translate3d, and will-change rather than left/top or heavy DOM layout changes. citeturn3search1turn3search0

When adjusting color / contrast, follow WCAG contrast guidance (minimum 4.5:1 for normal text). Test theme color choices with WebAIM or similar. citeturn4search1

IMPLEMENTATION PLAN — STEP-BY-STEP

(Each step: context, files to change, code snippet or command, QA checks)

A. Site-wide configuration & quick hotfixes (0.5–2 hours)

Centralize Schedule CTA

Goal: point every schedule CTA to: https://calendly.com/elifishbakh/30min

How: create a single constant used across the site.

Files to add/change:

src/config/site.ts (or utils/constants.js)

Code (TypeScript):

// src/config/site.ts
export const SCHEDULE_URL = 'https://calendly.com/elifishbakh/30min';

Replace raw href="https://calendly.com/..." occurrences with SCHEDULE_URL imports in components: Header, Footer, CTAButton, Hero.

Regex quick replace (local dev): grep -R "calendly.com" -n then update.

QA:

Click every CTA in header/footer/hero/components on /en and / (and on mobile)

New tab should open the exact URL; add rel="noopener noreferrer" target="_blank" on external links.

Hotfix: Remove admin-only copy

Find content likely written for internal pattern-spotting (search for phrases like "Use 72% success rate statistics" or "Beyond Statistics"). Replace with customer-facing variant (see Copy section below).

Keep original admin notes in a private file content/internal-notes.md or in a CMS drafts area.

QA:

Run a quick smoke test of pages and read the hero & benefit bullets as a cold user. No admin instructions visible.

B. Logo shrink (0.5–1 hour)

Goal: shrink logo by 50% while keeping responsive behavior and retina clarity.

Approach A — If logo is an <img> or <svg> used in header:

/* src/styles/header.css or globals.css */
.site-header .logo img,
.site-header .logo svg {
  width: clamp(48px, 8vw, 96px); /* This gives approx 50% shrink relative to many headers */
  height: auto;
  max-height: 3.25rem;
}

/* Optional: if you must scale an existing image by 50% from its current pixel size */
.site-header .logo img {
  transform-origin: left center;
  transform: scale(0.5);
}

Notes:

Prefer setting width/max-height rather than transform: scale() where possible to avoid layout shifts and blurry scaling.

If logo is an SVG, editing the SVG viewBox or the <svg> width attribute is best for crispness.

QA:

Desktop and mobile header, test at different widths. Ensure nav still fits and no overlap.

Lighthouse visual stability for CLS.

C. Carousel animation rewrite (2–6 hours depending on complexity)

Problem: current carousel animation is janky / bad UX.

Options:

Replace with Swiper.js (recommended): mobile-first, hardware-accelerated, accessible modules.

If keeping custom slider — ensure it animates transform / opacity, add will-change: transform, and use requestAnimationFrame for JS-driven transitions.

Minimal Swiper integration (React/Next):

// components/Carousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';

export default function Carousel({ slides }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      a11y={{ enabled: true }}
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>{/* slide content */}</SwiperSlide>
      ))}
    </Swiper>
  );
}

Performance tips:

Ensure .swiper-wrapper and slide elements are animated using transform.

Use will-change: transform on the wrapper where necessary (avoid overuse).

Use translate3d(0,0,0) if you need to trigger compositing on older browsers.

QA:

Keyboard controls & screen-reader messages via Swiper a11y.

Lighthouse performance and CPU on mid-tier mobile device emulation.

D. Fix bilingual routing /he (2–8 hours depending on cause)

This is the most sensitive fix because it affects accessibility and SEO.

Checks (in order):

Confirm next.config.js i18n settings — locales must include he and defaultLocale set properly. See Next.js i18n docs.

Example next.config.js:

/** next.config.js */
module.exports = {
  i18n: {
    locales: ['en', 'he'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};

If using the App Router (/app) pattern, ensure you have either a [locale] route or you use next-intl/next-i18next correctly (their configuration differs).

Ensure public/locales/he translation JSON files exist and are included in the build.

Check Vercel production and build logs for missing pages, 404s, or server errors — use the Vercel Logs tab to inspect requests. (Vercel runtime and build logs are helpful here). citeturn2search3turn2search1

If the route shows 404 on Vercel but works locally, check:

Build output for missing he files

vercel.json or rewrites that may strip locale prefix

Case-sensitivity of folders (e.g., he vs He)

RTL handling for Hebrew:

Ensure <html dir="rtl" lang="he"> is set when serving Hebrew pages. If using Next.js, add logic in _document.js or app/layout.js:

<html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>

QA:

Visit /he and /he/about and verify content loads, language tags and dir are correct.

Check hreflang headers or <link rel="alternate" hreflang="he" ...> on pages for SEO.

E. Theme: make dark mode cyan-ish (0.5–2 hours)

Goal: move from too-dark black to a comfortable cyan-dark theme with accessible contrast.

Approach: use CSS variables and a single toggle. Sample variables:

:root {
  --bg: #06121a; /* dark but not black */
  --surface: #071826;
  --primary: #00cbd8; /* cyan-ish */
  --primary-600: #00a7b0;
  --text: #e6f7fb;
}

[data-theme="dark"] {
  --bg: #06121a;
  --surface: #071826;
  --primary: #00cbd8;
  --text: #e6f7fb;
}

Check contrast: verify body text vs background >= 4.5:1. Use WebAIM or automated tests in CI. citeturn4search1

QA:

Toggle dark mode and visually verify components like buttons, links, forms and tooltips.

F. Copy & Messaging rewrite (2–4 hours)

Goal: replace admin-facing notes with persona-driven messaging. Keep admin notes in content/internal-notes.md.

Process:

Create an ICP matrix (HR, municipal operations, budget planners, data clerks)

For each hero/feature bullet, provide a 1-liner targeted at each ICP.

Examples (from site text -> rewrite):

Site: "Use 72% success rate statistics in sales presentations and proposals." (admin)

HR-facing: "Reduce administrative workload so HR can reassign time to people-first tasks — proven results in municipal pilots."

Budget-planner-facing: "Cut processing time and operating costs — typical deployments reduce manual workload by >70%."

QA:

Run user-read tests with a colleague who matches each persona and iterate.

G. Testing and rollout (2–4 hours)

Create branch fix/synqer-site-audit and open PR with small commits (logo + CTA first, then carousel, then i18n).

Add visual regression snapshots (Chromatic, Percy, or Playwright screenshot tests) for key pages.

Lighthouse & axe accessibility scan in CI.

Staging deploy to a preview URL in Vercel, manual QA on real phones (iOS/Android), Chrome/Firefox, and Safari.

Merge to main and deploy. Monitor runtime logs for errors and 5xx.

TIMELINE ESTIMATE (rough)

Hotfix CTA & admin copy: 0.5–1 hour

Logo: 0.5–1 hour

Carousel: 2–6 hours

Hebrew routing debug/fix: 2–8 hours

Theme tweaks & contrast checks: 0.5–2 hours

Copy audit & persona rewrites: 2–4 hours

