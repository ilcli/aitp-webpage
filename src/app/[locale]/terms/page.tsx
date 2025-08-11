"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLocale } from 'next-intl';

export default function Terms() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert">
          <h1 className="mb-8 text-4xl font-bold text-foreground">
            {isHebrew ? 'תנאי שימוש' : 'Terms of Service'}
          </h1>

          <p className="mb-6 text-accent-600 dark:text-accent-400">
            {isHebrew ? `עודכן לאחרונה: ${new Date().toLocaleDateString('he-IL')}` : `Last updated: ${new Date().toLocaleDateString()}`}
          </p>

          <div className="space-y-8 text-accent-700 dark:text-accent-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '1. קבלת התנאים' : '1. Acceptance of Terms'}
              </h2>
              <p>
                {isHebrew 
                  ? 'על ידי גישה ושימוש בשירותי Synqer.ai ("השירותים"), אתה מסכים להיות מחויב לתנאי שימוש אלה ("התנאים") ולכל החוקים והתקנות החלים. אם אינך מסכים לתנאים אלה, אנא הימנע משימוש בשירותים שלנו.'
                  : 'By accessing and using Synqer.ai services ("Services"), you agree to be bound by these Terms of Service ("Terms") and all applicable laws and regulations. If you do not agree to these Terms, please do not use our Services.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '2. תיאור השירותים' : '2. Service Description'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'Synqer.ai מספקת פתרונות אוטומציה חכמים לרשויות מקומיות וארגונים, כולל:'
                  : 'Synqer.ai provides intelligent automation solutions for municipalities and organizations, including:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'אוטומציה של תהליכי עבודה' : 'Workflow automation'}</li>
                <li>{isHebrew ? 'עיבוד וניתוח נתונים' : 'Data processing and analytics'}</li>
                <li>{isHebrew ? 'הפקת דוחות אוטומטית' : 'Automated report generation'}</li>
                <li>{isHebrew ? 'אינטגרציה בין מערכות' : 'System integration'}</li>
                <li>{isHebrew ? 'הכשרה ותמיכה טכנית' : 'Training and technical support'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '3. רישום חשבון' : '3. Account Registration'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'כדי להשתמש בשירותים מסוימים, ייתכן שתצטרך ליצור חשבון. אתה מתחייב:'
                  : 'To use certain Services, you may need to create an account. You agree to:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'לספק מידע מדויק, עדכני ומלא' : 'Provide accurate, current, and complete information'}</li>
                <li>{isHebrew ? 'לשמור על אבטחת הסיסמה שלך' : 'Maintain the security of your password'}</li>
                <li>{isHebrew ? 'להודיע לנו מיד על כל שימוש לא מורשה' : 'Notify us immediately of any unauthorized use'}</li>
                <li>{isHebrew ? 'לקחת אחריות על כל הפעילות בחשבון שלך' : 'Accept responsibility for all activities under your account'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '4. שימוש מקובל' : '4. Acceptable Use'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'אתה מסכים להשתמש בשירותים רק למטרות חוקיות ובהתאם לתנאים אלה. אתה מסכים שלא:'
                  : 'You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'להפר חוקים או תקנות כלשהם' : 'Violate any laws or regulations'}</li>
                <li>{isHebrew ? 'להפר זכויות קניין רוחני' : 'Infringe intellectual property rights'}</li>
                <li>{isHebrew ? 'להעלות תוכן זדוני או מזיק' : 'Upload malicious or harmful content'}</li>
                <li>{isHebrew ? 'לנסות לקבל גישה לא מורשית למערכות' : 'Attempt unauthorized access to systems'}</li>
                <li>{isHebrew ? 'להפריע לתפעול השירותים' : 'Interfere with Service operations'}</li>
                <li>{isHebrew ? 'להשתמש בשירותים למטרות תחרותיות' : 'Use Services for competitive purposes'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '5. קניין רוחני' : '5. Intellectual Property'}
              </h2>
              <p>
                {isHebrew 
                  ? 'כל התוכן, התכונות והפונקציונליות של השירותים, כולל טקסט, גרפיקה, לוגואים, אייקונים, תמונות וקוד, הם רכוש בלעדי של Synqer.ai או המעניקים שלה ומוגנים על ידי חוקי זכויות יוצרים, סימני מסחר וחוקי קניין רוחני אחרים.'
                  : 'All content, features, and functionality of the Services, including text, graphics, logos, icons, images, and code, are the exclusive property of Synqer.ai or its licensors and are protected by copyright, trademark, and other intellectual property laws.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '6. רישיון שימוש' : '6. License Grant'}
              </h2>
              <p>
                {isHebrew 
                  ? 'בכפוף לעמידה בתנאים אלה, אנו מעניקים לך רישיון מוגבל, לא בלעדי, לא ניתן להעברה ולא ניתן לרישיון משנה לגשת ולהשתמש בשירותים למטרות העסקיות הפנימיות שלך.'
                  : 'Subject to compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your internal business purposes.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '7. תוכן משתמש' : '7. User Content'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'אתה שומר על הבעלות על התוכן שאתה מעלה לשירותים. על ידי העלאת תוכן, אתה מעניק לנו רישיון עולמי, לא בלעדי, ללא תמלוגים להשתמש בתוכן שלך כנדרש לאספקת השירותים.'
                  : 'You retain ownership of content you upload to the Services. By uploading content, you grant us a worldwide, non-exclusive, royalty-free license to use your content as necessary to provide the Services.'}
              </p>
              <p>
                {isHebrew 
                  ? 'אתה מצהיר ומתחייב שיש לך את כל הזכויות הדרושות בתוכן שלך ושהשימוש שלך לא מפר זכויות של צד שלישי.'
                  : 'You represent and warrant that you have all necessary rights to your content and that your use does not infringe third-party rights.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '8. תשלום ומחירים' : '8. Payment and Pricing'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'תנאי התשלום עבור השירותים יוגדרו בהסכם נפרד או בהצעת מחיר. כל המחירים:'
                  : 'Payment terms for Services will be set forth in a separate agreement or quote. All prices:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'אינם כוללים מסים החלים' : 'Exclude applicable taxes'}</li>
                <li>{isHebrew ? 'ישולמו בהתאם לתנאי התשלום המוסכמים' : 'Are payable according to agreed payment terms'}</li>
                <li>{isHebrew ? 'אינם ניתנים להחזר אלא אם נקבע אחרת' : 'Are non-refundable unless otherwise stated'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '9. סודיות' : '9. Confidentiality'}
              </h2>
              <p>
                {isHebrew 
                  ? 'שני הצדדים מסכימים לשמור על סודיות כל המידע הסודי שהתקבל מהצד השני ולהשתמש בו רק למטרות ביצוע התחייבויותיהם תחת תנאים אלה.'
                  : 'Both parties agree to maintain the confidentiality of all confidential information received from the other party and to use it only for purposes of performing their obligations under these Terms.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '10. הגבלת אחריות' : '10. Limitation of Liability'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'במידה המרבית המותרת על פי חוק:'
                  : 'To the maximum extent permitted by law:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew 
                  ? 'השירותים מסופקים "כמות שהם" ללא אחריות מכל סוג'
                  : 'Services are provided "as is" without warranties of any kind'}</li>
                <li>{isHebrew 
                  ? 'איננו אחראים לנזקים עקיפים, מיוחדים או תוצאתיים'
                  : 'We are not liable for indirect, special, or consequential damages'}</li>
                <li>{isHebrew 
                  ? 'אחריותנו הכוללת מוגבלת לסכום ששולם בפועל עבור השירותים'
                  : 'Our total liability is limited to amounts actually paid for Services'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '11. שיפוי' : '11. Indemnification'}
              </h2>
              <p>
                {isHebrew 
                  ? 'אתה מסכים לשפות ולהגן על Synqer.ai, עובדיה ושותפיה מפני כל תביעה, נזק, הפסד או הוצאה הנובעים מהפרת תנאים אלה או שימוש לא ראוי בשירותים.'
                  : 'You agree to indemnify and defend Synqer.ai, its employees, and partners from any claims, damages, losses, or expenses arising from your breach of these Terms or misuse of the Services.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '12. סיום' : '12. Termination'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'אנו רשאים להשעות או לסיים את הגישה שלך לשירותים:'
                  : 'We may suspend or terminate your access to Services:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew ? 'בגין הפרת תנאים אלה' : 'For breach of these Terms'}</li>
                <li>{isHebrew ? 'בגין אי תשלום' : 'For non-payment'}</li>
                <li>{isHebrew ? 'מסיבות משפטיות או רגולטוריות' : 'For legal or regulatory reasons'}</li>
                <li>{isHebrew ? 'בהודעה של 30 יום מכל סיבה' : 'With 30 days notice for any reason'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '13. הגנת נתונים' : '13. Data Protection'}
              </h2>
              <p>
                {isHebrew 
                  ? 'אנו מעבדים נתונים אישיים בהתאם למדיניות הפרטיות שלנו ולכל חוקי הגנת המידע החלים, כולל GDPR וחוקי הגנת הפרטיות הישראליים.'
                  : 'We process personal data in accordance with our Privacy Policy and all applicable data protection laws, including GDPR and Israeli Privacy Protection Laws.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '14. עוגיות באקסלנס' : '14. Force Majeure'}
              </h2>
              <p>
                {isHebrew 
                  ? 'אף צד לא יישא באחריות לעיכובים או כשלים בביצוע הנובעים מנסיבות שאינן בשליטתו הסבירה, כולל אסונות טבע, מלחמה, טרור, מגפות או הפרעות תקשורת.'
                  : 'Neither party shall be liable for delays or failures in performance resulting from circumstances beyond its reasonable control, including natural disasters, war, terrorism, pandemics, or communication disruptions.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '15. שינויים לתנאים' : '15. Changes to Terms'}
              </h2>
              <p>
                {isHebrew 
                  ? 'אנו רשאים לעדכן תנאים אלה מעת לעת. נודיע לך על שינויים מהותיים באמצעות דוא"ל או הודעה בשירותים. המשך השימוש בשירותים לאחר שינויים כאלה מהווה הסכמה לתנאים המעודכנים.'
                  : 'We may update these Terms from time to time. We will notify you of material changes via email or notice in the Services. Continued use of Services after such changes constitutes acceptance of the updated Terms.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '16. דין חל' : '16. Governing Law'}
              </h2>
              <p>
                {isHebrew 
                  ? 'תנאים אלה יפורשו בהתאם לחוקי מדינת ישראל. כל סכסוך הנובע מתנאים אלה יידון בבתי המשפט המוסמכים בתל אביב-יפו.'
                  : 'These Terms shall be governed by the laws of the State of Israel. Any disputes arising from these Terms shall be resolved in the competent courts of Tel Aviv-Jaffa.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '17. תנאים כלליים' : '17. General Provisions'}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isHebrew 
                  ? 'תנאים אלה מהווים את ההסכם המלא בין הצדדים'
                  : 'These Terms constitute the entire agreement between parties'}</li>
                <li>{isHebrew 
                  ? 'אם סעיף כלשהו נמצא בלתי חוקי, יתר הסעיפים יישארו בתוקף'
                  : 'If any provision is found unlawful, remaining provisions remain valid'}</li>
                <li>{isHebrew 
                  ? 'אי אכיפה של זכות אינה מהווה ויתור עליה'
                  : 'Non-enforcement of any right does not constitute waiver'}</li>
                <li>{isHebrew 
                  ? 'אינך רשאי להעביר את זכויותיך ללא הסכמתנו בכתב'
                  : 'You may not assign your rights without our written consent'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                {isHebrew ? '18. צור קשר' : '18. Contact Information'}
              </h2>
              <p className="mb-4">
                {isHebrew 
                  ? 'לשאלות או הבהרות בנוגע לתנאי שימוש אלה, אנא צור קשר:'
                  : 'For questions or clarifications regarding these Terms of Service, please contact:'}
              </p>
              <div className="bg-accent-50 dark:bg-accent-900 p-4 rounded-lg">
                <p className="font-semibold">Synqer.ai</p>
                <p>{isHebrew ? 'דוא"ל:' : 'Email:'} <a href="mailto:legal@synqer.ai" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">legal@synqer.ai</a></p>
                <p>{isHebrew ? 'טלפון:' : 'Phone:'} +972 55-123-4567</p>
                <p>{isHebrew ? 'כתובת:' : 'Address:'} Tel Aviv, Israel</p>
              </div>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {isHebrew 
                  ? 'על ידי השימוש בשירותים שלנו, אתה מאשר שקראת, הבנת והסכמת להיות מחויב לתנאי שימוש אלה.'
                  : 'By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.'}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}