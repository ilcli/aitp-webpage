"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-white px-4 dark:bg-gray-900">
        <div className="max-w-md text-center">
          <div className="mb-6 text-8xl text-red-500">💥</div>

          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Something went wrong!
          </h1>

          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            We&apos;re sorry, but a critical error occurred. Please try
            refreshing the page.
          </p>

          <div className="space-y-4">
            <button
              onClick={reset}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Try Again
            </button>

            <div>
              <Link
                href="/"
                className="text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Go to homepage
              </Link>
            </div>
          </div>

          {process.env.NODE_ENV === "development" && (
            <details className="mt-8 text-left">
              <summary className="mb-2 cursor-pointer text-sm text-gray-500 dark:text-gray-400">
                Error Details (Development Only)
              </summary>
              <div className="overflow-auto rounded bg-gray-100 p-4 text-left text-xs dark:bg-gray-800">
                <p className="mb-2 font-semibold">Error Message:</p>
                <p className="mb-4 text-red-600 dark:text-red-400">
                  {error.message}
                </p>

                {error.digest && (
                  <>
                    <p className="mb-2 font-semibold">Error Digest:</p>
                    <p className="mb-4 font-mono">{error.digest}</p>
                  </>
                )}

                <p className="mb-2 font-semibold">Stack Trace:</p>
                <pre className="whitespace-pre-wrap text-xs">{error.stack}</pre>
              </div>
            </details>
          )}
        </div>
      </body>
    </html>
  );
}
