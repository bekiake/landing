import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { DestinationsSection } from "./components/DestinationsSection";
import { UmrahSection } from "./components/UmrahSection";
import { CTASection } from "./components/CTASection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { FAQSection } from "./components/FAQSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { MobileBottomBar } from "./components/MobileBottomBar";

export default function App() {
  const [language, setLanguage] = useState<"uz" | "ru" | "en">(
    "uz",
  );

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection language={language} />
        <StatsSection language={language} />
        <DestinationsSection language={language} />
        <UmrahSection language={language} />
        <CTASection language={language} />
        <WhyChooseSection language={language} />
        <ReviewsSection language={language} />
        <FAQSection language={language} />
        <AboutSection language={language} />
      </main>
      <Footer language={language} />
      <MobileBottomBar language={language} />
    </div>
  );
}