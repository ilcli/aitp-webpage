"use client";

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export function DashboardMockup() {
  const t = useTranslations('hero.dashboard');
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade-in animation on mount
    if (dashboardRef.current) {
      dashboardRef.current.style.opacity = '0';
      dashboardRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        if (dashboardRef.current) {
          dashboardRef.current.style.transition = 'all 0.8s ease-out';
          dashboardRef.current.style.opacity = '1';
          dashboardRef.current.style.transform = 'translateY(0)';
        }
      }, 300);
    }
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <div 
        ref={dashboardRef}
        className="rounded-2xl border border-accent-200 bg-white/50 p-6 shadow-soft backdrop-blur-sm dark:border-accent-700 dark:bg-accent-800/50"
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-red-400"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-green-400"></div>
            <span className="ml-3 text-sm font-medium text-accent-600 dark:text-accent-400">
              {t('title')}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
            <span className="text-xs text-accent-500 dark:text-accent-400">
              {t('status')}
            </span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Metric 1 */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg p-4 border border-primary-200 dark:border-primary-700">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-primary-600 rounded-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {t('metric1Value')}
              </span>
            </div>
            <p className="text-sm font-medium text-accent-700 dark:text-accent-300">
              {t('metric1')}
            </p>
          </div>

          {/* Metric 2 */}
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30 rounded-lg p-4 border border-accent-200 dark:border-accent-700">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-accent-500 rounded-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                {t('metric2Value')}
              </span>
            </div>
            <p className="text-sm font-medium text-accent-700 dark:text-accent-300">
              {t('metric2')}
            </p>
          </div>

          {/* Metric 3 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg p-4 border border-green-200 dark:border-green-700">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-green-600 rounded-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                {t('metric3Value')}
              </span>
            </div>
            <p className="text-sm font-medium text-accent-700 dark:text-accent-300">
              {t('metric3')}
            </p>
          </div>
        </div>

        {/* Mini Chart */}
        <div className="mt-6 p-4 bg-accent-50 dark:bg-accent-800/50 rounded-lg border border-accent-200 dark:border-accent-700">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-accent-700 dark:text-accent-300">Processing Volume</h4>
            <span className="text-xs text-accent-500">Last 30 days</span>
          </div>
          <div className="flex items-end space-x-1 h-16">
            {[40, 65, 45, 80, 55, 90, 75, 85, 70, 95, 85, 100].map((height, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-primary-600 to-primary-400 rounded-sm flex-1 transition-all duration-1000 ease-out"
                style={{ 
                  height: `${height}%`,
                  animationDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}