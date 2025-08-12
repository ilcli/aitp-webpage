"use client";
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { CheckCircleIcon, TrophyIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { createScheduleUrl } from '@/config/site';

export function GovTechSection() {
  const locale = useLocale();

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-background to-accent-50 dark:from-accent-900 dark:via-background dark:to-accent-800 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <RocketLaunchIcon className="h-8 w-8 text-primary-600 mr-2" />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Israeli GovTech Program
            </h2>
          </div>
          <p className="mx-auto max-w-3xl text-lg text-accent-600 dark:text-accent-400">
            Get your municipality&apos;s automation funded through GovTech grants — we&apos;ll show you how
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Success Rate Card */}
          <div className="bg-white dark:bg-accent-900 rounded-xl shadow-lg p-6 border border-accent-200 dark:border-accent-700">
            <div className="flex items-center mb-4">
              <TrophyIcon className="h-8 w-8 text-primary-600 mr-3" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Success Rate
                </h3>
                <p className="text-3xl font-bold text-primary-600">High</p>
              </div>
            </div>
            <p className="text-accent-600 dark:text-accent-400">
              GovTech initiatives show strong performance nationwide
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
                  Total Investment
                </h3>
                <p className="text-3xl font-bold text-green-600">Significant</p>
              </div>
            </div>
            <p className="text-accent-600 dark:text-accent-400">
              Innovation Authority supports municipal tech solutions
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
                  Municipalities
                </h3>
                <p className="text-3xl font-bold text-blue-600">Many</p>
              </div>
            </div>
            <p className="text-accent-600 dark:text-accent-400">
              Active in the Digital Leaders program
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white dark:bg-accent-900 rounded-2xl shadow-xl p-8 border border-accent-200 dark:border-accent-700">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Key Benefits of Synqer.ai
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Pre-Approved for Funding
                </h4>
                <p className="text-accent-600 dark:text-accent-400">
                  Our solutions qualify for Innovation Authority grants. We help you apply and get approved.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Proven Results
                </h4>
                <p className="text-accent-600 dark:text-accent-400">
                  Smart automation solutions significantly reducing manual workload
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Grant Application Support
                </h4>
                <p className="text-accent-600 dark:text-accent-400">
                  We write the technical specs, handle the paperwork, and guide you through approval
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Digital Leadership
                </h4>
                <p className="text-accent-600 dark:text-accent-400">
                  Integration with municipal Digital Leaders program for public innovation
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={createScheduleUrl('website', 'section', 'govtech')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <RocketLaunchIcon className="h-5 w-5 mr-2" />
              Schedule GovTech Consultation
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join the GovTech Revolution
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let&apos;s transform the future of public services together
            </p>
            <Link 
              href={`/${locale}/contact/`}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Get Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}