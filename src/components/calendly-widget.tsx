"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useLocale } from "next-intl";

interface CalendlyWidgetProps {
  url?: string;
  height?: string;
  hideEventTypeDetails?: boolean;
  hideGdprBanner?: boolean;
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
}

export function CalendlyWidget({
  url,
  height = "700px",
  hideEventTypeDetails = true,
  hideGdprBanner = true,
  backgroundColor,
  textColor,
  primaryColor,
  prefill,
}: CalendlyWidgetProps) {
  const locale = useLocale();

  // Use the provided URL or construct from config
  const calendlyUrl = url || "https://calendly.com/synqer-ai";

  // Build URL with parameters
  const buildCalendlyUrl = () => {
    const urlObj = new URL(calendlyUrl);

    // Add hide parameters
    if (hideEventTypeDetails) {
      urlObj.searchParams.set("hide_event_type_details", "1");
    }
    if (hideGdprBanner) {
      urlObj.searchParams.set("hide_gdpr_banner", "1");
    }

    // Add color customization
    if (backgroundColor) {
      urlObj.searchParams.set(
        "background_color",
        backgroundColor.replace("#", "")
      );
    }
    if (textColor) {
      urlObj.searchParams.set("text_color", textColor.replace("#", ""));
    }
    if (primaryColor) {
      urlObj.searchParams.set("primary_color", primaryColor.replace("#", ""));
    }

    // Add prefill data
    if (prefill?.name) {
      urlObj.searchParams.set("name", prefill.name);
    }
    if (prefill?.email) {
      urlObj.searchParams.set("email", prefill.email);
    }
    if (prefill?.customAnswers) {
      Object.entries(prefill.customAnswers).forEach(([key, value]) => {
        urlObj.searchParams.set(`a${key}`, value);
      });
    }

    return urlObj.toString();
  };

  useEffect(() => {
    // Initialize Calendly widget when component mounts
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: buildCalendlyUrl(),
        parentElement: document.querySelector(".calendly-inline-widget"),
      });
    }
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Initialize widget after script loads
          if (typeof window !== "undefined" && window.Calendly) {
            window.Calendly.initInlineWidget({
              url: buildCalendlyUrl(),
              parentElement: document.querySelector(".calendly-inline-widget"),
            });
          }
        }}
      />
      <div
        className="calendly-inline-widget"
        data-url={buildCalendlyUrl()}
        style={{
          minWidth: "320px",
          height,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      />
    </>
  );
}

// Type declaration for Calendly global
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding?: boolean;
      }) => void;
    };
  }
}
