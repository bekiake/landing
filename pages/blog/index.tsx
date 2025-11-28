import Head from 'next/head';
import { useRouter } from 'next/router';
import { BlogSection } from '../../components/BlogSection';
import { BlogLayout } from '../../components/BlogLayout';

export default function BlogIndex() {
  const router = useRouter();
  const { lang } = router.query;

  const language = (lang === 'ru' || lang === 'en' ? lang : 'uz') as 'uz' | 'ru' | 'en';

  return (
    <>
      <Head>
        <title>Sayohat blogi – airtickett.uz</title>
        <meta
          name="description"
          content="Aviabilet, umra, haj va tur paketlar bo'yicha foydali maqolalar va maslahatlar – airtickett.uz blogi."
        />
        <link rel="canonical" href="https://airtickett.uz/blog" />
      </Head>

      <BlogLayout>
        <BlogSection
          language={language}
          onPostClick={(id) =>
            router.push({ pathname: `/blog/${id}`, query: { lang: language } })
          }
        />
      </BlogLayout>
    </>
  );
}
