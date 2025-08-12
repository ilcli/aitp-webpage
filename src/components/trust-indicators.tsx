"use client";

import {
  ShieldCheckIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

export function TrustIndicators() {
  const t = useTranslations("trustIndicators");
  return (
    <section className="bg-gradient-to-b from-background to-surface-secondary py-16 dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Points */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group rounded-xl border border-border bg-surface p-6 shadow-lg transition-all duration-300 hover:border-green-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-700">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900">
                <ShieldCheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-text-primary transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
                  {t("security.title")}
                </p>
                <p className="text-sm text-text-secondary">
                  {t("security.subtitle")}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/0 to-green-500/0 transition-all duration-300 group-hover:from-green-500/5 group-hover:to-green-500/10" />
          </div>

          <div className="group rounded-xl border border-border bg-surface p-6 shadow-lg transition-all duration-300 hover:border-blue-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-700">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900">
                <BuildingOfficeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-text-primary transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {t("organizations.title")}
                </p>
                <p className="text-sm text-text-secondary">
                  {t("organizations.subtitle")}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 transition-all duration-300 group-hover:from-blue-500/5 group-hover:to-blue-500/10" />
          </div>

          <div className="group rounded-xl border border-border bg-surface p-6 shadow-lg transition-all duration-300 hover:border-purple-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-700">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 transition-transform duration-300 group-hover:scale-110 dark:bg-purple-900">
                <ChartBarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-semibold text-text-primary transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  {t("timeSavings.title")}
                </p>
                <p className="text-sm text-text-secondary">
                  {t("timeSavings.subtitle")}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-purple-500/0 transition-all duration-300 group-hover:from-purple-500/5 group-hover:to-purple-500/10" />
          </div>
        </div>

        {/* Testimonial */}
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <blockquote className="text-center">
            <p className="mb-4 text-lg italic text-text-secondary">
              &ldquo;{t("testimonial")}&rdquo;
            </p>
            <footer className="text-sm">
              <span className="font-semibold text-text-primary">
                {t("author.name")}
              </span>
              <span className="text-text-secondary">
                {" "}
                — {t("author.title")}
              </span>
            </footer>
          </blockquote>
        </div>

        {/* Client Indicators */}
        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-text-secondary">
            {t("clientBase")}
          </p>
        </div>
      </div>
    </section>
  );
}
