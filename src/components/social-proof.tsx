"use client";

import { useTranslations } from 'next-intl';

export function SocialProof() {
  const t = useTranslations('socialProof');
  
  const capabilities = [
    { name: "Multi-Cloud Deployment Expertise", icon: "☁️" },
    { name: "Hebrew/English Language Support", icon: "🌐" },
    { name: "Client-Owned Infrastructure", icon: "🔐" },
    { name: "Innovation Authority Eligible", icon: "🚀" },
    { name: "Custom Development Approach", icon: "⚙️" },
    { name: "Israeli Government Specialization", icon: "🇮🇱" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-surface to-background dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-2xl font-semibold text-text-primary">
            {t('title')}
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
              className="group flex flex-col items-center p-6 rounded-xl bg-surface dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-border dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {capability.icon}
              </div>
              <span className="text-sm font-medium text-center text-text-secondary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {capability.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 rounded-xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Department Focus */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          <span className="rounded-full bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-800 px-4 py-2 text-primary-700 dark:text-primary-300 font-medium shadow-sm hover:shadow-md transition-shadow">
            Finance & Budgeting
          </span>
          <span className="rounded-full bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 px-4 py-2 text-blue-700 dark:text-blue-300 font-medium shadow-sm hover:shadow-md transition-shadow">
            Urban Planning
          </span>
          <span className="rounded-full bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900 dark:to-green-800 px-4 py-2 text-green-700 dark:text-green-300 font-medium shadow-sm hover:shadow-md transition-shadow">
            Permits & Licensing
          </span>
          <span className="rounded-full bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800 px-4 py-2 text-purple-700 dark:text-purple-300 font-medium shadow-sm hover:shadow-md transition-shadow">
            Citizen Services
          </span>
          <span className="rounded-full bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900 dark:to-orange-800 px-4 py-2 text-orange-700 dark:text-orange-300 font-medium shadow-sm hover:shadow-md transition-shadow">
            Compliance & Reporting
          </span>
          <span className="rounded-full bg-gradient-to-r from-indigo-100 to-indigo-50 dark:from-indigo-900 dark:to-indigo-800 px-4 py-2 text-indigo-700 dark:text-indigo-300 font-medium shadow-sm hover:shadow-md transition-shadow">
            Public Works
          </span>
        </div>
      </div>
    </section>
  );
}
