import Link from 'next/link';
import Head from 'next/head';

const translations = {
  uz: {
    title: 'Sahifa topilmadi',
    description: 'Kechirasiz, bunday sahifa mavjud emas yoki o‘chirib tashlangan.',
    home: 'Bosh sahifaga qaytish'
  },
  ru: {
    title: 'Страница не найдена',
    description: 'Извините, такой страницы не существует или она была удалена.',
    home: 'Вернуться на главную'
  },
  en: {
    title: 'Page Not Found',
    description: 'Sorry, this page does not exist or has been removed.',
    home: 'Back to Home'
  }
};

type Lang = keyof typeof translations;
interface Custom404Props {
  language?: Lang;
}

export default function Custom404({ language = 'uz' }: Custom404Props) {
  const t = translations[language] || translations.uz;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <Head>
        <title>{t.title} | Airticket</title>
        <meta name="description" content={t.description} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <h2 className="text-2xl font-semibold mb-4">{t.title}</h2>
      <p className="mb-8 text-gray-600">{t.description}</p>
      <Link
        href="/"
        className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all shadow-md"
      >
        {t.home}
      </Link>
    </div>
  );
}
