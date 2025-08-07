import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Terms() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert">
          <h1 className="mb-8 text-4xl font-bold text-foreground">
            Terms of Service
          </h1>

          <p className="mb-6 text-accent-600 dark:text-accent-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-accent-700 dark:text-accent-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using AITP&apos;s services, you accept and
                agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Use of Services
              </h2>
              <p>
                Our AI automation and training services are provided to help you
                build systems that save time and scale impact. You agree to use
                our services responsibly and in accordance with all applicable
                laws.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a
                  href="mailto:hello@aitp.agency"
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  hello@aitp.agency
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
