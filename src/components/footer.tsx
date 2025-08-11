"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('footer');
  const isActive = (path: string) => pathname === path;

  return (
    <footer
      id="contact"
      className="border-t border-accent-200 bg-accent-50 dark:border-accent-800 dark:bg-accent-900"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center">
              <img 
                src="/favicon.svg" 
                alt="Synqer.ai - Smart Municipal Solutions" 
                className="h-10 w-auto"
              />
            </div>
            <p className="mb-6 max-w-md text-accent-600 dark:text-accent-400">
              {t('tagline')}
            </p>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <span className="text-sm text-accent-500 dark:text-accent-400">
                Toggle theme
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              {t('contact.title')}
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@synqer.ai"
                className="flex items-center text-accent-600 transition-colors hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
              >
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
                hello@synqer.ai
              </a>
              <a
                href="https://t.me/synqerai"
                className="flex items-center text-accent-600 transition-colors hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="mr-3 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.578-.886 1.863-1.461 1.863-.678 0-.97-.447-1.687-1.085-.509-.453-2.267-1.613-2.267-1.613s-.38-.283-.38-.896c0-.612.38-.896.653-1.169.274-.274 4.503-4.503 4.503-4.503s.274-.274.274-.612c0-.339-.274-.613-.548-.613-.273 0-.547.274-4.503 4.503-.339.339-.678.339-1.017.339s-.678 0-1.017-.339c0 0-2.267-1.613-2.267-1.613-.717-.638-1.009-1.085-1.687-1.085-.575 0-1.159.285-1.461 1.863 0 0-.727 4.87-.896 6.728C5.168 15.238 5.168 16 6.5 16s2.832-1.762 2.832-1.762c.612-.453 1.491-1.085 2.668-1.935 1.177.85 2.056 1.482 2.668 1.935 0 0 1.5 1.762 2.832 1.762s1.332-.762 0-2.84z" />
                </svg>
                Telegram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link
                href={`/${locale}/services`}
                className={`block transition-colors ${
                  isActive(`/${locale}/services`)
                    ? "font-medium text-primary-600 dark:text-primary-400"
                    : "text-accent-600 hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
                }`}
              >
                Services
              </Link>
              <Link
                href={`/${locale}/about`}
                className={`block transition-colors ${
                  isActive(`/${locale}/about`)
                    ? "font-medium text-primary-600 dark:text-primary-400"
                    : "text-accent-600 hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
                }`}
              >
                About
              </Link>
              <Link
                href={`/${locale}/contact`}
                className={`block transition-colors ${
                  isActive(`/${locale}/contact`)
                    ? "font-medium text-primary-600 dark:text-primary-400"
                    : "text-accent-600 hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 border-t border-accent-200 pt-8 dark:border-accent-800">
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/synqerai"
              className="transform text-accent-500 transition-colors duration-200 hover:scale-110 hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/synqer-ai"
              className="transform text-accent-500 transition-colors duration-200 hover:scale-110 hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/synqer-ai"
              className="transform text-accent-500 transition-colors duration-200 hover:scale-110 hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://t.me/synqerai"
              className="transform text-accent-500 transition-colors duration-200 hover:scale-110 hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.578-.886 1.863-1.461 1.863-.678 0-.97-.447-1.687-1.085-.509-.453-2.267-1.613-2.267-1.613s-.38-.283-.38-.896c0-.612.38-.896.653-1.169.274-.274 4.503-4.503 4.503-4.503s.274-.274.274-.612c0-.339-.274-.613-.548-.613-.273 0-.547.274-4.503 4.503-.339.339-.678.339-1.017.339s-.678 0-1.017-.339c0 0-2.267-1.613-2.267-1.613-.717-.638-1.009-1.085-1.687-1.085-.575 0-1.159.285-1.461 1.863 0 0-.727 4.87-.896 6.728C5.168 15.238 5.168 16 6.5 16s2.832-1.762 2.832-1.762c.612-.453 1.491-1.085 2.668-1.935 1.177.85 2.056 1.482 2.668 1.935 0 0 1.5 1.762 2.832 1.762s1.332-.762 0-2.84z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-accent-200 pt-8 dark:border-accent-800 sm:flex-row">
          <p className="text-sm text-accent-500 dark:text-accent-400">
            {t('copyright')}
          </p>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0">
            <Link
              href={`/${locale}/privacy`}
              className="text-sm text-accent-500 transition-colors hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
            >
              {t('links.privacy')}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-sm text-accent-500 transition-colors hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
            >
              {t('links.terms')}
            </Link>
            <Link
              href={`/${locale}/cookies`}
              className="text-sm text-accent-500 transition-colors hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
            >
              Cookie Policy
            </Link>
            <Link
              href={`/${locale}/accessibility`}
              className="text-sm text-accent-500 transition-colors hover:text-primary-600 dark:text-accent-400 dark:hover:text-primary-400"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
