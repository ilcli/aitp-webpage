"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useTranslations, useLocale } from "next-intl";

export default function Services() {
  const t = useTranslations("servicesPage");
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* AI Automation */}
            <div className="rounded-lg border border-accent-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm dark:border-accent-800 dark:bg-accent-900/80">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-xl text-white">⚙️</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                {t("aiAutomation.title")}
              </h3>
              <p className="mb-6 text-accent-600 dark:text-accent-400">
                {t("aiAutomation.description")}
              </p>
              <ul className="mb-6 space-y-3 text-accent-700 dark:text-accent-300">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">
                      ✓
                    </span>
                    {t(`aiAutomation.features.${num}`)}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className="btn-primary block w-full text-center"
              >
                {t("learnMore")}
              </Link>
            </div>

            {/* Training & Change */}
            <div className="rounded-lg border border-accent-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm dark:border-accent-800 dark:bg-accent-900/80">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-xl text-white">🎯</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                {t("training.title")}
              </h3>
              <p className="mb-6 text-accent-600 dark:text-accent-400">
                {t("training.description")}
              </p>
              <ul className="mb-6 space-y-3 text-accent-700 dark:text-accent-300">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">
                      ✓
                    </span>
                    {t(`training.features.${num}`)}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className="btn-primary block w-full text-center"
              >
                {t("learnMore")}
              </Link>
            </div>

            {/* No-Code Systems */}
            <div className="rounded-lg border border-accent-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm dark:border-accent-800 dark:bg-accent-900/80">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-xl text-white">🔧</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                {t("noCode.title")}
              </h3>
              <p className="mb-6 text-accent-600 dark:text-accent-400">
                {t("noCode.description")}
              </p>
              <ul className="mb-6 space-y-3 text-accent-700 dark:text-accent-300">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">
                      ✓
                    </span>
                    {t(`noCode.features.${num}`)}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className="btn-primary block w-full text-center"
              >
                {t("learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-accent-50 py-16 dark:bg-accent-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            {t("process.title")}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {["discover", "design", "deploy", "deliver"].map((step, index) => (
              <div key={step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                  <span className="font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {t(`process.${step}.title`)}
                </h3>
                <p className="text-sm text-accent-600 dark:text-accent-400">
                  {t(`process.${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
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
