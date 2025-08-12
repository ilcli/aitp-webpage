"use client";

import { useTranslations } from 'next-intl';
import { ChatBubbleLeftRightIcon, ClockIcon, DevicePhoneMobileIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

export function WhatsAppEngagement() {
  const t = useTranslations('whatsapp');
  
  const features = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: t('features.status.title'),
      description: t('features.status.description')
    },
    {
      icon: DocumentCheckIcon,
      title: t('features.requests.title'),
      description: t('features.requests.description')
    },
    {
      icon: ClockIcon,
      title: t('features.updates.title'),
      description: t('features.updates.description')
    },
    {
      icon: DevicePhoneMobileIcon,
      title: t('features.access.title'),
      description: t('features.access.description')
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-background to-green-50 dark:from-green-900/20 dark:via-background dark:to-green-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="text-4xl">📱</div>
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-xl text-accent-600 dark:text-accent-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white/50 dark:bg-accent-800/50 backdrop-blur-sm border border-accent-200/50 dark:border-accent-700/50"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {t('integration.title')}
          </h3>
          <p className="text-lg opacity-90 mb-6">
            {t('integration.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">
              {t('integration.features.automated')}
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              {t('integration.features.multilingual')}
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              {t('integration.features.secure')}
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              {t('integration.features.compliant')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}