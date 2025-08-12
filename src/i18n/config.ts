import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "he"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Minimal fallback messages to prevent errors
const fallbackMessages = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Book 30-Min Demo",
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
      typewriter: {
        words: [
          "Legacy Systems",
          "Manual Workflows",
          "Data Silos",
          "Complex Processes",
        ],
      },
      subtitle: "into Smart Business Solutions",
      subheading:
        "Transform complex manual processes into automated workflows deployed on your chosen infrastructure. Enable 24/7 citizen services through WhatsApp and web portals.",
      benefits: {
        "1": "Automate manual data entry with simple setup",
        "2": "Generate compliance reports with one click",
        "3": "Enable 24/7 client services and self-service",
      },
      cta: {
        primary: "Book Your 30-Minute Discovery Call",
        secondary: "View Demo",
        expectation:
          "In 30 minutes, we'll assess your workflows and design a custom automation solution for your infrastructure",
      },
      dashboard: {
        title: "Operations Command Center",
        metric1: "Manual Tasks Reduced",
        metric1Value: "Significant",
        metric2: "Report Generation",
        metric2Value: "Automated",
        metric3: "Data Accuracy",
        metric3Value: "High",
        status: "Real-time monitoring active",
      },
    },
  },
  he: {
    nav: {
      services: "שירותים",
      about: "אודות",
      contact: "צור קשר",
      cta: "הזמן פגישת ייעוץ",
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
      typewriter: {
        words: [
          "מערכות ישנות",
          "תהליכי עבודה ידניים",
          "נתונים מפוזרים",
          "תהליכים מורכבים",
        ],
      },
      subtitle: "לפתרונות עסקיים חכמים",
      subheading:
        "הפכו תהליכי עבודה ידניים מורכבים לזרימות עבודה אוטומטיות הנפרסות על Azure, Railway או התשתית הנבחרת שלכם. אפשרו שירותי אזרחים 24/7 דרך WhatsApp ופורטלים דיגיטליים.",
      benefits: {
        "1": "אוטומציה של הזנת נתונים ידנית בהתקנה פשוטה",
        "2": "יצירת דוחות ציות בלחיצה אחת",
        "3": "אפשור שירותי לקוחות ושירות עצמי 24/7",
      },
      cta: {
        primary: "הזמינו שיחת גילוי של 30 דקות",
        secondary: "צפייה בהדגמה",
        expectation:
          "ב-30 דקות נבחן את זרימות העבודה שלכם ונתכנן פתרון אוטומציה מותאם אישית לתשתית שלכם",
      },
      dashboard: {
        title: "מרכז פיקוד תפעולי",
        metric1: "צמצום משימות ידניות",
        metric1Value: "משמעותי",
        metric2: "יצירת דוחות",
        metric2Value: "אוטומטית",
        metric3: "דיוק נתונים",
        metric3Value: "גבוה",
        status: "ניטור בזמן אמת פעיל",
      },
    },
  },
};

export default getRequestConfig(async ({ locale }) => {
  // Validate and use the requested locale
  const validLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  try {
    // Try to load the messages dynamically
    const messages = (await import(`./locales/${validLocale}.json`)).default;

    return {
      locale: validLocale,
      messages: messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${validLocale}:`, error);

    // Use fallback messages if dynamic import fails
    return {
      locale: validLocale,
      messages:
        fallbackMessages[validLocale] || fallbackMessages[defaultLocale],
    };
  }
});
