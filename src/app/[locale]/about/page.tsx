import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-background to-accent-50 py-20 dark:from-accent-900 dark:via-background dark:to-accent-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              About AITP
            </h1>
            <p className="mt-6 text-lg leading-8 text-accent-600 dark:text-accent-400">
              We&apos;re a consultancy focused on turning your ideas into AI
              systems that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="mb-4 text-accent-700 dark:text-accent-300">
                At AITP, we believe AI should solve real problems, not create
                new complexities. We co-build automation and training solutions
                that save time, reduce errors, and scale your impact.
              </p>
              <p className="text-accent-700 dark:text-accent-300">
                Our approach is hands-on, practical, and focused on delivering
                systems that your team can actually use and maintain.
              </p>
            </div>
            <div className="rounded-lg bg-accent-50 p-8 dark:bg-accent-900">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                What Makes Us Different
              </h3>
              <ul className="space-y-3 text-accent-700 dark:text-accent-300">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  We build with you, not for you
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Focus on practical, maintainable solutions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  Training included with every implementation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    ✓
                  </span>
                  No-code solutions when possible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-accent-50 py-16 dark:bg-accent-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-2xl font-bold text-white">🎯</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Clarity
              </h3>
              <p className="text-accent-600 dark:text-accent-400">
                We cut through the AI hype to focus on what actually works for
                your specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-2xl font-bold text-white">⚡</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Action
              </h3>
              <p className="text-accent-600 dark:text-accent-400">
                We believe in building and iterating quickly rather than endless
                planning.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-2xl font-bold text-white">🤝</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Partnership
              </h3>
              <p className="text-accent-600 dark:text-accent-400">
                Your success is our success. We work alongside you, not in
                isolation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Ready to Build Something Together?
          </h2>
          <p className="mb-8 text-lg text-accent-600 dark:text-accent-400">
            Let&apos;s discuss how we can help turn your ideas into working AI
            systems.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
