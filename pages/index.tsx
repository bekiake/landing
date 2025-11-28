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
      title: 'Arzon aviabiletlar, Umra, Haj, Tur paketlar – airtickett.uz',
      description: "airtickett.uz orqali O'zbekiston va xalqaro yo'nalishlarda arzon aviabiletlar, umra, haj va tur paketlarni onlayn qidiring va bron qiling."
    },
    ru: {
      title: 'Дешевые авиабилеты, Умра, Хадж, турпакеты – airtickett.uz',
      description: 'На airtickett.uz вы можете найти и забронировать дешевые авиабилеты, умра, хадж и турпакеты по выгодным ценам онлайн.'
    },
    en: {
      title: 'Cheap flight tickets, Umrah, Hajj, tour packages – airtickett.uz',
      description: 'Find and book cheap flight tickets, umrah, hajj and tour packages worldwide on airtickett.uz.'
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <link rel="canonical" href="https://airtickett.uz/" />
        <title>{seo[language].title}</title>
        <meta name="description" content={seo[language].description} />
        <meta
          name="keywords"
          content="aviabilet, aviabiletlar, arzon aviabiletlar, aviakassa, umra safari, haj safari, tur paketlar, aviabilet Toshkent, авиабилеты Ташкент, дешевые авиабилеты, умра, хадж, турпакеты Узбекистан"
        />
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
