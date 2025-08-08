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
      className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-background hover:bg-accent-50 dark:hover:bg-accent-800 transition-all duration-200 border border-accent-200 dark:border-accent-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
      title={`Switch to ${otherLanguage.name}`}
      aria-label={`Switch language to ${otherLanguage.name}`}
    >
      {/* Current Language Flag */}
      <span 
        className={`text-lg transition-transform duration-300 ${isPending ? 'scale-90 opacity-50' : 'group-hover:scale-110'}`}
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

      {/* Subtle hover indicator showing next language */}
      <span 
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-medium text-foreground bg-background border border-accent-200 dark:border-accent-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10"
        role="tooltip"
      >
        {otherLanguage.name} {otherLanguage.flag}
      </span>
    </button>
  );
}