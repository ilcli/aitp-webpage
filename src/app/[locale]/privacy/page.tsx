import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert">
          <h1 className="mb-8 text-4xl font-bold text-foreground">
            Privacy Policy
          </h1>

          <p className="mb-6 text-accent-600 dark:text-accent-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-accent-700 dark:text-accent-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Information We Collect
              </h2>
              <p>
                At AITP, we are committed to protecting your privacy. This
                policy outlines how we collect, use, and protect your personal
                information when you interact with our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide, maintain, and
                improve our AI automation and training services, communicate
                with you, and ensure the security of our platform.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
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
