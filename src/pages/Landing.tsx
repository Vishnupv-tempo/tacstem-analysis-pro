import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Features } from "@/components/landing/Features";
import { CodingSection } from "@/components/landing/CodingSection";
import { TelestrationSection } from "@/components/landing/TelestrationSection";
import { Workflow } from "@/components/landing/Workflow";
import { Affordability } from "@/components/landing/Affordability";
import { Included } from "@/components/landing/Included";
import { Audience } from "@/components/landing/Audience";
import { Philosophy } from "@/components/landing/Philosophy";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

/**
 * Tacstem landing page — “Video Analysis, Simplified.”
 * Dark charcoal + electric lime; the product workspace mockup is the anchor.
 */
export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <CodingSection />
        <TelestrationSection />
        <Workflow />
        <Affordability />
        <Included />
        <Audience />
        <Philosophy />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
