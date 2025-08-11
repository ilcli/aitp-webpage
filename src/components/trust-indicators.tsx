"use client";

import { ShieldCheckIcon, BuildingOfficeIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export function TrustIndicators() {
  return (
    <section className="bg-white dark:bg-accent-900 py-12 border-y border-accent-200 dark:border-accent-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Points */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8">
          <div className="flex items-center space-x-3">
            <ShieldCheckIcon className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Bank-grade Security</p>
              <p className="text-sm text-accent-600 dark:text-accent-400">SOC2 compliant, encrypted data</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <BuildingOfficeIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Built for Municipalities</p>
              <p className="text-sm text-accent-600 dark:text-accent-400">Designed specifically for government workflows</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <ChartBarIcon className="h-8 w-8 text-purple-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">72% Time Reduction</p>
              <p className="text-sm text-accent-600 dark:text-accent-400">Average processing time saved</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="border-t border-accent-200 dark:border-accent-800 pt-8">
          <blockquote className="text-center">
            <p className="text-lg italic text-accent-700 dark:text-accent-300 mb-3">
              &ldquo;Synqer transformed our monthly reporting from a 3-day nightmare to a 30-minute task. 
              Our staff can finally focus on serving citizens instead of fighting with spreadsheets.&rdquo;
            </p>
            <footer className="text-sm">
              <span className="font-semibold text-foreground">Sarah Chen</span>
              <span className="text-accent-600 dark:text-accent-400"> — Operations Manager, Northern District Municipality</span>
            </footer>
          </blockquote>
        </div>

        {/* Client Indicators */}
        <div className="mt-8 text-center">
          <p className="text-sm text-accent-600 dark:text-accent-400 font-medium">
            Trusted by 15+ municipalities across Israel including Major City Councils and Regional Planning Authorities
          </p>
        </div>
      </div>
    </section>
  );
}