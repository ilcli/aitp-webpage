import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-background to-accent-50 py-20 dark:from-accent-900 dark:via-background dark:to-accent-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-accent-600 dark:text-accent-400">
              We specialize in three core areas that transform how teams work
              with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* AI Automation */}
            <div className="rounded-lg border border-accent-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm dark:border-accent-800 dark:bg-accent-900/80">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-xl text-white">⚙️</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                AI Automation
              </h3>
              <p className="mb-6 text-accent-600 dark:text-accent-400">
                Transform repetitive tasks into intelligent workflows that save
                hours every day.
              </p>
              <ul className="mb-6 space-y-3 text-accent-700 dark:text-accent-300">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Document processing & data extraction
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Email and communication automation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Workflow optimization
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Custom AI integrations
                </li>
              </ul>
              <Link
                href="/contact"
                className="btn-primary block w-full text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Training & Change */}
            <div className="rounded-lg border border-accent-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm dark:border-accent-800 dark:bg-accent-900/80">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-xl text-white">🎯</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Training & Change
              </h3>
              <p className="mb-6 text-accent-600 dark:text-accent-400">
                Help your team adopt AI tools effectively with hands-on training
                and support.
              </p>
              <ul className="mb-6 space-y-3 text-accent-700 dark:text-accent-300">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  AI literacy workshops
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Tool-specific training programs
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Change management support
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Ongoing mentorship
                </li>
              </ul>
              <Link
                href="/contact"
                className="btn-primary block w-full text-center"
              >
                Learn More
              </Link>
            </div>

            {/* No-Code Systems */}
            <div className="rounded-lg border border-accent-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm dark:border-accent-800 dark:bg-accent-900/80">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-xl text-white">🔧</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                No-Code Systems
              </h3>
              <p className="mb-6 text-accent-600 dark:text-accent-400">
                Build powerful AI-driven systems without complex coding or
                technical overhead.
              </p>
              <ul className="mb-6 space-y-3 text-accent-700 dark:text-accent-300">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Airtable & Notion integrations
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Zapier & Make.com workflows
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Custom dashboard creation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  API integrations
                </li>
              </ul>
              <Link
                href="/contact"
                className="btn-primary block w-full text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-accent-50 py-16 dark:bg-accent-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Our Process
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                <span className="font-bold text-white">1</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Discover
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                We understand your current workflows and identify automation
                opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                <span className="font-bold text-white">2</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Design
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                Together, we design systems that fit your team&apos;s needs and
                capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                <span className="font-bold text-white">3</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Deploy
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                We build and implement the solution with your team every step of
                the way.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                <span className="font-bold text-white">4</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Deliver
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                We train your team and provide ongoing support for sustainable
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-accent-600 dark:text-accent-400">
            Let&apos;s discuss which service would be the best fit for your
            team.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
