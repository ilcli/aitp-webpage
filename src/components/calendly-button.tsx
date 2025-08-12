"use client";

import { useEffect } from "react";
import Script from "next/script";
import { CalendarIcon } from "@heroicons/react/24/outline";

interface CalendlyButtonProps {
  url?: string;
  text: string;
  className?: string;
  prefill?: {
    name?: string;
    email?: string;
  };
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
}

export function CalendlyButton({
  url = "https://calendly.com/eli-fishbakh/30min",
  text,
  className = "btn-primary",
  prefill,
  utm,
}: CalendlyButtonProps) {
  const buildCalendlyUrl = () => {
    const urlObj = new URL(url);

    // Add UTM parameters
    if (utm?.source) urlObj.searchParams.set("utm_source", utm.source);
    if (utm?.medium) urlObj.searchParams.set("utm_medium", utm.medium);
    if (utm?.campaign) urlObj.searchParams.set("utm_campaign", utm.campaign);

    // Add prefill data
    if (prefill?.name) urlObj.searchParams.set("name", prefill.name);
    if (prefill?.email) urlObj.searchParams.set("email", prefill.email);

    return urlObj.toString();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: buildCalendlyUrl(),
      });
    }
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-2 ${className}`}
      >
        <CalendarIcon className="h-5 w-5" />
        {text}
      </button>
    </>
  );
}
