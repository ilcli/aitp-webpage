import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'he'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate and use the requested locale
  const validLocale = locales.includes(locale as Locale) ? locale as Locale : defaultLocale;
  
  return {
    locale: validLocale,
    messages: (await import(`./locales/${validLocale}.json`)).default,
  };
});