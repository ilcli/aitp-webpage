"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';
import { locales } from '@/i18n/config';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
];

export function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    if (!locales.includes(newLocale as any)) return;
    
    startTransition(() => {
      // Get the pathname without the locale prefix
      const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
      
      // Construct new path with new locale
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      
      router.push(newPath);
      router.refresh();
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md border border-accent-200 bg-background hover:bg-accent-50 dark:border-accent-700 dark:hover:bg-accent-800 transition-colors"
        disabled={isPending}
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-background border border-accent-200 dark:border-accent-700 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`flex items-center space-x-3 w-full px-4 py-2 text-sm hover:bg-accent-50 dark:hover:bg-accent-800 transition-colors ${
                  locale === language.code 
                    ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 dark:text-primary-400' 
                    : 'text-accent-700 dark:text-accent-300'
                }`}
                disabled={isPending}
              >
                <span className="text-base">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}