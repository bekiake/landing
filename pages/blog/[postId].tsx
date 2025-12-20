import Head from 'next/head';
import { useRouter } from 'next/router';
import { BlogPost } from '../../components/BlogPost';
import { BlogLayout } from '../../components/BlogLayout';
import {
  blogPostsSEO,
  generateBlogPostingSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  blogFAQs,
} from '../../lib/blogSEO';

type Language = 'uz' | 'ru' | 'en';

interface BlogPostPageProps {
  initialLanguage?: Language;
}

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

export default function BlogPostPage({ initialLanguage = 'uz' }: BlogPostPageProps) {
  const router = useRouter();
  const { postId, lang } = router.query;
  const baseUrl = 'https://airtickett.uz';
  const language = (lang === 'ru' || lang === 'en' ? lang : initialLanguage) as Language;

  if (typeof postId !== 'string') {
    return null;
  }

  // Get SEO data for this post
  const seoData = blogPostsSEO[postId]?.[language];
  const localizedPath = `${localePathMap[language]}/${postId}`;
  const canonicalUrl = `${baseUrl}${localizedPath}`;
  const alternateLinks = (['uz', 'ru', 'en'] as Language[]).map((lng) => ({
    hrefLang: lng,
    href: `${baseUrl}${localePathMap[lng]}/${postId}`,
  }));
  
  // Get post data from BlogPost component to generate schemas
  const blogPosts = {
    'travel-tips': {
      uz: { title: 'Sayohat uchun 10 ta foydali maslahat', date: '2025-11-15', image: '/travel-tips.jpg' },
      ru: { title: '10 полезных советов для путешествий', date: '2025-11-15', image: '/travel-tips.jpg' },
      en: { title: '10 Useful Travel Tips', date: '2025-11-15', image: '/travel-tips.jpg' },
    },
    'cheap-flights': {
      uz: { title: 'Aviabilet qanday qilib arzon narxda olish mumkin?', date: '2025-11-10', image: '/airticket.jpg' },
      ru: { title: 'Как купить авиабилеты дешево?', date: '2025-11-10', image: '/airticket.jpg' },
      en: { title: 'How to Buy Cheap Flight Tickets?', date: '2025-11-10', image: '/airticket.jpg' },
    },
    'travel-budget': {
      uz: { title: 'Sayohat byudjeti: Pulni qanday tejash mumkin', date: '2025-11-05', image: 'https://images.unsplash.com/photo-1650821414031-cf7291ce938c?w=1080' },
      ru: { title: 'Бюджет путешествия: Как сэкономить деньги', date: '2025-11-05', image: 'https://images.unsplash.com/photo-1650821414031-cf7291ce938c?w=1080' },
      en: { title: 'Travel Budget: How to Save Money', date: '2025-11-05', image: 'https://images.unsplash.com/photo-1650821414031-cf7291ce938c?w=1080' },
    },
    'visa-guide': {
      uz: { title: "Viza olish: To'liq qo'llanma", date: '2025-11-01', image: '/visa-application-document.jpg' },
      ru: { title: 'Получение визы: Полное руководство', date: '2025-11-01', image: '/visa-application-document.jpg' },
      en: { title: 'Getting a Visa: Complete Guide', date: '2025-11-01', image: '/visa-application-document.jpg' },
    },
    'packing-tips': {
      uz: { title: "Bagajni to'g'ri yig'ish: Nima olib borish kerak?", date: '2025-10-28', image: '/travel-concept-with-open-luggage.jpg' },
      ru: { title: 'Правильная упаковка багажа: Что брать с собой?', date: '2025-10-28', image: '/travel-concept-with-open-luggage.jpg' },
      en: { title: 'Packing Luggage Right: What to Bring?', date: '2025-10-28', image: '/travel-concept-with-open-luggage.jpg' },
    },
    'umrah-preparation': {
      uz: { title: "Umra safari: To'liq tayyorgarlik", date: '2025-10-25', image: '/umra-safari-2.jpg' },
      ru: { title: 'Умра: подготовка к паломничеству', date: '2025-10-25', image: '/umra-safari-2.jpg' },
      en: { title: 'Umrah Journey: Preparation Guide', date: '2025-10-25', image: '/umra-safari-2.jpg' },
    },
  };

  const postData = (blogPosts as any)[postId]?.[language];

  // Generate schemas
  const blogPostingSchema = postData ? generateBlogPostingSchema(
    postId,
    language,
    postData.title,
    postData.date,
    postData.date,
    postData.image
  ) : null;

  const breadcrumbSchema = postData ? generateBreadcrumbSchema(
    postId,
    language,
    postData.title
  ) : null;

  const faqData = blogFAQs[postId]?.[language];
  const faqSchema = faqData ? generateFAQSchema(language, faqData) : null;

  return (
    <>
      <Head>
        <title>{seoData?.title || 'Blog – airtickett.uz'}</title>
        <meta name="description" content={seoData?.metaDescription || ''} />
        <link rel="canonical" href={canonicalUrl} />
        {alternateLinks.map((link) => (
          <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/blog/${postId}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoData?.title || 'Blog – airtickett.uz'} />
        <meta property="og:description" content={seoData?.metaDescription || ''} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="airtickett.uz" />
        <meta property="og:locale" content={localeCodeMap[language]} />
        {(['uz', 'ru', 'en'] as Language[])
          .filter((lng) => lng !== language)
          .map((lng) => (
            <meta key={lng} property="og:locale:alternate" content={localeCodeMap[lng]} />
          ))}
        {postData?.image && (
          <meta property="og:image" content={postData.image.startsWith('http') ? postData.image : `${baseUrl}${postData.image}`} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@airtickett" />
        <meta name="twitter:title" content={seoData?.title || 'Blog – airtickett.uz'} />
        <meta name="twitter:description" content={seoData?.metaDescription || ''} />
        {postData?.image && (
          <meta name="twitter:image" content={postData.image.startsWith('http') ? postData.image : `${baseUrl}${postData.image}`} />
        )}
        {postData?.date && <meta property="article:published_time" content={postData.date} />}
        {postData?.date && <meta property="article:modified_time" content={postData.date} />}
        <meta property="article:section" content={postData?.category || 'Travel'} />
        {/* JSON-LD Schemas */}
        {blogPostingSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
          />
        )}
        {breadcrumbSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        )}
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>
      <BlogLayout language={language}>
        <BlogPost
          language={language}
          postId={postId}
          onBack={() => router.push(localePathMap[language])}
        />
      </BlogLayout>
    </>
  );
}
