"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLocale } from 'next-intl';

export default function Privacy() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert">
          <h1 className="mb-8 text-4xl font-bold text-foreground">
            {isHebrew ? 'מדיניות פרטיות' : 'Privacy Policy'}
          </h1>

          <p className="mb-6 text-accent-600 dark:text-accent-400">
            {isHebrew ? `עודכן לאחרונה: ${new Date().toLocaleDateString('he-IL')}` : `Last updated: ${new Date().toLocaleDateString()}`}
          </p>

          <div className="space-y-8 text-accent-700 dark:text-accent-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '1. מבוא' : '1. Introduction'}
              </h2>
              <p>
                {isHebrew 
                  ? 'Synqer.ai ("אנחנו", "שלנו") מחויבת להגן על הפרטיות של המשתמשים שלנו. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, חושפים ומגנים על המידע שלך בעת השימוש בשירותים שלנו.'
                  : 'Synqer.ai ("we", "us", "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '2. מידע שאנו אוספים' : '2. Information We Collect'}
              </h2>
              <h3 className="mb-2 text-xl font-medium text-foreground">
                {isHebrew ? '2.1 מידע שאתה מספק' : '2.1 Information You Provide'}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'פרטי קשר (שם, דוא"ל, טלפון, שם הארגון)' : 'Contact information (name, email, phone, organization name)'}</li>
                <li>{isHebrew ? 'מידע עסקי ותפעולי הקשור לשירותים שלנו' : 'Business and operational information related to our services'}</li>
                <li>{isHebrew ? 'תוכן התקשורת איתנו' : 'Communications content with us'}</li>
                <li>{isHebrew ? 'מידע תשלום (מעובד באמצעות ספקי תשלום מאובטחים)' : 'Payment information (processed through secure payment providers)'}</li>
              </ul>

              <h3 className="mb-2 text-xl font-medium text-foreground mt-4">
                {isHebrew ? '2.2 מידע שנאסף אוטומטית' : '2.2 Automatically Collected Information'}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'כתובת IP ומידע על הדפדפן' : 'IP address and browser information'}</li>
                <li>{isHebrew ? 'עוגיות ומזהים דומים' : 'Cookies and similar identifiers'}</li>
                <li>{isHebrew ? 'דפוסי שימוש ואינטראקציה עם השירותים שלנו' : 'Usage patterns and interactions with our services'}</li>
                <li>{isHebrew ? 'מידע על המכשיר (סוג, מערכת הפעלה)' : 'Device information (type, operating system)'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '3. כיצד אנו משתמשים במידע שלך' : '3. How We Use Your Information'}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'לספק, לתחזק ולשפר את השירותים שלנו' : 'To provide, maintain, and improve our services'}</li>
                <li>{isHebrew ? 'לתקשר איתך לגבי השירותים והעדכונים' : 'To communicate with you about services and updates'}</li>
                <li>{isHebrew ? 'לעבד תשלומים ועסקאות' : 'To process payments and transactions'}</li>
                <li>{isHebrew ? 'להתאים אישית את החוויה שלך' : 'To personalize your experience'}</li>
                <li>{isHebrew ? 'לעמוד בדרישות חוקיות ורגולטוריות' : 'To comply with legal and regulatory requirements'}</li>
                <li>{isHebrew ? 'להגן מפני הונאה ופעילויות בלתי חוקיות' : 'To protect against fraud and illegal activities'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '4. בסיס חוקי לעיבוד (GDPR)' : '4. Legal Basis for Processing (GDPR)'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'אנו מעבדים מידע אישי על בסיס:'
                  : 'We process personal information based on:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{isHebrew ? 'הסכמה:' : 'Consent:'}</strong> {isHebrew ? 'כאשר נתת הסכמה לעיבוד' : 'Where you have given consent to processing'}</li>
                <li><strong>{isHebrew ? 'חוזה:' : 'Contract:'}</strong> {isHebrew ? 'כאשר העיבוד נחוץ לביצוע חוזה איתך' : 'Where processing is necessary for contract performance'}</li>
                <li><strong>{isHebrew ? 'אינטרסים לגיטימיים:' : 'Legitimate Interests:'}</strong> {isHebrew ? 'לשיפור השירותים ולתפעול עסקי' : 'For improving services and business operations'}</li>
                <li><strong>{isHebrew ? 'חובה חוקית:' : 'Legal Obligation:'}</strong> {isHebrew ? 'כאשר נדרש על פי חוק' : 'Where required by law'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '5. שיתוף מידע' : '5. Information Sharing'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'אנו עשויים לשתף מידע עם:'
                  : 'We may share information with:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'ספקי שירות המסייעים בתפעול השירותים שלנו' : 'Service providers who assist in operating our services'}</li>
                <li>{isHebrew ? 'שותפים עסקיים בהסכמתך' : 'Business partners with your consent'}</li>
                <li>{isHebrew ? 'רשויות חוק כנדרש' : 'Law enforcement when required'}</li>
                <li>{isHebrew ? 'במקרה של מיזוג, רכישה או מכירת נכסים' : 'In case of merger, acquisition, or asset sale'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '6. אבטחת מידע' : '6. Data Security'}
              </h2>
              <p>
                {isHebrew 
                  ? 'אנו מיישמים אמצעי אבטחה טכניים וארגוניים מתאימים להגנה על המידע שלך, כולל:'
                  : 'We implement appropriate technical and organizational security measures to protect your information, including:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>{isHebrew ? 'הצפנת נתונים בהעברה ובמנוחה' : 'Encryption of data in transit and at rest'}</li>
                <li>{isHebrew ? 'בקרות גישה וזיהוי' : 'Access controls and authentication'}</li>
                <li>{isHebrew ? 'ביקורות אבטחה תקופתיות' : 'Regular security audits'}</li>
                <li>{isHebrew ? 'הכשרת עובדים באבטחת מידע' : 'Employee training on data security'}</li>
                <li>{isHebrew ? 'תוכניות תגובה לאירועי אבטחה' : 'Incident response procedures'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '7. הזכויות שלך' : '7. Your Rights'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'בהתאם לחוקי הגנת הפרטיות החלים, יש לך זכות:'
                  : 'Under applicable privacy laws, you have the right to:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'לגשת למידע האישי שלך' : 'Access your personal information'}</li>
                <li>{isHebrew ? 'לתקן מידע לא מדויק' : 'Correct inaccurate information'}</li>
                <li>{isHebrew ? 'לבקש מחיקת המידע שלך' : 'Request deletion of your information'}</li>
                <li>{isHebrew ? 'להתנגד לעיבוד מסוים' : 'Object to certain processing'}</li>
                <li>{isHebrew ? 'לבקש הגבלת עיבוד' : 'Request restriction of processing'}</li>
                <li>{isHebrew ? 'לקבל העתק של המידע שלך (ניידות נתונים)' : 'Receive a copy of your data (data portability)'}</li>
                <li>{isHebrew ? 'לבטל הסכמה בכל עת' : 'Withdraw consent at any time'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '8. שמירת נתונים' : '8. Data Retention'}
              </h2>
              <p>
                {isHebrew 
                  ? 'אנו שומרים מידע אישי רק כל עוד נחוץ למטרות שלשמן נאסף, כולל עמידה בדרישות חוקיות, חשבונאיות או דיווח. תקופות השמירה משתנות בהתאם לסוג המידע ולמטרת השימוש.'
                  : 'We retain personal information only for as long as necessary for the purposes for which it was collected, including to meet legal, accounting, or reporting requirements. Retention periods vary based on the type of information and purpose of use.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '9. העברות בינלאומיות' : '9. International Transfers'}
              </h2>
              <p>
                {isHebrew 
                  ? 'המידע שלך עשוי להיות מועבר ומאוחסן במדינות מחוץ למדינת מגוריך. אנו מבטיחים שהעברות כאלה מוגנות באמצעים מתאימים, כולל סעיפי הגנה חוזיים סטנדרטיים או מנגנונים אחרים המאושרים על ידי רשויות הגנת הפרטיות.'
                  : 'Your information may be transferred to and stored in countries outside your country of residence. We ensure such transfers are protected by appropriate safeguards, including standard contractual clauses or other mechanisms approved by privacy authorities.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '10. עוגיות ומעקב' : '10. Cookies and Tracking'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'אנו משתמשים בעוגיות וטכנולוגיות מעקב דומות כדי:'
                  : 'We use cookies and similar tracking technologies to:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'לשמור את ההעדפות שלך' : 'Remember your preferences'}</li>
                <li>{isHebrew ? 'לנתח את השימוש באתר' : 'Analyze site usage'}</li>
                <li>{isHebrew ? 'לשפר את השירותים שלנו' : 'Improve our services'}</li>
                <li>{isHebrew ? 'למטרות שיווק (עם הסכמתך)' : 'For marketing purposes (with your consent)'}</li>
              </ul>
              <p className="mt-4">
                {isHebrew 
                  ? 'תוכל לנהל את העדפות העוגיות שלך דרך הגדרות הדפדפן או באנר העוגיות שלנו.'
                  : 'You can manage cookie preferences through your browser settings or our cookie banner.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '11. פרטיות ילדים' : '11. Children\'s Privacy'}
              </h2>
              <p>
                {isHebrew 
                  ? 'השירותים שלנו אינם מיועדים לילדים מתחת לגיל 16. איננו אוספים ביודעין מידע אישי מילדים מתחת לגיל זה. אם אתה הורה או אפוטרופוס וגילית שילדך סיפק לנו מידע אישי, אנא צור איתנו קשר.'
                  : 'Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and discover that your child has provided us with personal information, please contact us.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '12. עדכונים למדיניות זו' : '12. Updates to This Policy'}
              </h2>
              <p>
                {isHebrew 
                  ? 'אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. נודיע לך על שינויים מהותיים באמצעות דוא"ל או הודעה באתר שלנו. אנו ממליצים לסקור מדיניות זו באופן תקופתי.'
                  : 'We may update this Privacy Policy from time to time. We will notify you of material changes via email or notice on our website. We encourage you to review this policy periodically.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '13. צור קשר' : '13. Contact Us'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'לשאלות או בקשות בנוגע למדיניות פרטיות זו או לנושאי פרטיות, אנא צור קשר:'
                  : 'For questions or requests regarding this Privacy Policy or privacy matters, please contact:'}
              </p>
              <div className="bg-accent-50 dark:bg-accent-900 p-4 rounded-lg">
                <p className="font-semibold">Synqer.ai</p>
                <p>{isHebrew ? 'דוא"ל:' : 'Email:'} <a href="mailto:privacy@synqer.ai" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">privacy@synqer.ai</a></p>
                <p>{isHebrew ? 'טלפון:' : 'Phone:'} +972 55-123-4567</p>
                <p>{isHebrew ? 'כתובת:' : 'Address:'} Tel Aviv, Israel</p>
              </div>
              
              <p className="mt-4">
                <strong>{isHebrew ? 'ממונה הגנת מידע (DPO):' : 'Data Protection Officer (DPO):'}</strong><br />
                {isHebrew ? 'דוא"ל:' : 'Email:'} <a href="mailto:dpo@synqer.ai" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">dpo@synqer.ai</a>
              </p>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {isHebrew 
                  ? 'מדיניות זו תואמת את GDPR, CCPA, וחוקי הגנת הפרטיות הישראליים.'
                  : 'This policy complies with GDPR, CCPA, and Israeli Privacy Protection Laws.'}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}