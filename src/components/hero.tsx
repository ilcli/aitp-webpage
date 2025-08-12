"use client";

import { useTranslations } from "next-intl";
import { DashboardMockup } from "./dashboard-mockup";
import { createScheduleUrl } from "@/config/site";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Typewriter from "typewriter-effect";

export function Hero() {
  const t = useTranslations("hero");

  const typewriterPhrases = [
    t("typewriterPhrases.0"),
    t("typewriterPhrases.1"),
    t("typewriterPhrases.2"),
    t("typewriterPhrases.3"),
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-accent-50 dark:from-accent-900 dark:via-background dark:to-accent-800">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="text-center">
          {/* Main Headline - Clear Value Prop */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t("headline")}{" "}
            <span className="text-primary-600 dark:text-primary-400">
              <Typewriter
                options={{
                  strings: typewriterPhrases,
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
            <span className="mt-2 block text-primary-600 dark:text-primary-400">
              {t("subheadline")}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mx-auto mb-8 mt-6 max-w-3xl text-balance text-xl text-accent-600 dark:text-accent-400 sm:text-2xl">
            {t("subheading")}
          </p>

          {/* Benefit Bullets */}
          <div className="mx-auto mb-10 max-w-3xl">
            <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-500" />
                <span className="text-base text-accent-700 dark:text-accent-300">
                  {t("benefits.1")}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-500" />
                <span className="text-base text-accent-700 dark:text-accent-300">
                  {t("benefits.2")}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-500" />
                <span className="text-base text-accent-700 dark:text-accent-300">
                  {t("benefits.3")}
                </span>
              </div>
            </div>
          </div>

          {/* Single Power CTA with Expectation Text */}
          <div className="mb-12">
            <a
              href={createScheduleUrl("website", "hero", "main")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block transform px-12 py-5 text-xl font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {t("cta.primary")}
            </a>

            {/* What Happens Next? */}
            <p className="mt-4 text-sm italic text-accent-600 dark:text-accent-400">
              {t("cta.expectation")}
            </p>
          </div>

          {/* Municipal Dashboard Mockup */}
          <DashboardMockup />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-accent-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-accent-800"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
    </section>
  );
}
