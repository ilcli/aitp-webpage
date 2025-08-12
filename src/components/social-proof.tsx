"use client";

import { useTranslations } from 'next-intl';

export function SocialProof() {
  const t = useTranslations('socialProof');
  
  const capabilities = [
    { name: "Government Workflow Expertise", icon: "🏛️" },
    { name: "Hebrew/English Language Support", icon: "🌐" },
    { name: "Local Compliance Standards", icon: "✅" },
    { name: "Innovation Authority Eligible", icon: "🚀" },
    { name: "Municipal Process Understanding", icon: "🏢" },
    { name: "Israeli Tech Excellence", icon: "🇮🇱" },
  ];

  return (
    <section className="bg-accent-50/50 py-16 dark:bg-accent-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-2xl font-semibold text-accent-600 dark:text-accent-400">
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
              className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-accent-800/50 backdrop-blur-sm"
            >
              <div className="text-2xl mb-2">
                {capability.icon}
              </div>
              <span className="text-sm font-medium text-center text-accent-700 dark:text-accent-200">
                {capability.name}
              </span>
            </div>
          ))}
        </div>

        {/* Municipal Department Focus */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-accent-500 dark:text-accent-400">
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Finance & Budgeting
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Urban Planning
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Permits & Licensing
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Citizen Services
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Compliance & Reporting
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Public Works
          </span>
        </div>
      </div>
    </section>
  );
}
