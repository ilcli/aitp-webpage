# Hebrew Localization Production Plan

## Executive Summary
Full Hebrew translation implementation for Synqer.ai website with RTL support, language toggle, and complete content localization. Estimated time: 4-5 hours.

## Phase 1: Infrastructure Setup (30 minutes)

### 1.1 Enable Hebrew Locale Support
- Update `/src/i18n/config.ts`:
  - Add 'he' to locales array: `export const locales = ['en', 'he'] as const;`
  - Update getRequestConfig to handle Hebrew locale:
    ```typescript
    export default getRequestConfig(async ({ locale }) => {
      const validLocale = locales.includes(locale as any) ? locale : defaultLocale;
      
      return {
        locale: validLocale,
        messages: (await import(`./locales/${validLocale}.json`)).default,
      };
    });
    ```

### 1.2 Update Middleware
- Modify `/src/middleware.ts`:
  - Remove Hebrew redirect blocking (lines 13-16)
  - Enable proper Hebrew routing
  - Set up language detection logic

### 1.3 Update Layout for RTL Support
- Modify `/src/app/[locale]/layout.tsx`:
  - Dynamic `lang` and `dir` attributes based on locale:
    ```html
    <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'} suppressHydrationWarning>
    ```
  - Hebrew-specific metadata when locale is 'he'

## Phase 2: RTL Styling & Typography (45 minutes)

### 2.1 Global CSS Updates
- Update `/src/app/globals.css`:
  - Add RTL-specific classes:
    ```css
    [dir="rtl"] {
      direction: rtl;
    }

    [dir="rtl"] .text-left {
      text-align: right;
    }

    [dir="rtl"] .text-right {
      text-align: left;
    }

    [dir="rtl"] .ml-4 {
      margin-right: 1rem;
      margin-left: 0;
    }

    [dir="rtl"] .mr-4 {
      margin-left: 1rem;
      margin-right: 0;
    }

    /* Hebrew font support */
    [lang="he"] {
      font-family: 'Assistant', 'Heebo', 'Noto Sans Hebrew', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    ```

### 2.2 Component RTL Adjustments
- Update directional components:
  - Navbar layout for RTL
  - Hero section alignment
  - Feature cards spacing
  - Social proof grid direction

## Phase 3: Language Toggle Implementation (45 minutes)

### 3.1 Create Language Switcher Component
- New file: `/src/components/language-switcher.tsx`
  ```typescript
  "use client";
  
  import { useLocale, useTranslations } from 'next-intl';
  import { usePathname, useRouter } from 'next/navigation';
  import { useState } from 'react';
  
  export function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
  
    const handleLanguageChange = (newLocale: string) => {
      const currentPath = pathname.replace(`/${locale}`, '');
      router.push(`/${newLocale}${currentPath}`);
      setIsOpen(false);
    };
  
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 transition-colors"
        >
          <span>{locale === 'he' ? '🇮🇱 עברית' : '🇺🇸 English'}</span>
        </button>
        
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-accent-900 border border-accent-200 dark:border-accent-700 rounded-md shadow-lg z-50">
            <button
              onClick={() => handleLanguageChange('en')}
              className="block w-full text-left px-4 py-2 text-sm text-accent-700 dark:text-accent-300 hover:bg-accent-50 dark:hover:bg-accent-800"
            >
              🇺🇸 English
            </button>
            <button
              onClick={() => handleLanguageChange('he')}
              className="block w-full text-left px-4 py-2 text-sm text-accent-700 dark:text-accent-300 hover:bg-accent-50 dark:hover:bg-accent-800"
            >
              🇮🇱 עברית
            </button>
          </div>
        )}
      </div>
    );
  }
  ```

### 3.2 Integrate into Navbar
- Add language switcher to `/src/components/navbar.tsx`:
  - Import LanguageSwitcher component
  - Add to desktop navbar (line ~79)
  - Add to mobile menu (line ~174)
  - Position appropriately for both LTR/RTL

## Phase 4: Hebrew Content Translation (2-3 hours)

### 4.1 Create Hebrew Translation File
- New file: `/src/i18n/locales/he.json`

### 4.2 Hebrew Content Structure
```json
{
  "nav": {
    "services": "שירותים",
    "about": "אודות", 
    "contact": "צור קשר",
    "cta": "קבעו פגישה של 30 דקות"
  },
  "hero": {
    "headline": "אוטומציה עירונית הבנויה לתהליכי הממשל הישראלי",
    "subheadline": "— ללא צורך בצוות IT",
    "subheading": "הפכו תהליכים ידניים למערכות אוטומטיות. צרו דוחות מיידיים. אפשרו שירות עצמי לתושבים דרך ווטסאפ.",
    "benefits": {
      "1": "אוטומציה של הזנת נתונים ידנית תוך דקות, לא חודשים",
      "2": "יצירת דוחות רגולטוריים בלחיצת כפתור",
      "3": "אפשרו שירותי תושבים זמינים 24/7"
    },
    "cta": {
      "primary": "קבעו פגישת הערכה של 30 דקות",
      "expectation": "ב-30 דקות נמפה את תהליכי העבודה ונזהה הזדמנויות אוטומציה לפעולות העירוניות שלכם"
    },
    "dashboard": {
      "title": "מרכז פיקוד תפעולי",
      "metric1": "הפחתת משימות ידניות",
      "metric1Value": "משמעותית",
      "metric2": "יצירת דוחות",
      "metric2Value": "אוטומטית",
      "metric3": "דיוק נתונים",
      "metric3Value": "99.9%",
      "status": "ניטור בזמן אמת פעיל"
    }
  },
  "socialProof": {
    "title": "מתמחים במצוינות עירונית ישראלית",
    "subtitle": "בנוי במיוחד לתהליכי עבודה בעברית/אנגלית ותקני ציות מקומיים"
  },
  "features": {
    "title": "הגיהנום של האקסל שלכם, נפתר",
    "subtitle": "הפסיקו להעתיק ולהדביק. התחילו לבצע אוטומציה לעבודה שאוכלת לכם את היום.",
    "card1": {
      "title": "הפכו כאוס אקסל לדוחות בלחיצת כפתור",
      "description": "הפכו דיווח שבועי מתהליך של מספר ימים ללחיצה אחת. משכו נתונים מכל המחלקות, עצבו אותם בצורה מושלמת ושלחו החוצה — אוטומטית."
    },
    "card2": {
      "title": "עצרו הזנת נתונים ידנית לתמיד",
      "description": "חילוץ נתונים אוטומטי ממסמכים וטפסים מבטל העתקה ידנית מ-PDF לגיליונות אלקטרוניים. מסדי הנתונים שלכם מתעדכנים מיידיים."
    },
    "card3": {
      "title": "לא תפספסו עוד דדליינים של ציות",
      "description": "התראות אוטומטיות לדוחות רגולטוריים. צרו מסמכים נדרשים על ידי המדינה עם נתונים עדכניים. אין יותר מאבק בסוף החודש."
    },
    "card4": {
      "title": "אפשרו שירותי תושבים 24/7 דרך ווטסאפ",
      "description": "תושבים יכולים לבדוק סטטוס היתרים, להגיש בקשות, לשלם אגרות ולקבל עדכונים דרך ווטסאפ ופורטלים מקוונים. מענה אוטומטי מטפל בפניות נפוצות מיידית."
    },
    "card5": {
      "title": "חברו את המערכות המפוזרות שלכם",
      "description": "אגף הכספים משתמש במערכת אחת, התכנון באחרת, משאבי אנוש בשלוש. אנחנו גורמים להן לתקשר אחת עם השנייה. מקור אמת אחד."
    },
    "card6": {
      "title": "הצוות שלכם באמת משתמש בזה",
      "description": "לא נדרש תואר IT. אם הם יודעים להשתמש באימייל, הם יודעים להשתמש בזה. אנחנו מכשירים את כולם ונשארים עד שהם מרגישים בנוח."
    }
  },
  "whatsapp": {
    "title": "פגשו את התושבים איפה שהם נמצאים - ווטסאפ",
    "subtitle": "אפשרו לתושבים גישה לשירותים עירוניים 24/7 דרך הערוץ התקשורתי המועדף עליהם",
    "features": {
      "status": {
        "title": "בדיקת סטטוס מיידית",
        "description": "בקשות היתרים, חידוש רישיונות ועדכוני בקשות שירות מועברים אוטומטית"
      },
      "requests": {
        "title": "הגשת בקשות שירות",
        "description": "דיווח על בעיות, בקשת שירותים והגשת תלונות עם צרופת תמונות ונתוני מיקום"
      },
      "updates": {
        "title": "קבלת התראות אוטומטיות",
        "description": "תזכורות תשלום, התראות דדליין והודעות עירוניות חשובות"
      },
      "access": {
        "title": "גישה למידע 24/7",
        "description": "שעות פעילות, פרטי קשר, טפסים ושאלות נפוצות זמינים בכל עת"
      }
    },
    "integration": {
      "title": "משולב בצורה חלקה עם המערכות העירוניות שלכם",
      "description": "תקשורת ווטסאפ מסונכרנת ישירות עם מסדי הנתונים ותהליכי העבודה הקיימים שלכם",
      "features": {
        "automated": "מענה אוטומטי",
        "multilingual": "תמיכה בעברית/אנגלית", 
        "secure": "מאובטח ופרטי",
        "compliant": "תואם ממשלתי"
      }
    }
  },
  "cta": {
    "title": "מוכנים לעצור את הטירוף הידני?",
    "subtitle": "30 דקות זה כל מה שנדרש כדי לראות כמה זמן תחסכו",
    "button": "קבעו פגישה של 30 דקות",
    "button_secondary": "למדו על התהליך",
    "testimonial": "הפכנו את הדיווח החודשי שלנו מתהליך של מספר ימים למסירה אוטומטית. הצוות שלנו יכול עכשיו להתמקד במתן שירות לתושבים במקום להילחם עם גיליונות אלקטרוניים.",
    "author": "אגף כספים עירוני"
  },
  "footer": {
    "tagline": "אוטומציה חכמה לארגונים מודרניים",
    "contact": {
      "title": "צור קשר",
      "email": "hello@synqer.ai", 
      "phone": "+972-XX-XXX-XXXX"
    },
    "links": {
      "privacy": "מדיניות פרטיות",
      "terms": "תנאי שירות",
      "security": "אבטחה",
      "compliance": "ציות"
    },
    "copyright": "© 2024 Synqer.ai. כל הזכויות שמורות."
  }
}
```

### 4.3 Hebrew-Specific Content Adjustments
- Municipal terminology (עירייה, רשות מקומית)
- Government processes (רישוי עסקים, היתרי בנייה)
- Compliance terms (דו"חות רבעוניים, ביקורת פנים)
- WhatsApp benefits in Hebrew context

## Phase 5: Component Updates (30 minutes)

### 5.1 Update Key Components for Bidirectionality
- Hero component: Button alignments and text flow
- Features component: Icon positioning and card layouts
- WhatsApp component: Chat bubble direction and grid flow
- GovTech section: Card layouts and statistics display
- Footer: Link organization and contact info layout

### 5.2 Form Handling
- Contact form Hebrew validation messages
- RTL input fields with proper placeholder alignment
- Hebrew form labels and error messages

## Phase 6: Testing & Polish (30 minutes)

### 6.1 Cross-Browser Testing
- Test RTL rendering in Chrome/Firefox/Safari
- Mobile responsive testing in Hebrew
- Dark mode compatibility with RTL
- Font rendering verification

### 6.2 Final Adjustments
- Fine-tune spacing/padding for Hebrew text
- Fix any text overflow issues
- Ensure proper link behaviors
- Verify language persistence across navigation
- Test form submissions in Hebrew

## Implementation Order

1. **Infrastructure first** - Enable Hebrew routing and locale support
2. **RTL styling** - Ensure proper visual direction before content
3. **Language toggle** - Allow switching between languages  
4. **Content translation** - Add all Hebrew text
5. **Component polish** - Fine-tune bidirectional layouts
6. **Testing** - Comprehensive QA across devices

## Key Technical Considerations

### SEO & Metadata
- Hebrew meta titles and descriptions
- `hreflang` tags for Hebrew pages
- Proper Open Graph tags for Hebrew content
- Hebrew sitemap generation

### Performance
- Hebrew font loading optimization
- RTL CSS bundle efficiency  
- Translation file size optimization

### Accessibility  
- Screen reader compatibility with Hebrew
- Keyboard navigation in RTL context
- High contrast mode with Hebrew fonts

## Success Metrics

✅ Full Hebrew site accessible at `/he/*` routes  
✅ Proper RTL rendering throughout all components  
✅ Seamless language switching preserving page context  
✅ All content professionally translated with municipal context  
✅ Mobile-responsive Hebrew experience  
✅ Meta compliance maintained in Hebrew version  
✅ Performance parity between English and Hebrew versions  
✅ Accessibility standards met for Hebrew users  

## Deployment Checklist

- [ ] Hebrew locale enabled in config
- [ ] Middleware updated for Hebrew routing
- [ ] RTL styles implemented and tested
- [ ] Language switcher component created
- [ ] All content translated to Hebrew
- [ ] Component layouts adjusted for RTL
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] Performance benchmarks met
- [ ] SEO metadata updated for Hebrew

---

**Total Estimated Time: 4-5 hours for complete Hebrew localization**

**Priority Level: Medium (after Meta approval process)**

**Dependencies: None - can be implemented immediately**