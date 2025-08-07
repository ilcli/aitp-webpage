import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
});

export const config = {
  matcher: [
    '/',
    '/(en|he)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};