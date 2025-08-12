import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustIndicators } from "@/components/trust-indicators";
import { ServicesShowcase } from "@/components/services-showcase";
import { SocialProof } from "@/components/social-proof";
import { GovTechSection } from "@/components/govtech-section";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesShowcase />
      <TrustIndicators />
      <SocialProof />
      <GovTechSection />
      <CallToAction />
      <Footer />
    </main>
  );
}