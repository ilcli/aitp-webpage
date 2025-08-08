"use client";

import { useTranslations } from 'next-intl';

export function SocialProof() {
  const t = useTranslations('socialProof');
  
  const logos = [
    { name: "TechCorp", alt: "TechCorp - Technology Solutions" },
    { name: "DataFlow", alt: "DataFlow - Data Analytics Platform" },
    { name: "InnovateAI", alt: "InnovateAI - AI Innovation Company" },
    { name: "SmartSys", alt: "SmartSys - Smart Systems Integration" },
    { name: "AutoFlow", alt: "AutoFlow - Workflow Automation" },
    { name: "ProcessPro", alt: "ProcessPro - Process Management" },
    { name: "CloudTech", alt: "CloudTech - Cloud Infrastructure" },
    { name: "MetricsCorp", alt: "MetricsCorp - Business Analytics" },
    { name: "StreamlineAI", alt: "StreamlineAI - AI-Powered Efficiency" },
    { name: "DataSync", alt: "DataSync - Data Integration Platform" },
    { name: "WorkflowPro", alt: "WorkflowPro - Professional Workflows" },
    { name: "InsightTech", alt: "InsightTech - Business Intelligence" },
  ];

  return (
    <section className="bg-accent-50/50 py-16 dark:bg-accent-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-2xl font-semibold text-accent-600 dark:text-accent-400">
            {t('title')}
          </h2>
        </div>

        {/* Simple Logo Carousel */}
        <div 
          className="relative overflow-hidden"
          role="region"
          aria-label="Client logos showcase"
        >
          <div className="logo-scroll">
            <div className="logo-track">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="logo-item"
                >
                  <div className="logo-content">
                    <span
                      className="text-xs font-semibold text-accent-700 dark:text-accent-200"
                      aria-label={logo.alt}
                      role="img"
                    >
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-dup-${index}`}
                  className="logo-item"
                >
                  <div className="logo-content">
                    <span
                      className="text-xs font-semibold text-accent-700 dark:text-accent-200"
                      aria-label={logo.alt}
                      role="img"
                    >
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-accent-500 dark:text-accent-400">
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Healthcare
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Finance
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            E-commerce
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Education
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Manufacturing
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Professional Services
          </span>
        </div>
      </div>
    </section>
  );
}
