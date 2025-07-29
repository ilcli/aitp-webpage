export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-accent-50 dark:from-accent-900 dark:via-background dark:to-accent-800">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-balance">
              Turn Ideas into{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                AI Systems
              </span>{" "}
              That Work
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-8 max-w-3xl text-balance text-xl text-accent-600 dark:text-accent-400 sm:text-2xl">
            We co-build automation and training solutions that save time and
            scale impact.
          </p>

          {/* CTA Button */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://calendly.com/elifishbakh/30min"
              className="btn-primary transform px-10 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:px-12 sm:py-5"
            >
              🚀 Book a Free Strategy Call
            </a>
            <a
              href="#services"
              className="btn-outline px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg sm:px-10 sm:py-4"
            >
              Learn More
            </a>
          </div>

          {/* Optional AI Prompt Box */}
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-accent-200 bg-white/50 p-6 shadow-soft backdrop-blur-sm dark:border-accent-700 dark:bg-accent-800/50">
              <div className="mb-4 flex items-center">
                <div className="mr-2 h-3 w-3 rounded-full bg-red-400"></div>
                <div className="mr-2 h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="mr-2 h-3 w-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-sm text-accent-500 dark:text-accent-400">
                  AI System Builder
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-start space-x-3">
                  <span className="font-mono text-sm text-primary-600">
                    &gt;
                  </span>
                  <div className="flex-1">
                    <p className="font-mono text-sm text-accent-700 dark:text-accent-300">
                      &quot;Build me a system that automatically handles
                      customer support tickets and trains my team on AI
                      tools&quot;
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary-600"></div>
                      <span className="text-xs text-accent-500 dark:text-accent-400">
                        Processing your requirements...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-accent-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-accent-800"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
    </section>
  );
}
