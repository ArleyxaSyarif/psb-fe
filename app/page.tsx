import React from "react";
import LandingNavbar from "./components/LandingNavbar";
import HeroSection from "./components/HeroSection";
import FactsSection from "./components/FactsSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramsSection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import LandingFooter from "./components/LandingFooter";

export default function Home() {
  return (
    <div className="dark bg-surface-container-lowest text-on-background font-body selection:bg-secondary/30 min-h-screen">
      <LandingNavbar />
      <HeroSection />
      <FactsSection />
      <AboutSection />
      <ProgramsSection />
      <NewsSection />
      <ContactSection />
      <LandingFooter />
    </div>
  );
}
