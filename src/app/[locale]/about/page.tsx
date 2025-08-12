"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useTranslations, useLocale } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-background to-accent-50 py-20 dark:from-accent-900 dark:via-background dark:to-accent-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-accent-600 dark:text-accent-400">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                {t("mission.title")}
              </h2>
              <p className="mb-4 text-accent-700 dark:text-accent-300">
                {t("mission.description1")}
              </p>
              <p className="text-accent-700 dark:text-accent-300">
                {t("mission.description2")}
              </p>
            </div>
            <div className="rounded-lg bg-accent-50 p-8 dark:bg-accent-900">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                {t("difference.title")}
              </h3>
              <ul className="space-y-3 text-accent-700 dark:text-accent-300">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  {t("difference.points.1")}
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  {t("difference.points.2")}
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  {t("difference.points.3")}
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  {t("difference.points.4")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-accent-50 py-16 dark:bg-accent-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            {t("howWeWork.title")}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {t("howWeWork.steps.understand.title")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("howWeWork.steps.understand.description")}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {t("howWeWork.steps.design.title")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("howWeWork.steps.design.description")}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {t("howWeWork.steps.implement.title")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("howWeWork.steps.implement.description")}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {t("howWeWork.steps.support.title")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("howWeWork.steps.support.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            {t("expertise.title")}
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-lg border border-accent-200 bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md dark:border-accent-700 dark:bg-accent-900">
              <div className="mb-2 text-2xl">🔗</div>
              <p className="text-sm font-medium text-foreground">
                {t("expertise.areas.dataIntegration")}
              </p>
            </div>
            <div className="rounded-lg border border-accent-200 bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md dark:border-accent-700 dark:bg-accent-900">
              <div className="mb-2 text-2xl">⚙️</div>
              <p className="text-sm font-medium text-foreground">
                {t("expertise.areas.processAutomation")}
              </p>
            </div>
            <div className="rounded-lg border border-accent-200 bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md dark:border-accent-700 dark:bg-accent-900">
              <div className="mb-2 text-2xl">👥</div>
              <p className="text-sm font-medium text-foreground">
                {t("expertise.areas.citizenEngagement")}
              </p>
            </div>
            <div className="rounded-lg border border-accent-200 bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md dark:border-accent-700 dark:bg-accent-900">
              <div className="mb-2 text-2xl">📊</div>
              <p className="text-sm font-medium text-foreground">
                {t("expertise.areas.complianceReporting")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-50 via-background to-accent-50 py-16 dark:from-accent-900 dark:via-background dark:to-accent-800">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            {t("cta.title")}
          </h2>
          <p className="mb-8 text-lg text-accent-600 dark:text-accent-400">
            {t("cta.description")}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="btn-primary inline-block"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
