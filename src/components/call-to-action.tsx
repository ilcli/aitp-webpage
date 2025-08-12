import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { createScheduleUrl } from '@/config/site';

export function CallToAction() {
  const t = useTranslations('cta');
  const locale = useLocale();
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-purple-600 dark:from-primary-700 dark:via-primary-800 dark:to-purple-700 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 p-8 lg:p-16">
            {/* Left side - Quote/Testimonial */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>

              {/* Main testimonial card */}
              <div className="relative bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-start mb-6">
                  <svg
                    className="mr-4 mt-1 h-8 w-8 flex-shrink-0 text-white/90"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                  <div>
                    <blockquote className="mb-6 text-xl font-medium leading-relaxed text-white">
                      &ldquo;{t('testimonial')}&rdquo;
                    </blockquote>
                    <div className="flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                        <span className="text-lg font-bold text-white">S</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Client Success Story</p>
                        <p className="text-sm text-white/80">{t('author')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - CTA Content */}
            <div className="text-white">
              <h2 className="mb-6 text-3xl lg:text-4xl font-bold leading-tight">
                {t('title')}
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-white/90">
                {t('subtitle')}
              </p>

              <div className="space-y-4 sm:flex sm:space-x-6 sm:space-y-0 mb-8">
                <a
                  href={createScheduleUrl('cta-section')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
                >
                  {t('button')}
                </a>
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 w-full sm:w-auto"
                >
                  {t('button_secondary') || 'Learn Our Process'}
                </Link>
              </div>

              {/* Trust indicators with enhanced styling */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Free consultation</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">No obligations</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Custom solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
