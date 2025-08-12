"use client";
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { CheckCircleIcon, TrophyIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { createScheduleUrl } from '@/config/site';

export function GovTechSection() {
  const locale = useLocale();

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center">
              <RocketLaunchIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get Your Innovation Funded
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We help organizations access grants and funding programs to implement automation solutions — we&apos;ll handle the application process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Success Rate Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrophyIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  High Success Rate
                </h3>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">90%+</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Organizations we help consistently receive funding approval for digital transformation initiatives
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 rounded-2xl transition-all duration-300 pointer-events-none" />
          </div>

          {/* Funding Available Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💰</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Funding Available
                </h3>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">Up to 85%</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Innovation Authority and other programs can cover most of your implementation costs
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300 pointer-events-none" />
          </div>

          {/* Organizations Helped Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏢</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Organizations Helped
                </h3>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">25+</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Successfully funded automation projects across various sectors and organization types
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700 mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            How We Help You Get Funded
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Pre-Qualified Solutions
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Our automation solutions meet all technical requirements for Innovation Authority and similar grants
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Complete Application Support
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We handle the technical documentation, ROI calculations, and compliance requirements
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Proven Track Record
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Track record of successful implementations with measurable efficiency improvements
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  End-to-End Partnership
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  From initial assessment through funding application to full implementation and support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Fund Your Digital Transformation?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss your funding options and see how we can help you access available grants
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={createScheduleUrl('funding-consultation')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
              >
                <RocketLaunchIcon className="h-5 w-5 mr-2" />
                Schedule Funding Consultation
              </a>
              <Link 
                href={`/${locale}/contact/`}
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More About Grants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}