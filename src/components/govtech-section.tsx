"use client";

import { useTranslations, useLocale } from 'next-intl';
import { CheckCircleIcon, TrophyIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export function GovTechSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isHebrew = locale === 'he';

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-background to-accent-50 dark:from-accent-900 dark:via-background dark:to-accent-800 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <RocketLaunchIcon className="h-8 w-8 text-primary-600 mr-2" />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {isHebrew ? 'תכנית GovTech ישראל' : 'Israeli GovTech Program'}
            </h2>
          </div>
          <p className="mx-auto max-w-3xl text-lg text-accent-600 dark:text-accent-400">
            {isHebrew 
              ? 'השקעה של 100 מיליון ₪ בפתרונות אוטומציה חכמה למגזר הציבורי עם שיעור הצלחה של 72%'
              : 'NIS 100 million investment in smart automation solutions for the public sector with 72% success rate'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Success Rate Card */}
          <div className="bg-white dark:bg-accent-900 rounded-xl shadow-lg p-6 border border-accent-200 dark:border-accent-700">
            <div className="flex items-center mb-4">
              <TrophyIcon className="h-8 w-8 text-primary-600 mr-3" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {isHebrew ? 'שיעור הצלחה' : 'Success Rate'}
                </h3>
                <p className="text-3xl font-bold text-primary-600">72%</p>
              </div>
            </div>
            <p className="text-accent-600 dark:text-accent-400">
              {isHebrew 
                ? 'מתוך 200 יוזמות GovTech שהושקו בישראל'
                : 'Out of 200 GovTech initiatives launched in Israel'
              }
            </p>
          </div>

          {/* Investment Card */}
          <div className="bg-white dark:bg-accent-900 rounded-xl shadow-lg p-6 border border-accent-200 dark:border-accent-700">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 dark:bg-green-900 rounded-lg p-3 mr-3">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {isHebrew ? 'השקעה כוללת' : 'Total Investment'}
                </h3>
                <p className="text-3xl font-bold text-green-600">₪100M</p>
              </div>
            </div>
            <p className="text-accent-600 dark:text-accent-400">
              {isHebrew 
                ? 'השקעת רשות החדשנות בפתרונות טכנולוגיים'
                : 'Innovation Authority investment in tech solutions'
              }
            </p>
          </div>

          {/* Municipalities Card */}
          <div className="bg-white dark:bg-accent-900 rounded-xl shadow-lg p-6 border border-accent-200 dark:border-accent-700">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mr-3">
                <span className="text-2xl">🏛️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {isHebrew ? 'רשויות מקומיות' : 'Municipalities'}
                </h3>
                <p className="text-3xl font-bold text-blue-600">15</p>
              </div>
            </div>
            <p className="text-accent-600 dark:text-accent-400">
              {isHebrew 
                ? 'רשויות פעילות בתוכנית המנהיגים הדיגיטליים'
                : 'Active in the Digital Leaders program'
              }
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white dark:bg-accent-900 rounded-2xl shadow-xl p-8 border border-accent-200 dark:border-accent-700">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            {isHebrew ? 'יתרונות עיקריים של Synqer.ai' : 'Key Benefits of Synqer.ai'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {isHebrew ? 'תואם לתכנית GovTech' : 'Aligned with GovTech Program'}
                </h4>
                <p className="text-accent-600 dark:text-accent-400">
                  {isHebrew 
                    ? 'פתרונות Synqer.ai מיושרים במלואם עם עדיפויות רשות החדשנות לאוטומציה עירונית'
                    : 'Synqer.ai solutions perfectly align with Innovation Authority priorities for municipal automation'
                  }
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {isHebrew ? 'מעבר לסטטיסטיקה' : 'Beyond Statistics'}
                </h4>
                <p className="text-accent-600 dark:text-accent-400">
                  {isHebrew 
                    ? 'השתמש בנתוני שיעור ההצלחה של 72% במצגות מכירות ובהצעות מחיר'
                    : 'Use 72% success rate statistics in sales presentations and proposals'
                  }
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {isHebrew ? 'הזדמנויות מימון' : 'Funding Opportunities'}
                </h4>
                <p className="text-accent-600 dark:text-accent-400">
                  {isHebrew 
                    ? 'בחן דרישות הגשת בקשה למימון GovTech מרשות החדשנות'
                    : 'Research application requirements for Innovation Authority GovTech funding'
                  }
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {isHebrew ? 'מנהיגים דיגיטליים' : 'Digital Leaders'}
                </h4>
                <p className="text-accent-600 dark:text-accent-400">
                  {isHebrew 
                    ? 'מקם את Synqer.ai במסגרת תוכנית המנהיגים הדיגיטליים העירוניים'
                    : 'Position Synqer.ai within the municipal Digital Leaders program'
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://calendly.com/synqer-ai/govtech-consultation"
              className="btn-primary inline-flex items-center px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <RocketLaunchIcon className="h-5 w-5 mr-2" />
              {isHebrew ? 'קבע פגישת ייעוץ GovTech' : 'Schedule GovTech Consultation'}
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {isHebrew ? 'הצטרף למהפכת הGovTech' : 'Join the GovTech Revolution'}
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              {isHebrew 
                ? 'הזדמנות מימון של 100 מיליון ₪ זמינה עכשיו. הצטרף לארגונים חדשניים שכבר מיישמים אוטומציה חכמה.'
                : 'NIS 100 million funding opportunity available now. Join innovative organizations already implementing smart automation.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:govtech@synqer.ai"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-accent-50 transition-colors"
              >
                {isHebrew ? 'צור קשר למימון' : 'Contact for Funding'}
              </a>
              <a
                href="/he/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                {isHebrew ? 'קבל הערכה חינם' : 'Get Free Assessment'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}