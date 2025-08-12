"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "he" : "en";

    // Get the current path without the locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");

    startTransition(() => {
      // Navigate to the same page with the new locale
      router.push(`/${newLocale}${pathWithoutLocale}`);

      // Store the preference in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("preferredLocale", newLocale);
      }
    });
  };

  return (
    <button
      onClick={handleLanguageChange}
      disabled={isPending}
      className="relative inline-flex h-9 w-16 items-center justify-center rounded-full bg-accent-200 px-1 transition-colors hover:bg-accent-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-accent-700 dark:hover:bg-accent-600 dark:focus:ring-offset-accent-900"
      aria-label={`Switch to ${locale === "en" ? "Hebrew" : "English"}`}
    >
      <span
        className={`absolute left-1 inline-block h-7 w-7 transform rounded-full bg-white shadow-md transition-transform dark:bg-accent-100 ${
          locale === "he" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        <span className="flex h-full w-full items-center justify-center text-xs font-bold text-accent-900">
          {locale === "en" ? "EN" : "עב"}
        </span>
      </span>
      <span className="sr-only">
        {locale === "en" ? "Switch to Hebrew" : "החלף לאנגלית"}
      </span>
    </button>
  );
}
