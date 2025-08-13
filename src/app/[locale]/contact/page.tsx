"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { CalendlyWidget } from "@/components/calendly-widget";
import { useTranslations } from "next-intl";
import { EXTERNAL_LINKS } from "@/config/links";

export default function Contact() {
  const t = useTranslations("contact");

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

      {/* Two Column Layout: Calendly and Contact Form */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Calendly Widget */}
            <div>
              <div className="mb-6">
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  {t("scheduleSection.title")}
                </h2>
                <p className="text-accent-600 dark:text-accent-400">
                  {t("scheduleSection.subtitle")}
                </p>
              </div>
              <div className="rounded-lg border border-accent-200 bg-white p-4 shadow-lg dark:border-accent-700 dark:bg-accent-900">
                <CalendlyWidget height="600px" primaryColor="#3B82F6" />
              </div>
            </div>

            {/* Contact Form and Info */}
            <div>
              <div className="mb-8">
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  {t("sendMessage")}
                </h2>
                <p className="text-accent-600 dark:text-accent-400">
                  {t("scheduleSection.preferEmail")}
                </p>
              </div>
              <ContactForm />

              {/* Quick Contact Info */}
              <div className="mt-8 rounded-lg bg-accent-50 p-6 dark:bg-accent-900">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {t("quickContact.title")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-accent-600 dark:text-accent-400">
                    <svg
                      className="mr-3 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href={`mailto:${EXTERNAL_LINKS.contact.email}`}
                      className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {EXTERNAL_LINKS.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-accent-50 py-16 dark:bg-accent-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            {t("whatToExpect")}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                1
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {t("processSteps.quickResponse")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("processSteps.quickResponseDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                2
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {t("processSteps.discoveryCall")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("processSteps.discoveryCallDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                3
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {t("processSteps.customProposal")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("processSteps.customProposalDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                4
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {t("processSteps.noPressure")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("processSteps.noPressureDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            {t("commonQuestions")}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {t("faq.projectTime.question")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("faq.projectTime.answer")}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {t("faq.smallTeams.question")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("faq.smallTeams.answer")}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {t("faq.ongoingSupport.question")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("faq.ongoingSupport.answer")}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {t("faq.existingTools.question")}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                {t("faq.existingTools.answer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
