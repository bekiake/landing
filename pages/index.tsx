import { useState } from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import { DestinationsSection } from "../components/DestinationsSection";
import { UmrahSection } from "../components/UmrahSection";
import { CTASection } from "../components/CTASection";
import { WhyChooseSection } from "../components/WhyChooseSection";
import dynamic from "next/dynamic";
const ReviewsSection = dynamic(() => import("../components/ReviewsSection").then(mod => mod.ReviewsSection), { ssr: false });
const FAQSection = dynamic(() => import("../components/FAQSection").then(mod => mod.FAQSection), { ssr: false });
import { getFAQSchema } from "../components/FAQSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { MobileBottomBar } from "../components/MobileBottomBar";

export default function Home() {
  const [language, setLanguage] = useState<"uz" | "ru" | "en">("uz");
  // SEO uchun har tilga mos title va description
  const seo = {
    uz: {
      title: 'Aviabilet, Umra, Haj, Tur paketlar | Turizm Agentligi',
      description: 'Aviabilet, aviakassa, umra, haj va tur paketlar uchun eng yaxshi narxlar. Biz bilan sayohatingizni boshlang!'
    },
    ru: {
      title: 'Авиабилеты, Умра, Хадж, Турпакеты | Туристическое агентство',
      description: 'Авиабилеты, авиакасса, умра, хадж и турпакеты по лучшим ценам. Начните свое путешествие с нами!'
    },
    en: {
      title: 'Flight Tickets, Umrah, Hajj, Tour Packages | Travel Agency',
      description: 'Best prices for flight tickets, umrah, hajj and tour packages. Start your journey with us!'
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <link rel="canonical" href="https://airtickett.uz/" />
        <link rel="alternate" href="https://airtickett.uz/" hrefLang="uz" />
        <link rel="alternate" href="https://airtickett.uz/ru/" hrefLang="ru" />
        <link rel="alternate" href="https://airtickett.uz/en/" hrefLang="en" />
        <title>{seo[language].title}</title>
        <meta name="description" content={seo[language].description} />
        <meta name="keywords" content="aviabilet, aviakassa, umra, haj, tur paket, Uzbekistan, Туризм, Турпакет, авиабилеты, Умра, Хадж" />
        <meta property="og:title" content={seo[language].title} />
        <meta property="og:description" content={seo[language].description} />
        <meta property="og:type" content="website" />
        {/* Schema.org strukturalangan ma’lumotlar */}
        {/* BreadcrumbList schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": language === 'uz' ? 'Bosh sahifa' : language === 'ru' ? 'Главная' : 'Home',
                "item": "https://airtickett.uz/"
              }
            ]
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Turizm Agentligi",
            "url": "https://airtickett.uz/",
            "logo": "https://airtickett.uz/logo.png",
            "description": seo[language].description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Chilonzor, Tashkent, Uzbekistan",
              "addressCountry": "UZ"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+998 90 123 45 67",
              "contactType": "customer service"
            }
          })
        }} />
        {/* FAQ schema.org markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(language))
        }} />
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
