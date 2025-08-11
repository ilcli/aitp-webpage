import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { createScheduleUrl } from '@/config/site';

export function CallToAction() {
  const t = useTranslations('cta');
  const locale = useLocale();
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-24 dark:from-primary-800 dark:to-primary-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left side - Quote/Image */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 rotate-3 transform rounded-3xl bg-white/10 dark:bg-white/5"></div>
            <div className="absolute inset-0 -rotate-2 transform rounded-3xl bg-white/5 dark:bg-white/5"></div>

            {/* Main content */}
            <div className="relative rounded-3xl border border-white/20 bg-white/20 p-8 backdrop-blur-sm dark:bg-white/10">
              <div className="mb-6 flex items-start">
                <svg
                  className="mr-3 mt-1 h-8 w-8 flex-shrink-0 text-white/80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
                <div>
                  <blockquote className="mb-4 text-xl font-medium leading-relaxed text-white">
                    &ldquo;{t('testimonial')}&rdquo;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <span className="text-sm font-semibold text-white">
                        S
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-white/90">Synqer.ai</p>
                      <p className="text-sm text-white/70">
                        {t('author')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="text-white">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              {t('title')}
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              {t('subtitle')}
            </p>

            <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <a
                href={createScheduleUrl('website', 'cta', 'footer')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-block w-full bg-white text-center text-primary-600 shadow-soft-lg hover:bg-white/90 sm:w-auto"
              >
                {t('button')}
              </a>
              <Link
                href={`/${locale}/about`}
                className="btn inline-block w-full border-2 border-white text-center text-white hover:bg-white hover:text-primary-600 sm:w-auto"
              >
                {t('button_secondary') || 'Learn Our Process'}
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Free consultation</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">No obligations</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Custom solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
