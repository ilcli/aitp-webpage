"use client";

import { useTranslations } from "next-intl";

export function SocialProof() {
  const t = useTranslations("socialProof");

  const capabilities = [
    { nameKey: "multiCloud", icon: "☁️" },
    { nameKey: "language", icon: "🌐" },
    { nameKey: "clientOwned", icon: "🔐" },
    { nameKey: "innovation", icon: "🚀" },
    { nameKey: "customDev", icon: "⚙️" },
    { nameKey: "institutional", icon: "🇮🇱" },
  ];

  return (
    <section className="bg-gradient-to-b from-surface to-background py-16 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-2xl font-semibold text-text-primary">
            {t("title")}
          </h2>
        </div>

        {/* Capability Highlights */}
        <div
          className="grid grid-cols-2 gap-6 md:grid-cols-3"
          role="region"
          aria-label="Platform capabilities"
        >
          {capabilities.map((capability, index) => (
            <div
              key={`capability-${index}`}
              className="group flex flex-col items-center rounded-xl border border-border bg-surface p-6 shadow-lg transition-all duration-300 hover:border-primary-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary-700"
            >
              <div className="mb-3 text-3xl transition-transform duration-300 group-hover:scale-110">
                {capability.icon}
              </div>
              <span className="text-center text-sm font-medium text-text-secondary transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {t(`capabilities.${capability.nameKey}`)}
              </span>
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/0 to-primary-500/0 transition-all duration-300 group-hover:from-primary-500/5 group-hover:to-primary-500/10" />
            </div>
          ))}
        </div>

        {/* Department Focus */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          <span className="rounded-full bg-gradient-to-r from-primary-100 to-primary-50 px-4 py-2 font-medium text-primary-700 shadow-sm transition-shadow hover:shadow-md dark:from-primary-900 dark:to-primary-800 dark:text-primary-300">
            {t("departments.finance")}
          </span>
          <span className="rounded-full bg-gradient-to-r from-blue-100 to-blue-50 px-4 py-2 font-medium text-blue-700 shadow-sm transition-shadow hover:shadow-md dark:from-blue-900 dark:to-blue-800 dark:text-blue-300">
            {t("departments.planning")}
          </span>
          <span className="rounded-full bg-gradient-to-r from-green-100 to-green-50 px-4 py-2 font-medium text-green-700 shadow-sm transition-shadow hover:shadow-md dark:from-green-900 dark:to-green-800 dark:text-green-300">
            {t("departments.permits")}
          </span>
          <span className="rounded-full bg-gradient-to-r from-purple-100 to-purple-50 px-4 py-2 font-medium text-purple-700 shadow-sm transition-shadow hover:shadow-md dark:from-purple-900 dark:to-purple-800 dark:text-purple-300">
            {t("departments.citizen")}
          </span>
          <span className="rounded-full bg-gradient-to-r from-orange-100 to-orange-50 px-4 py-2 font-medium text-orange-700 shadow-sm transition-shadow hover:shadow-md dark:from-orange-900 dark:to-orange-800 dark:text-orange-300">
            {t("departments.compliance")}
          </span>
          <span className="rounded-full bg-gradient-to-r from-indigo-100 to-indigo-50 px-4 py-2 font-medium text-indigo-700 shadow-sm transition-shadow hover:shadow-md dark:from-indigo-900 dark:to-indigo-800 dark:text-indigo-300">
            {t("departments.publicWorks")}
          </span>
        </div>
      </div>
    </section>
  );
}
