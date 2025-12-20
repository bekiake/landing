import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import { DestinationsSection } from "../components/DestinationsSection";
import { UmrahSection } from "../components/UmrahSection";
import { CTASection } from "../components/CTASection";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { FAQSection, getFAQSchema } from "../components/FAQSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { MobileBottomBar } from "../components/MobileBottomBar";

type Language = "uz" | "ru" | "en";

interface HomeProps {
  initialLanguage?: Language;
}

export default function Home({ initialLanguage = "uz" }: HomeProps) {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const baseUrl = "https://airtickett.uz";
  const supportedLanguages: Language[] = ["uz", "ru", "en"];
  const languagePathMap: Record<Language, string> = {
    uz: "/",
    ru: "/ru",
    en: "/en",
  };
  const localeCodeMap: Record<Language, string> = {
    uz: "uz_UZ",
    ru: "ru_RU",
    en: "en_US",
  };
  const ogImageAlt: Record<Language, string> = {
    uz: "airtickett.uz sayohat xizmati",
    ru: "airtickett.uz туристическое агентство",
    en: "airtickett.uz travel agency",
  };
  const canonicalUrl = `${baseUrl}${languagePathMap[language]}`;
  const alternateLinks = supportedLanguages.map((lng) => ({
    hrefLang: lng,
    href: `${baseUrl}${languagePathMap[lng]}`,
  }));

  useEffect(() => {
    if (!router.isReady) return;
    
    const pathLang =
      router.pathname === "/ru"
        ? "ru"
        : router.pathname === "/en"
        ? "en"
        : "uz";
    
    if (pathLang !== language) {
      setLanguage(pathLang);
    }
  }, [router.isReady, router.pathname, language]);
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
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'uz' ? 'Bosh sahifa' : language === 'ru' ? 'Главная' : 'Home',
        "item": canonicalUrl
      }
    ]
  };
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Airtickett.uz",
    "url": canonicalUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": seo[language].description,
    "priceRange": "$$",
    "telephone": "+998 97 777 25 02",
    "areaServed": ["UZ", "KZ", "TR", "SA", "AE"],
    "sameAs": [
      "https://airtickett.uz"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chilonzor",
      "addressLocality": "Tashkent",
      "addressCountry": "UZ"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+998 97 777 25 02",
      "contactType": "sales",
      "areaServed": "UZ",
      "availableLanguage": ["uz", "ru", "en"]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "6"
    },
    "makesOffer": [
      {
        "@type": "Service",
        "name": "Flight ticket booking",
        "areaServed": "Worldwide"
      },
      {
        "@type": "Service",
        "name": "Umrah packages",
        "areaServed": "Saudi Arabia"
      },
      {
        "@type": "Service",
        "name": "Visa assistance",
        "areaServed": "Global"
      }
    ]
  };
  const faqSchemaData = getFAQSchema(language);
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        {alternateLinks.map((link) => (
          <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/`} />
        <title>{seo[language].title}</title>
        <meta name="description" content={seo[language].description} />
        <meta
          name="keywords"
          content="aviabilet, aviabiletlar, arzon aviabiletlar, aviakassa, umra safari, haj safari, tur paketlar, aviabilet Toshkent, авиабилеты Ташкент, дешевые авиабилеты, умра, хадж, турпакеты Узбекистан"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo[language].title} />
        <meta property="og:description" content={seo[language].description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="airtickett.uz" />
        <meta property="og:locale" content={localeCodeMap[language]} />
        {supportedLanguages
          .filter((lng) => lng !== language)
          .map((lng) => (
            <meta key={lng} property="og:locale:alternate" content={localeCodeMap[lng]} />
          ))}
        <meta property="og:image" content={`${baseUrl}/banner.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={ogImageAlt[language]} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@airtickett" />
        <meta name="twitter:title" content={seo[language].title} />
        <meta name="twitter:description" content={seo[language].description} />
        <meta name="twitter:image" content={`${baseUrl}/banner.png`} />
        <meta name="twitter:image:alt" content={ogImageAlt[language]} />
        <meta property="business:contact_data:street_address" content="Chilonzor, Toshkent, O'zbekiston" />
        <meta property="business:contact_data:phone_number" content="+998977772502" />
        <meta property="business:contact_data:country_name" content="Uzbekistan" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(travelAgencySchema)
        }} />
        {faqSchemaData && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchemaData)
          }} />
        )}
      </Head>
      <Header language={language} />
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
