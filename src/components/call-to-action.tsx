import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { createScheduleUrl } from "@/config/site";

export function CallToAction() {
  const t = useTranslations("cta");
  const locale = useLocale();
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 dark:from-gray-800 dark:to-gray-900 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-700 to-purple-600 shadow-2xl dark:from-primary-700 dark:via-primary-800 dark:to-purple-700">
          <div className="grid grid-cols-1 items-center gap-12 p-8 lg:grid-cols-2 lg:p-16">
            {/* Left side - Quote/Testimonial */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>

              {/* Main testimonial card */}
              <div className="relative rounded-2xl border border-white/20 bg-white/20 p-8 shadow-xl backdrop-blur-lg">
                <div className="mb-6 flex items-start">
                  <svg
                    className="mr-4 mt-1 h-8 w-8 flex-shrink-0 text-white/90"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                  <div>
                    <blockquote className="mb-6 text-xl font-medium leading-relaxed text-white">
                      &ldquo;{t("testimonial")}&rdquo;
                    </blockquote>
                    <div className="flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                        <span className="text-lg font-bold text-white">S</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          {t("successStory")}
                        </p>
                        <p className="text-sm text-white/80">{t("author")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - CTA Content */}
            <div className="text-white">
              <h2 className="mb-6 text-3xl font-bold leading-tight lg:text-4xl">
                {t("title")}
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-white/90">
                {t("subtitle")}
              </p>

              <div className="mb-8 space-y-4 sm:flex sm:space-x-6 sm:space-y-0">
                <a
                  href={createScheduleUrl("cta-section")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full transform items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-primary-600 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-100 hover:shadow-xl sm:w-auto"
                >
                  {t("button")}
                </a>
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-primary-600 sm:w-auto"
                >
                  {t("button_secondary") || "Learn Our Process"}
                </Link>
              </div>

              {/* Trust indicators with enhanced styling */}
              <div className="grid grid-cols-1 gap-4 text-white/90 sm:grid-cols-3">
                <div className="flex items-center rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">
                    {t("freeConsultation")}
                  </span>
                </div>
                <div className="flex items-center rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">
                    {t("noObligations")}
                  </span>
                </div>
                <div className="flex items-center rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">
                    {t("customSolutions")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
