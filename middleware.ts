import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./src/i18n/config";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Only rewrite the locale prefix from the pathname
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(he|en)/:path*"],
};
