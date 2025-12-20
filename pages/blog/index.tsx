import Head from 'next/head';
import { useRouter } from 'next/router';
import { BlogSection } from '../../components/BlogSection';
import { BlogLayout } from '../../components/BlogLayout';

type Language = 'uz' | 'ru' | 'en';

interface BlogIndexProps {
  initialLanguage?: Language;
}

const blogSeoCopy: Record<Language, { title: string; description: string }> = {
  uz: {
    title: 'Sayohat blogi – airtickett.uz',
    description: "Aviabilet, umra, haj va tur paketlar bo'yicha foydali maqolalar va maslahatlar – airtickett.uz blogi.",
  },
  ru: {
    title: 'Блог о путешествиях – airtickett.uz',
    description: 'Полезные статьи об авиабилетах, Умре, Хадже и турпакетах для путешественников из Узбекистана.',
  },
  en: {
    title: 'Travel blog – airtickett.uz',
    description: 'Actionable tips on cheap flights, Umrah, visas and tour packages by airtickett.uz travel experts.',
  },
};

const localePathMap: Record<Language, string> = {
  uz: '/blog',
  ru: '/ru/blog',
  en: '/en/blog',
};

const localeCodeMap: Record<Language, string> = {
  uz: 'uz_UZ',
  ru: 'ru_RU',
  en: 'en_US',
};

export default function BlogIndex({ initialLanguage = 'uz' }: BlogIndexProps) {
  const router = useRouter();
  const { lang } = router.query;
  const languages: Language[] = ['uz', 'ru', 'en'];
  const language = (lang === 'ru' || lang === 'en' ? lang : initialLanguage) as Language;
  const baseUrl = 'https://airtickett.uz';
  const canonicalUrl = `${baseUrl}${localePathMap[language]}`;
  const alternateLinks = languages.map((lng) => ({
    hrefLang: lng,
    href: `${baseUrl}${localePathMap[lng]}`,
  }));
  const ogImage = `${baseUrl}/banner.png`;
  const localePrefix = language === 'uz' ? '' : `/${language}`;

  return (
    <>
      <Head>
        <title>{blogSeoCopy[language].title}</title>
        <meta name="description" content={blogSeoCopy[language].description} />
        <link rel="canonical" href={canonicalUrl} />
        {alternateLinks.map((link) => (
          <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={blogSeoCopy[language].title} />
        <meta property="og:description" content={blogSeoCopy[language].description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="airtickett.uz" />
        <meta property="og:locale" content={localeCodeMap[language]} />
        {languages
          .filter((lng) => lng !== language)
          .map((lng) => (
            <meta key={lng} property="og:locale:alternate" content={localeCodeMap[lng]} />
          ))}
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={blogSeoCopy[language].title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogSeoCopy[language].title} />
        <meta name="twitter:description" content={blogSeoCopy[language].description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <BlogLayout language={language}>
        <BlogSection
          language={language}
          onPostClick={(id) => router.push(`${localePrefix}/blog/${id}`)}
        />
      </BlogLayout>
    </>
  );
}
