"use client";

import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent-200 dark:border-accent-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="ml-2 text-xl font-bold text-foreground">AITP</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#services"
                className="text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right side - CTA and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn-primary"
            >
              Let&rsquo;s Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-accent-700 hover:text-primary-600 hover:bg-accent-100 dark:text-accent-300 dark:hover:text-primary-400 dark:hover:bg-accent-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-accent-200 dark:border-accent-800">
            <a
              href="#services"
              className="text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-accent-700 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                className="btn-primary w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Let&rsquo;s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}