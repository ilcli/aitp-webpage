"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  CheckCircleIcon,
  TrophyIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { createScheduleUrl } from "@/config/site";

export function GovTechSection() {
  const locale = useLocale();
  const t = useTranslations("govtech");

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 dark:from-gray-900 dark:to-gray-800 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
              <RocketLaunchIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            {t("subtitle")}
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Success Rate Card */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-blue-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-700">
            <div className="mb-6 flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900">
                <TrophyIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("successRate.title")}
                </h3>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {t("successRate.value")}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t("successRate.description")}
            </p>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 to-green-500/0 transition-all duration-300 group-hover:from-green-500/5 group-hover:to-green-500/10" />
          </div>

          {/* Funding Available Card */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-purple-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-700">
            <div className="mb-6 flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 transition-transform duration-300 group-hover:scale-110 dark:bg-purple-900">
                <span className="text-3xl">💰</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("funding.title")}
                </h3>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {t("funding.value")}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t("funding.description")}
            </p>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-purple-500/0 transition-all duration-300 group-hover:from-purple-500/5 group-hover:to-purple-500/10" />
          </div>

          {/* Organizations Helped Card */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-blue-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-700">
            <div className="mb-6 flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900">
                <span className="text-3xl">🏢</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("clientBase.title")}
                </h3>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {t("clientBase.value")}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t("clientBase.description")}
            </p>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 transition-all duration-300 group-hover:from-blue-500/5 group-hover:to-blue-500/10" />
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800 lg:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
            {t("howWeHelp.title")}
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="mb-2 font-bold text-gray-900 dark:text-white">
                  {t("howWeHelp.preQualified.title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("howWeHelp.preQualified.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="mb-2 font-bold text-gray-900 dark:text-white">
                  {t("howWeHelp.applicationSupport.title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("howWeHelp.applicationSupport.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="mb-2 font-bold text-gray-900 dark:text-white">
                  {t("howWeHelp.provenTrack.title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("howWeHelp.provenTrack.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="mb-2 font-bold text-gray-900 dark:text-white">
                  {t("howWeHelp.endToEnd.title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("howWeHelp.endToEnd.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 p-8 text-white shadow-2xl lg:p-12">
            <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
              {t("cta.title")}
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={createScheduleUrl("funding-consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transform items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg transition-colors transition-transform duration-200 hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
              >
                <RocketLaunchIcon className="mr-2 h-5 w-5" />
                {t("cta.primaryButton")}
              </a>
              <Link
                href={`/${locale}/contact/`}
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-blue-600"
              >
                {t("cta.secondaryButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
