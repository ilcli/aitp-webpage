"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLocale } from 'next-intl';

export default function Accessibility() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert">
          <h1 className="mb-8 text-4xl font-bold text-foreground">
            {isHebrew ? 'הצהרת נגישות' : 'Accessibility Statement'}
          </h1>

          <p className="mb-6 text-accent-600 dark:text-accent-400">
            {isHebrew ? `עודכן לאחרונה: ${new Date().toLocaleDateString('he-IL')}` : `Last updated: ${new Date().toLocaleDateString()}`}
          </p>

          <div className="space-y-8 text-accent-700 dark:text-accent-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? 'המחויבות שלנו לנגישות' : 'Our Commitment to Accessibility'}
              </h2>
              <p>
                {isHebrew 
                  ? 'Synqer.ai מחויבת להבטיח נגישות דיגיטלית לאנשים עם מוגבלויות. אנו משפרים באופן רציף את חוויית המשתמש לכולם ומיישמים את סטנדרטי הנגישות הרלוונטיים.'
                  : 'Synqer.ai is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? 'תקני נגישות' : 'Accessibility Standards'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'אנו שואפים לעמוד בתקנים הבאים:'
                  : 'We aim to comply with the following standards:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>WCAG 2.1 Level AA:</strong> {isHebrew ? 'הנחיות נגישות תוכן אינטרנט' : 'Web Content Accessibility Guidelines'}</li>
                <li><strong>ADA:</strong> {isHebrew ? 'חוק האמריקאים עם מוגבלויות' : 'Americans with Disabilities Act'}</li>
                <li><strong>Section 508:</strong> {isHebrew ? 'תקן פדרלי אמריקאי לנגישות' : 'US Federal accessibility standard'}</li>
                <li><strong>EN 301 549:</strong> {isHebrew ? 'תקן אירופאי לנגישות ICT' : 'European standard for ICT accessibility'}</li>
                <li><strong>Israeli Standard 5568:</strong> {isHebrew ? 'תקן ישראלי לנגישות אתרי אינטרנט' : 'Israeli web accessibility standard'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? 'תכונות נגישות באתר' : 'Accessibility Features'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'האתר שלנו כולל את תכונות הנגישות הבאות:'
                  : 'Our website includes the following accessibility features:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'ניווט באמצעות מקלדת' : 'Keyboard navigation'}</li>
                <li>{isHebrew ? 'תמיכה בקוראי מסך' : 'Screen reader support'}</li>
                <li>{isHebrew ? 'טקסט חלופי לתמונות' : 'Alternative text for images'}</li>
                <li>{isHebrew ? 'ניגודיות צבעים מספקת' : 'Sufficient color contrast'}</li>
                <li>{isHebrew ? 'גודל טקסט ניתן להתאמה' : 'Resizable text'}</li>
                <li>{isHebrew ? 'תוויות ברורות לטפסים' : 'Clear form labels'}</li>
                <li>{isHebrew ? 'כותרות מובנות היררכית' : 'Hierarchical heading structure'}</li>
                <li>{isHebrew ? 'קישורי דילוג לתוכן' : 'Skip navigation links'}</li>
                <li>{isHebrew ? 'מצב ניגודיות גבוהה' : 'High contrast mode'}</li>
                <li>{isHebrew ? 'תמיכה בטכנולוגיות מסייעות' : 'Assistive technology support'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? 'תאימות דפדפנים וטכנולוגיות מסייעות' : 'Browser and Assistive Technology Compatibility'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'האתר שלנו נבדק ותואם עם:'
                  : 'Our website is tested and compatible with:'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    {isHebrew ? 'דפדפנים' : 'Browsers'}
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Chrome (latest)</li>
                    <li>Firefox (latest)</li>
                    <li>Safari (latest)</li>
                    <li>Edge (latest)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    {isHebrew ? 'קוראי מסך' : 'Screen Readers'}
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>JAWS</li>
                    <li>NVDA</li>
                    <li>VoiceOver</li>
                    <li>TalkBack</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? 'בעיות ידועות ופתרונות' : 'Known Issues and Workarounds'}
              </h2>
              <p>
                {isHebrew 
                  ? 'למרות מאמצינו הטובים ביותר, ייתכן שמשתמשים יתקלו בבעיות מסוימות. אנו עובדים באופן פעיל על פתרון בעיות אלה. בינתיים, אנא צור איתנו קשר לקבלת סיוע.'
                  : 'Despite our best efforts, users may encounter some issues. We are actively working to resolve these. In the meantime, please contact us for assistance.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? 'הערכה והיזון חוזר' : 'Assessment and Feedback'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'אנו מקבלים בברכה את המשוב שלך על נגישות האתר שלנו. אם נתקלת בבעיות נגישות או זקוק לסיוע, אנא צור קשר:'
                  : 'We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or need assistance, please contact:'}
              </p>
              <div className="bg-accent-50 dark:bg-accent-900 p-4 rounded-lg">
                <p><strong>{isHebrew ? 'דוא"ל נגישות:' : 'Accessibility Email:'}</strong> <a href="mailto:accessibility@synqer.ai" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">accessibility@synqer.ai</a></p>
                <p><strong>{isHebrew ? 'טלפון:' : 'Phone:'}</strong> +972 55-123-4567</p>
                <p><strong>{isHebrew ? 'זמן תגובה צפוי:' : 'Expected Response Time:'}</strong> {isHebrew ? '2 ימי עסקים' : '2 business days'}</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? 'תכניות שיפור מתמשכות' : 'Continuous Improvement Plans'}
              </h2>
              <p>
                {isHebrew 
                  ? 'אנו מחויבים לשיפור מתמיד של הנגישות. התוכניות שלנו כוללות:'
                  : 'We are committed to continuously improving accessibility. Our plans include:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'ביקורות נגישות רבעוניות' : 'Quarterly accessibility audits'}</li>
                <li>{isHebrew ? 'הכשרת צוות בנושאי נגישות' : 'Staff training on accessibility'}</li>
                <li>{isHebrew ? 'בדיקות משתמשים עם מוגבלויות' : 'User testing with people with disabilities'}</li>
                <li>{isHebrew ? 'עדכונים טכנולוגיים שוטפים' : 'Regular technology updates'}</li>
                <li>{isHebrew ? 'שיתוף פעולה עם מומחי נגישות' : 'Collaboration with accessibility experts'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? 'הליך תלונות רשמי' : 'Formal Complaints Procedure'}
              </h2>
              <p>
                {isHebrew 
                  ? 'אם אינך מרוצה מהתגובה שלנו לבעיית נגישות, תוכל להגיש תלונה רשמית לרשויות הרלוונטיות במדינתך. אנו מעודדים אותך ליצור איתנו קשר תחילה כדי שנוכל לפתור את הבעיה במישרין.'
                  : 'If you are not satisfied with our response to an accessibility issue, you may file a formal complaint with relevant authorities in your country. We encourage you to contact us first so we can resolve the issue directly.'}
              </p>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {isHebrew 
                  ? 'הצהרת נגישות זו מעודכנת נכון לתאריך הנקוב למעלה ונבדקת מדי רבעון.'
                  : 'This accessibility statement is current as of the date above and is reviewed quarterly.'}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}