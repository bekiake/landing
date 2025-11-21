import Link from 'next/link';
import Head from 'next/head';

const translations = {
  uz: {
    title: 'Serverda xatolik',
    description: 'Kechirasiz, serverda kutilmagan xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.',
    home: 'Bosh sahifaga qaytish'
  },
  ru: {
    title: 'Ошибка сервера',
    description: 'Извините, на сервере произошла ошибка. Пожалуйста, попробуйте позже.',
    home: 'Вернуться на главную'
  },
  en: {
    title: 'Server Error',
    description: 'Sorry, a server error occurred. Please try again later.',
    home: 'Back to Home'
  }
};

type Lang = keyof typeof translations;
interface Custom500Props {
  language?: Lang;
}

export default function Custom500({ language = 'uz' }: Custom500Props) {
  const t = translations[language] || translations.uz;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <Head>
        <title>{t.title} | Airticket</title>
        <meta name="description" content={t.description} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <h1 className="text-6xl font-bold mb-6">500</h1>
      <h2 className="text-2xl font-semibold mb-4">{t.title}</h2>
      <p className="mb-8 text-gray-600">{t.description}</p>
      <Link href="/">
        <a className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all shadow-md">{t.home}</a>
      </Link>
    </div>
  );
}
