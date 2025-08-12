import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "he"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Default fallback messages in case files are locked/inaccessible
const fallbackMessages = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Book Demo",
    },
    hero: {
      headline: "Custom-built automations, delivered",
      subheadline: "Deployed on your preferred infrastructure",
      typewriterPhrases: [
        "on your terms",
        "with full security",
        "with zero waste",
        "at peak efficiency",
      ],
    },
  },
  he: {
    nav: {
      services: "שירותים",
      about: "אודות",
      contact: "צור קשר",
      cta: "הזמן פגישה",
    },
    hero: {
      headline: "פתרונות אוטומציה מותאמים אישית, מסופקים",
      subheadline: "נפרסים על התשתית הנבחרת שלכם",
      typewriterPhrases: [
        "בתנאים שלכם",
        "עם אבטחה מלאה",
        "ללא בזבוז",
        "ביעילות מרבית",
      ],
    },
  },
};

// Import translation files directly to ensure they're included in the build
import enMessages from "./locales/en.json";
import heMessages from "./locales/he.json";

const messages = {
  en: enMessages,
  he: heMessages,
};

export default getRequestConfig(async ({ locale }) => {
  // Validate and use the requested locale
  const validLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  // Use imported messages or fallback
  const selectedMessages =
    messages[validLocale] ||
    fallbackMessages[validLocale] ||
    fallbackMessages[defaultLocale];

  return {
    locale: validLocale,
    messages: selectedMessages,
  };
});
