"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLocale } from 'next-intl';

export default function Cookies() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert">
          <h1 className="mb-8 text-4xl font-bold text-foreground">
            {isHebrew ? 'מדיניות עוגיות' : 'Cookie Policy'}
          </h1>

          <p className="mb-6 text-accent-600 dark:text-accent-400">
            {isHebrew ? `עודכן לאחרונה: ${new Date().toLocaleDateString('he-IL')}` : `Last updated: ${new Date().toLocaleDateString()}`}
          </p>

          <div className="space-y-8 text-accent-700 dark:text-accent-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '1. מה הן עוגיות?' : '1. What Are Cookies?'}
              </h2>
              <p>
                {isHebrew 
                  ? 'עוגיות הן קבצי טקסט קטנים המאוחסנים במכשיר שלך כאשר אתה מבקר באתר אינטרנט. הן עוזרות לאתר לזכור מידע על הביקור שלך, כמו השפה המועדפת עליך והעדפות אחרות.'
                  : 'Cookies are small text files stored on your device when you visit a website. They help the website remember information about your visit, such as your preferred language and other preferences.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '2. סוגי עוגיות שאנו משתמשים' : '2. Types of Cookies We Use'}
              </h2>
              
              <div className="space-y-4">
                <div className="bg-accent-50 dark:bg-accent-900 p-4 rounded-lg">
                  <h3 className="mb-2 text-xl font-medium text-foreground">
                    {isHebrew ? 'עוגיות הכרחיות' : 'Essential Cookies'}
                  </h3>
                  <p className="mb-2">
                    {isHebrew 
                      ? 'עוגיות אלה נדרשות לתפעול האתר שלנו. הן כוללות עוגיות המאפשרות לך להתחבר לאזורים מאובטחים באתר שלנו.'
                      : 'These cookies are required for the operation of our website. They include cookies that enable you to log into secure areas of our website.'}
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>{isHebrew ? 'אימות משתמש' : 'User authentication'}</li>
                    <li>{isHebrew ? 'העדפות שפה' : 'Language preferences'}</li>
                    <li>{isHebrew ? 'אבטחת הפעלה' : 'Session security'}</li>
                  </ul>
                </div>

                <div className="bg-accent-50 dark:bg-accent-900 p-4 rounded-lg">
                  <h3 className="mb-2 text-xl font-medium text-foreground">
                    {isHebrew ? 'עוגיות ביצועים' : 'Performance Cookies'}
                  </h3>
                  <p className="mb-2">
                    {isHebrew 
                      ? 'עוגיות אלה מאפשרות לנו לספור ביקורים ומקורות תנועה כדי למדוד ולשפר את הביצועים של האתר שלנו.'
                      : 'These cookies allow us to count visits and traffic sources to measure and improve the performance of our site.'}
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Google Analytics (_ga, _gid, _gat)</li>
                    <li>{isHebrew ? 'ניתוח דפים שנצפו' : 'Page view analytics'}</li>
                    <li>{isHebrew ? 'זמן שהייה באתר' : 'Time spent on site'}</li>
                  </ul>
                </div>

                <div className="bg-accent-50 dark:bg-accent-900 p-4 rounded-lg">
                  <h3 className="mb-2 text-xl font-medium text-foreground">
                    {isHebrew ? 'עוגיות פונקציונליות' : 'Functional Cookies'}
                  </h3>
                  <p className="mb-2">
                    {isHebrew 
                      ? 'עוגיות אלה מאפשרות לאתר לספק פונקציונליות משופרת והתאמה אישית.'
                      : 'These cookies enable the website to provide enhanced functionality and personalization.'}
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>{isHebrew ? 'העדפות ערכת נושא (בהיר/כהה)' : 'Theme preferences (light/dark)'}</li>
                    <li>{isHebrew ? 'הגדרות תצוגה' : 'Display settings'}</li>
                    <li>{isHebrew ? 'העדפות משתמש' : 'User preferences'}</li>
                  </ul>
                </div>

                <div className="bg-accent-50 dark:bg-accent-900 p-4 rounded-lg">
                  <h3 className="mb-2 text-xl font-medium text-foreground">
                    {isHebrew ? 'עוגיות שיווק' : 'Marketing Cookies'}
                  </h3>
                  <p className="mb-2">
                    {isHebrew 
                      ? 'עוגיות אלה עשויות להיות מוגדרות דרך האתר שלנו על ידי שותפי הפרסום שלנו.'
                      : 'These cookies may be set through our site by our advertising partners.'}
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>LinkedIn Insights</li>
                    <li>Facebook Pixel</li>
                    <li>Google Ads</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '3. עוגיות צד שלישי' : '3. Third-Party Cookies'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'אנו משתמשים בשירותי צד שלישי שעשויים להגדיר עוגיות:'
                  : 'We use third-party services that may set cookies:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> {isHebrew ? 'לניתוח שימוש באתר' : 'For website usage analytics'}</li>
                <li><strong>Calendly:</strong> {isHebrew ? 'לתזמון פגישות' : 'For appointment scheduling'}</li>
                <li><strong>Cloudflare:</strong> {isHebrew ? 'לאבטחה וביצועים' : 'For security and performance'}</li>
                <li><strong>Microsoft Clarity:</strong> {isHebrew ? 'להבנת התנהגות משתמשים' : 'For understanding user behavior'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '4. משך חיי העוגיות' : '4. Cookie Duration'}
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-foreground">
                    {isHebrew ? 'עוגיות סשן' : 'Session Cookies'}
                  </h3>
                  <p>
                    {isHebrew 
                      ? 'נמחקות אוטומטית כאשר אתה סוגר את הדפדפן שלך.'
                      : 'Automatically deleted when you close your browser.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {isHebrew ? 'עוגיות קבועות' : 'Persistent Cookies'}
                  </h3>
                  <p>
                    {isHebrew 
                      ? 'נשארות במכשיר שלך לתקופה שנקבעה או עד שתמחק אותן ידנית.'
                      : 'Remain on your device for a set period or until you manually delete them.'}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '5. ניהול העדפות עוגיות' : '5. Managing Cookie Preferences'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'יש לך מספר אפשרויות לניהול עוגיות:'
                  : 'You have several options for managing cookies:'}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    {isHebrew ? 'הגדרות דפדפן' : 'Browser Settings'}
                  </h3>
                  <p className="mb-2">
                    {isHebrew 
                      ? 'רוב הדפדפנים מאפשרים לך לשלוט בעוגיות דרך ההגדרות שלהם:'
                      : 'Most browsers allow you to control cookies through their settings:'}
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Edge</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    {isHebrew ? 'ביטול מעקב' : 'Opt-Out Links'}
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Google Analytics Opt-out</a></li>
                    <li><a href="https://www.facebook.com/help/568137493302217" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Facebook Ads Settings</a></li>
                    <li><a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">LinkedIn Ads Opt-out</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '6. השפעת חסימת עוגיות' : '6. Impact of Blocking Cookies'}
              </h2>
              <p>
                {isHebrew 
                  ? 'חסימת כל העוגיות עלולה להשפיע על החוויה שלך באתר. חלק מהתכונות עלולות לא לפעול כראוי, כולל:'
                  : 'Blocking all cookies may impact your experience on our site. Some features may not work properly, including:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>{isHebrew ? 'שמירת העדפות שפה' : 'Saving language preferences'}</li>
                <li>{isHebrew ? 'שמירת העדפות ערכת נושא' : 'Saving theme preferences'}</li>
                <li>{isHebrew ? 'גישה לאזורים מאובטחים' : 'Accessing secure areas'}</li>
                <li>{isHebrew ? 'טפסים ופונקציונליות אינטראקטיבית' : 'Forms and interactive functionality'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '7. טכנולוגיות דומות' : '7. Similar Technologies'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'בנוסף לעוגיות, אנו עשויים להשתמש ב:'
                  : 'In addition to cookies, we may use:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{isHebrew ? 'אחסון מקומי:' : 'Local Storage:'}</strong> {isHebrew ? 'לאחסון העדפות משתמש' : 'To store user preferences'}</li>
                <li><strong>{isHebrew ? 'אחסון סשן:' : 'Session Storage:'}</strong> {isHebrew ? 'לנתונים זמניים במהלך הביקור שלך' : 'For temporary data during your visit'}</li>
                <li><strong>{isHebrew ? 'Web Beacons:' : 'Web Beacons:'}</strong> {isHebrew ? 'למעקב אחר אינטראקציות עם אימיילים' : 'To track interactions with emails'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '8. עדכונים למדיניות זו' : '8. Updates to This Policy'}
              </h2>
              <p>
                {isHebrew 
                  ? 'אנו עשויים לעדכן מדיניות עוגיות זו מעת לעת כדי לשקף שינויים בשיטות העבודה שלנו או מסיבות תפעוליות, משפטיות או רגולטוריות אחרות.'
                  : 'We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '9. צור קשר' : '9. Contact Us'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'אם יש לך שאלות לגבי מדיניות העוגיות שלנו, אנא צור קשר:'
                  : 'If you have questions about our Cookie Policy, please contact:'}
              </p>
              <div className="bg-accent-50 dark:bg-accent-900 p-4 rounded-lg">
                <p>{isHebrew ? 'דוא"ל:' : 'Email:'} <a href="mailto:privacy@synqer.ai" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">privacy@synqer.ai</a></p>
                <p>{isHebrew ? 'טלפון:' : 'Phone:'} +972 55-123-4567</p>
                <p>{isHebrew ? 'כתובת:' : 'Address:'} Tel Aviv, Israel</p>
              </div>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {isHebrew 
                  ? 'מדיניות זו תואמת את דרישות GDPR, CCPA ו-ePrivacy Directive.'
                  : 'This policy complies with GDPR, CCPA, and ePrivacy Directive requirements.'}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}