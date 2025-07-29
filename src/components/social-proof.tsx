export function SocialProof() {
  const logos = [
    { name: "TechCorp", width: 120 },
    { name: "DataFlow", width: 100 },
    { name: "InnovateAI", width: 140 },
    { name: "SmartSys", width: 110 },
    { name: "AutoFlow", width: 130 },
    { name: "ProcessPro", width: 115 },
  ];

  return (
    <section className="py-16 bg-accent-50/50 dark:bg-accent-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-accent-600 dark:text-accent-400 mb-8">
            Trusted by teams working in...
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity duration-300">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300"
              style={{ width: logo.width }}
            >
              {/* Placeholder logo - you can replace with actual SVGs or images */}
              <div className="w-full h-8 bg-gradient-to-r from-accent-300 to-accent-400 dark:from-accent-600 dark:to-accent-500 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-accent-700 dark:text-accent-200">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-accent-500 dark:text-accent-400">
          <span className="bg-accent-100 dark:bg-accent-800 px-3 py-1 rounded-full">
            Healthcare
          </span>
          <span className="bg-accent-100 dark:bg-accent-800 px-3 py-1 rounded-full">
            Finance
          </span>
          <span className="bg-accent-100 dark:bg-accent-800 px-3 py-1 rounded-full">
            E-commerce
          </span>
          <span className="bg-accent-100 dark:bg-accent-800 px-3 py-1 rounded-full">
            Education
          </span>
          <span className="bg-accent-100 dark:bg-accent-800 px-3 py-1 rounded-full">
            Manufacturing
          </span>
          <span className="bg-accent-100 dark:bg-accent-800 px-3 py-1 rounded-full">
            Professional Services
          </span>
        </div>
      </div>
    </section>
  );
}