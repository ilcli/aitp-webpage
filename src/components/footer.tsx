"use client";

import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer id="contact" className="bg-accent-50 dark:bg-accent-900 border-t border-accent-200 dark:border-accent-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="ml-2 text-xl font-bold text-foreground">AITP</span>
            </div>
            <p className="text-accent-600 dark:text-accent-400 mb-6 max-w-md">
              We co-build automation and training solutions that save time and scale impact. 
              Turn your ideas into AI systems that actually work.
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
            <h3 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@aitp.agency"
                className="flex items-center text-accent-600 dark:text-accent-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@aitp.agency
              </a>
              <a
                href="https://t.me/aitpagency"
                className="flex items-center text-accent-600 dark:text-accent-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.578-.886 1.863-1.461 1.863-.678 0-.97-.447-1.687-1.085-.509-.453-2.267-1.613-2.267-1.613s-.38-.283-.38-.896c0-.612.38-.896.653-1.169.274-.274 4.503-4.503 4.503-4.503s.274-.274.274-.612c0-.339-.274-.613-.548-.613-.273 0-.547.274-4.503 4.503-.339.339-.678.339-1.017.339s-.678 0-1.017-.339c0 0-2.267-1.613-2.267-1.613-.717-.638-1.009-1.085-1.687-1.085-.575 0-1.159.285-1.461 1.863 0 0-.727 4.87-.896 6.728C5.168 15.238 5.168 16 6.5 16s2.832-1.762 2.832-1.762c.612-.453 1.491-1.085 2.668-1.935 1.177.85 2.056 1.482 2.668 1.935 0 0 1.5 1.762 2.832 1.762s1.332-.762 0-2.84z"/>
                </svg>
                Telegram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a
                href="#services"
                className="block text-accent-600 dark:text-accent-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-accent-600 dark:text-accent-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-accent-600 dark:text-accent-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent-200 dark:border-accent-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-accent-500 dark:text-accent-400 text-sm">
            © 2025 AITP – Built for clarity & action
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a
              href="/privacy"
              className="text-accent-500 dark:text-accent-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-accent-500 dark:text-accent-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}