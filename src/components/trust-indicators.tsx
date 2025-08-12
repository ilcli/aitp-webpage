"use client";

import { ShieldCheckIcon, BuildingOfficeIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export function TrustIndicators() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-surface-secondary dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Points */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-12">
          <div className="group bg-surface dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShieldCheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-text-primary group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Bank-grade Security</p>
                <p className="text-sm text-text-secondary">SOC2 compliant, encrypted data</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 rounded-xl transition-all duration-300 pointer-events-none" />
          </div>
          
          <div className="group bg-surface dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BuildingOfficeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Built for Organizations</p>
                <p className="text-sm text-text-secondary">Designed for complex workflows</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 rounded-xl transition-all duration-300 pointer-events-none" />
          </div>
          
          <div className="group bg-surface dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ChartBarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-semibold text-text-primary group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Significant Time Savings</p>
                <p className="text-sm text-text-secondary">Streamlined processing workflows</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 rounded-xl transition-all duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-surface dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-border dark:border-gray-700">
          <blockquote className="text-center">
            <p className="text-lg italic text-text-secondary mb-4">
              &ldquo;Synqer transformed our monthly reporting from a 3-day nightmare to a 30-minute task. 
              Our staff can finally focus on serving citizens instead of fighting with spreadsheets.&rdquo;
            </p>
            <footer className="text-sm">
              <span className="font-semibold text-text-primary">Sarah Chen</span>
              <span className="text-text-secondary"> — Operations Manager, Northern District</span>
            </footer>
          </blockquote>
        </div>

        {/* Client Indicators */}
        <div className="mt-8 text-center">
          <p className="text-sm text-text-secondary font-medium">
            Building solutions for organizations across Israel including Major Institutions and Regional Authorities
          </p>
        </div>
      </div>
    </section>
  );
}