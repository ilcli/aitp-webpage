"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { useTranslations } from "next-intl";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

// Functional component to use translations
function ErrorFallback({
  error,
  resetError,
}: {
  error?: Error;
  resetError: () => void;
}) {
  const t = useTranslations("errorBoundary");

  return (
    <div className="flex min-h-[400px] items-center justify-center p-8">
      <div className="max-w-md text-center">
        <div className="mb-4 text-6xl text-red-500">⚠️</div>
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          {t("title")}
        </h2>
        <p className="mb-6 text-accent-600 dark:text-accent-400">
          {t("description")}
        </p>
        <button onClick={resetError} className="btn-primary">
          {t("tryAgain")}
        </button>
        {process.env.NODE_ENV === "development" && error && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-accent-500 dark:text-accent-400">
              {t("errorDetails")}
            </summary>
            <pre className="mt-2 overflow-auto rounded bg-accent-100 p-4 text-xs dark:bg-accent-800">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);

    // In production, you would send this to your error tracking service
    // e.g., Sentry, LogRocket, etc.
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorFallback
          error={this.state.error}
          resetError={() =>
            this.setState({ hasError: false, error: undefined })
          }
        />
      );
    }

    return this.props.children;
  }
}
