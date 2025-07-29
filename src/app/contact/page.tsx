import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="dark:to-accent-950 bg-gradient-to-br from-background to-accent-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Let&apos;s Talk
            </h1>
            <p className="mt-6 text-lg leading-8 text-accent-600 dark:text-accent-400">
              Ready to turn your ideas into working AI systems? We&apos;d love
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Get in touch
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    Email Us
                  </h3>
                  <div className="flex items-center text-accent-600 dark:text-accent-400">
                    <svg
                      className="mr-3 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:hello@aitp.agency"
                      className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      hello@aitp.agency
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-accent-500 dark:text-accent-400">
                    We typically respond within 24 hours
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    Connect on Telegram
                  </h3>
                  <div className="flex items-center text-accent-600 dark:text-accent-400">
                    <svg
                      className="mr-3 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.578-.886 1.863-1.461 1.863-.678 0-.97-.447-1.687-1.085-.509-.453-2.267-1.613-2.267-1.613s-.38-.283-.38-.896c0-.612.38-.896.653-1.169.274-.274 4.503-4.503 4.503-4.503s.274-.274.274-.612c0-.339-.274-.613-.548-.613-.273 0-.547.274-4.503 4.503-.339.339-.678.339-1.017.339s-.678 0-1.017-.339c0 0-2.267-1.613-2.267-1.613-.717-.638-1.009-1.085-1.687-1.085-.575 0-1.159.285-1.461 1.863 0 0-.727 4.87-.896 6.728C5.168 15.238 5.168 16 6.5 16s2.832-1.762 2.832-1.762c.612-.453 1.491-1.085 2.668-1.935 1.177.85 2.056 1.482 2.668 1.935 0 0 1.5 1.762 2.832 1.762s1.332-.762 0-2.84z" />
                    </svg>
                    <a
                      href="https://t.me/aitpagency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      @aitpagency
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-accent-500 dark:text-accent-400">
                    For quick questions and updates
                  </p>
                </div>

                <div className="rounded-lg bg-accent-50 p-6 dark:bg-accent-900">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    What to expect
                  </h3>
                  <ul className="space-y-2 text-sm text-accent-700 dark:text-accent-300">
                    <li className="flex items-start">
                      <span className="mr-2 mt-0.5 text-primary-600 dark:text-primary-400">
                        ✓
                      </span>
                      Initial response within 24 hours
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-0.5 text-primary-600 dark:text-primary-400">
                        ✓
                      </span>
                      Free 30-minute consultation call
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-0.5 text-primary-600 dark:text-primary-400">
                        ✓
                      </span>
                      Custom proposal within 48 hours
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-0.5 text-primary-600 dark:text-primary-400">
                        ✓
                      </span>
                      No pressure, just clarity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="dark:bg-accent-950 bg-accent-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                How long does a typical project take?
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                Most automation projects take 2-6 weeks, depending on
                complexity. Training programs are typically 1-2 weeks.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Do you work with small teams?
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                Absolutely! We work with teams of all sizes, from solo
                entrepreneurs to large enterprises.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                What if we need ongoing support?
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                We offer flexible support packages and can work with you on a
                retainer basis for ongoing projects.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Can you work with our existing tools?
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                Yes! We specialize in integrating with your current workflow and
                tools rather than replacing them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
