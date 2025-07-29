export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-accent-50 dark:from-accent-900 dark:via-background dark:to-accent-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <span className="text-balance">
              Turn Ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                AI Systems
              </span>{" "}
              That Work
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-accent-600 dark:text-accent-400 mb-8 max-w-3xl mx-auto text-balance">
            We co-build automation and training solutions that save time and scale impact.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="btn-primary text-lg px-8 py-4"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#services"
              className="btn-outline text-lg px-8 py-4"
            >
              Learn More
            </a>
          </div>

          {/* Optional AI Prompt Box */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/50 dark:bg-accent-800/50 backdrop-blur-sm rounded-2xl border border-accent-200 dark:border-accent-700 p-6 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm text-accent-500 dark:text-accent-400 ml-2">
                  AI System Builder
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-primary-600 font-mono text-sm">&gt;</span>
                  <div className="flex-1">
                    <p className="text-accent-700 dark:text-accent-300 text-sm font-mono">
                      &quot;Build me a system that automatically handles customer support tickets and trains my team on AI tools&quot;
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse mr-2"></div>
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
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-accent-200 dark:stroke-accent-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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