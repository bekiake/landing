import { useState } from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import { DestinationsSection } from "../components/DestinationsSection";
import { UmrahSection } from "../components/UmrahSection";
import { CTASection } from "../components/CTASection";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { FAQSection } from "../components/FAQSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { MobileBottomBar } from "../components/MobileBottomBar";

export default function Home() {
  const [language, setLanguage] = useState<"uz" | "ru" | "en">("uz");
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Turizm Agentligi | Aviabilet, Umra, Haj, Tur paketlar</title>
        <meta name="description" content="Aviabilet, aviakassa, umra, haj va tur paketlar uchun eng yaxshi narxlar. Biz bilan sayohatingizni boshlang!" />
        <meta name="keywords" content="aviabilet, aviakassa, umra, haj, tur paket, Uzbekistan, Туризм, Турпакет, авиабилеты, Умра, Хадж" />
        <meta property="og:title" content="Turizm Agentligi" />
        <meta property="og:description" content="Aviabilet, aviakassa, umra, haj va tur paketlar uchun eng yaxshi narxlar." />
        <meta property="og:type" content="website" />
      </Head>
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
