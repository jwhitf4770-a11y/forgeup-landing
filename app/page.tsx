import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhyLift } from "@/components/WhyLift";
import { Differentiators } from "@/components/Differentiators";
import { HowItWorks } from "@/components/HowItWorks";
import { MiloDemo } from "@/components/MiloDemo";
import { AIScreenshots } from "@/components/AIScreenshots";
import { MidCTA } from "@/components/MidCTA";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CreedBand } from "@/components/CreedBand";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { AnvilDivider } from "@/components/AnvilDivider";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AnvilDivider />
        <WhyLift />
        <AnvilDivider />
        <Differentiators />
        <HowItWorks />
        <AnvilDivider />
        <MiloDemo />
        <AIScreenshots />
        <MidCTA />
        <AnvilDivider />
        <Pricing />
        <AnvilDivider />
        <FAQ />
        <CreedBand />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
