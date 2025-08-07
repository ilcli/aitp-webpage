import { useTranslations } from 'next-intl';
import { TypewriterHero } from './typewriter-hero';
import { DashboardMockup } from './dashboard-mockup';

export function Hero() {
  const t = useTranslations('hero');
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-accent-50 dark:from-accent-900 dark:via-background dark:to-accent-800">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="text-center">
          {/* Main Headline with Typewriter Effect */}
          <TypewriterHero />

          {/* Subheading */}
          <p className="mx-auto mb-8 max-w-3xl text-balance text-xl text-accent-600 dark:text-accent-400 sm:text-2xl">
            {t('subheading')}
          </p>

          {/* CTA Button */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://calendly.com/synqer-ai/consultation"
              className="btn-primary transform px-10 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:px-12 sm:py-5"
            >
              {t('cta.primary')}
            </a>
            <a
              href="#services"
              className="btn-outline px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg sm:px-10 sm:py-4"
            >
              {t('cta.secondary')}
            </a>
          </div>

          {/* Municipal Dashboard Mockup */}
          <DashboardMockup />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-accent-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-accent-800"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
    </section>
  );
}
