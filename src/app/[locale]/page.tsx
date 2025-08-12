import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustIndicators } from "@/components/trust-indicators";
import { SocialProof } from "@/components/social-proof";
import { Features } from "@/components/features";
import { WhatsAppEngagement } from "@/components/whatsapp-engagement";
import { GovTechSection } from "@/components/govtech-section";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <WhatsAppEngagement />
      <GovTechSection />
      <CallToAction />
      <Footer />
    </main>
  );
}