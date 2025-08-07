"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-background/80 sticky top-0 z-50 border-b border-accent-200 backdrop-blur-md dark:border-accent-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="Synqer.ai" 
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="ml-2 text-xl font-bold text-foreground">
                Synqer.ai
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/services"
                className={`nav-link transition-colors ${
                  isActive("/services")
                    ? "font-medium text-primary-600 dark:text-primary-400"
                    : "text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400"
                }`}
              >
                {t('services')}
              </Link>
              <Link
                href="/about"
                className={`nav-link transition-colors ${
                  isActive("/about")
                    ? "font-medium text-primary-600 dark:text-primary-400"
                    : "text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400"
                }`}
              >
                {t('about')}
              </Link>
              <Link
                href="/contact"
                className={`nav-link transition-colors ${
                  isActive("/contact")
                    ? "font-medium text-primary-600 dark:text-primary-400"
                    : "text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400"
                }`}
              >
                {t('contact')}
              </Link>
            </div>
          </div>

          {/* Right side - Language Toggle, Theme Toggle, and CTA */}
          <div className="hidden items-center space-x-4 md:flex">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="https://calendly.com/synqer-ai/consultation"
              className="btn-primary"
            >
              {t('cta')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-accent-700 hover:bg-accent-100 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:text-accent-300 dark:hover:bg-accent-800 dark:hover:text-primary-400"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-b border-accent-200 bg-background px-2 pb-3 pt-2 dark:border-accent-800 sm:px-3">
            <Link
              href="/services"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive("/services")
                  ? "font-semibold text-primary-600 dark:text-primary-400"
                  : "text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('services')}
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive("/about")
                  ? "font-semibold text-primary-600 dark:text-primary-400"
                  : "text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive("/contact")
                  ? "font-semibold text-primary-600 dark:text-primary-400"
                  : "text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            <div className="pt-2">
              <a
                href="https://calendly.com/synqer-ai/consultation"
                className="btn-primary w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('cta')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
