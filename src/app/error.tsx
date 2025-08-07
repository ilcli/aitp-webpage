"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Error({
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
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="max-w-md text-center">
          <div className="mb-6 text-8xl text-red-500">💥</div>

          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Oops! Something went wrong
          </h1>

          <p className="mb-8 text-lg text-accent-600 dark:text-accent-400">
            We&apos;re sorry, but something unexpected happened. Our team has
            been notified and is working on a fix.
          </p>

          <div className="space-y-4">
            <button onClick={reset} className="btn-primary w-full sm:w-auto">
              Try Again
            </button>

            <div className="text-center">
              <Link
                href="/"
                className="text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Go back to homepage
              </Link>
            </div>
          </div>

          {process.env.NODE_ENV === "development" && (
            <details className="mt-8 text-left">
              <summary className="mb-2 cursor-pointer text-sm text-accent-500 dark:text-accent-400">
                Error Details (Development Only)
              </summary>
              <div className="overflow-auto rounded bg-accent-100 p-4 text-left text-xs dark:bg-accent-800">
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
      </div>

      <Footer />
    </main>
  );
}
