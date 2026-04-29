import React from "react";
import LandingNavbar from "./components/LandingNavbar";
import HeroSection from "./components/HeroSection";
import FactsSection from "./components/FactsSection";
import ProgramsSection from "./components/ProgramsSection";
import LandingFooter from "./components/LandingFooter";
import WhyChooseUs from "./components/WhyChooseSection";

export default function Home() {
  return (
    <div className="text-on-surface bg-[#f8f9ff] font-['Inter',_sans-serif] selection:bg-orange-100 min-h-screen">
      <LandingNavbar />
      <main className="pt-16">
        <HeroSection />
        <FactsSection />
        <WhyChooseUs />
        <ProgramsSection />
      </main>
      <LandingFooter />
    </div>
  );
}
