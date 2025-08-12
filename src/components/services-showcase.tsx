"use client";

import { useTranslations } from 'next-intl';
import { createScheduleUrl } from '@/config/site';

export function ServicesShowcase() {
  const t = useTranslations('services');

  const services = [
    {
      titleKey: 'processAutomation.title',
      descriptionKey: 'processAutomation.description',
      benefitsKey: 'processAutomation.benefits',
      ctaKey: 'processAutomation.cta',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      gradient: 'from-blue-500/10 to-cyan-500/10',
      iconBg: 'bg-blue-100 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400',
      hoverBorder: 'hover:border-blue-200 dark:hover:border-blue-700',
      utmSource: 'process-automation'
    },
    {
      titleKey: 'citizenEngagement.title',
      descriptionKey: 'citizenEngagement.description',
      benefitsKey: 'citizenEngagement.benefits',
      ctaKey: 'citizenEngagement.cta',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      gradient: 'from-green-500/10 to-emerald-500/10',
      iconBg: 'bg-green-100 dark:bg-green-900',
      iconColor: 'text-green-600 dark:text-green-400',
      hoverBorder: 'hover:border-green-200 dark:hover:border-green-700',
      utmSource: 'citizen-engagement'
    },
    {
      titleKey: 'complianceReporting.title',
      descriptionKey: 'complianceReporting.description',
      benefitsKey: 'complianceReporting.benefits',
      ctaKey: 'complianceReporting.cta',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      gradient: 'from-purple-500/10 to-pink-500/10',
      iconBg: 'bg-purple-100 dark:bg-purple-900',
      iconColor: 'text-purple-600 dark:text-purple-400',
      hoverBorder: 'hover:border-purple-200 dark:hover:border-purple-700',
      utmSource: 'compliance-reporting'
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${service.hoverBorder} overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center ${service.iconColor} mb-6 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  {Array.from({ length: 3 }, (_, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {t(`${service.benefitsKey}.${i + 1}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className="w-full text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600"
                  onClick={() => {
                    // Scroll to specific service section or show more info
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t(service.ctaKey)}
                </button>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/5 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {t('bottomCta.text')}
          </p>
          <a
            href={createScheduleUrl('services-section')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            {t('bottomCta.button')}
          </a>
        </div>
      </div>
    </section>
  );
}