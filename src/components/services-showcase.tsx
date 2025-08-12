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
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-surface to-background dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* N8N-Style Modular Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Feature Card - Process Automation */}
          <div className="lg:col-span-7 bg-gradient-to-br from-blue-900 to-blue-800 dark:from-blue-900 dark:to-blue-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                  {services[0].icon}
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                    {t(services[0].titleKey)}
                  </h3>
                  <p className="text-blue-100 text-lg">
                    {t('hardcoded.workflowsInMinutes')}
                  </p>
                </div>
              </div>
              
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                {t(services[0].descriptionKey)}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <span className="text-green-400 mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-white/90">
                      {t(`${services[0].benefitsKey}.${i + 1}`)}
                    </span>
                  </div>
                ))}
              </div>
              
              <button className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                {t('hardcoded.exploreAutomation')}
              </button>
            </div>
            
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 translate-y-24"></div>
          </div>

          {/* Sidebar Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Citizen Engagement Card */}
            <div className="bg-surface dark:bg-gray-800 rounded-2xl p-6 border border-border dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/15 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-300/30 dark:group-hover:border-green-500/30 transition-all duration-200"></div>
              <div className="relative z-10 flex items-start">
                <div className={`w-12 h-12 ${services[1].iconBg} rounded-xl flex items-center justify-center ${services[1].iconColor} mr-4 group-hover:scale-110 transition-transform`}>
                  {services[1].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {t(services[1].titleKey)}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {t('hardcoded.whatsappIntegration')}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-text-muted">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {t('hardcoded.whatsappIntegrationPoint')}
                    </div>
                    <div className="flex items-center text-sm text-text-muted">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {t('hardcoded.autoResponses')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance & Reporting Card */}
            <div className="bg-surface dark:bg-gray-800 rounded-2xl p-6 border border-border dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/15 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-300/30 dark:group-hover:border-purple-500/30 transition-all duration-200"></div>
              <div className="relative z-10 flex items-start">
                <div className={`w-12 h-12 ${services[2].iconBg} rounded-xl flex items-center justify-center ${services[2].iconColor} mr-4 group-hover:scale-110 transition-transform`}>
                  {services[2].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {t(services[2].titleKey)}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {t('hardcoded.automatedReportsTraining')}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-text-muted">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {t('hardcoded.deadlineAlerts')}
                    </div>
                    <div className="flex items-center text-sm text-text-muted">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      {t('hardcoded.teamTraining')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Demo Card */}
            <div className="bg-gradient-to-br from-surface-secondary to-surface dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-border dark:border-gray-600 group relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-300/30 dark:group-hover:border-primary-500/30 transition-all duration-200"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 8h10a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {t('hardcoded.seeItInAction')}
                </h4>
                <p className="text-text-secondary text-sm mb-4">
                  {t('hardcoded.watchDemo')}
                </p>
                <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  {t('hardcoded.viewInteractiveDemo')}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-secondary mb-6">
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