import Head from 'next/head';
import { useRouter } from 'next/router';
import { BlogPost } from '../../components/BlogPost';
import { BlogLayout } from '../../components/BlogLayout';

export default function BlogPostPage() {
  const router = useRouter();
  const { postId, lang } = router.query;

  const language = (lang === 'ru' || lang === 'en' ? lang : 'uz') as 'uz' | 'ru' | 'en';

  if (typeof postId !== 'string') {
    return null;
  }

  return (
    <>
      <Head>
        <title>Blog – airtickett.uz</title>
      </Head>
      <BlogLayout>
        <BlogPost
          language={language}
          postId={postId}
          onBack={() =>
            router.push({ pathname: '/blog', query: { lang: language } })
          }
        />
      </BlogLayout>
    </>
  );
}
