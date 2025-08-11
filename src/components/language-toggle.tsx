"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { locales } from '@/i18n/config';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
];

export function LanguageToggle() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];
  const otherLanguage = languages.find(lang => lang.code !== locale) || languages[1];

  const getCleanPath = () => {
    // Remove locale prefix from pathname properly
    const pathSegments = pathname.split('/').filter(Boolean);
    
    // If first segment is a locale, remove it
    if (pathSegments.length > 0 && locales.includes(pathSegments[0] as any)) {
      pathSegments.shift();
    }
    
    return pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '/';
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'he' : 'en';
    
    if (!locales.includes(newLocale as any)) return;
    
    startTransition(() => {
      const cleanPath = getCleanPath();
      const newPath = `/${newLocale}${cleanPath}`;
      
      router.push(newPath);
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="rounded-full bg-accent-100 p-2 transition-all duration-200 hover:scale-110 hover:bg-accent-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:scale-95 dark:bg-accent-800 dark:hover:bg-accent-700"
      title={`Switch to ${otherLanguage.name}`}
      aria-label={`Switch language to ${otherLanguage.name}`}
    >
      {/* Current Language Flag */}
      <span 
        className={`text-base transition-transform duration-300 ${isPending ? 'scale-90 opacity-50' : ''}`}
        role="img"
        aria-hidden="true"
      >
        {currentLanguage.flag}
      </span>
      
      {/* Loading indicator */}
      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </button>
  );
}