import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/',
    '/(he|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};