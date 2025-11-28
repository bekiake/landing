import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/router';


interface HeaderProps {
  language: 'uz' | 'ru' | 'en';
  setLanguage: (lang: 'uz' | 'ru' | 'en') => void;
}

const translations = {
  uz: {
    nav: [
      { label: 'Aviabiletlar', anchor: 'aviabiletlar' },
      { label: 'Umra turlari', anchor: 'umra-turlari' },
      { label: 'Blog', anchor: 'blog' },
      { label: 'Biz haqimizda', anchor: 'biz-haqimizda' },
      { label: 'Aloqa', anchor: 'footer' }
    ],
    cta: "+998901234567"
  },
  ru: {
    nav: [
      { label: 'Авиабилеты', anchor: 'aviabiletlar' },
      { label: 'Тур Умра', anchor: 'umra-turlari' },
      { label: 'Блог', anchor: 'blog' },
      { label: 'О нас', anchor: 'biz-haqimizda' },
      { label: 'Контакты', anchor: 'footer' }
    ],
    cta: '+998901234567'
  },
  en: {
    nav: [
      { label: 'Airline Tickets', anchor: 'aviabiletlar' },
      { label: 'Umrah Tours', anchor: 'umra-turlari' },
      { label: 'Blog', anchor: 'blog' },
      { label: 'About Us', anchor: 'biz-haqimizda' },
      { label: 'Contact', anchor: 'footer' }
    ],
    cta: '+998901234567'
  }
};

export function Header({ language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];
  const router = useRouter();

  const handleLanguageChange = (lang: 'uz' | 'ru' | 'en') => {
    // Agar blog post sahifasidamiz va shu postning boshqa til versiyasi mavjud bo'lsa,
    // mos slugga o'tamiz; aks holda faqat landing til state'ni almashtiramiz.
    const path = router.asPath;

    // Blog postlar uchun mapping: asosiy uz slug -> ru/en suffixlar
    const blogMap: Record<string, { ru: string; en: string }> = {
      '/blog/aviabiletni-eng-arzon-narxda-qachon-sotib-olish-kerak': {
        ru: '/blog/aviabiletni-eng-arzon-narxda-qachon-sotib-olish-kerak.ru',
        en: '/blog/aviabiletni-eng-arzon-narxda-qachon-sotib-olish-kerak.en',
      },
      '/blog/toshkent-istanbul-aviabilet-toliq-qollanma': {
        ru: '/blog/toshkent-istanbul-aviabilet-toliq-qollanma.ru',
        en: '/blog/toshkent-istanbul-aviabilet-toliq-qollanma.en',
      },
      '/blog/umra-safari-uchun-tayyorgarlik': {
        ru: '/blog/umra-safari-uchun-tayyorgarlik.ru',
        en: '/blog/umra-safari-uchun-tayyorgarlik.en',
      },
    };

    // RU/EN versiyalaridan uz yoki boshqa tilga qaytishda asosiy uz slug'ga normalizatsiya
    const normalizedPath = path
      .replace('.ru', '')
      .replace('.en', '');

    if (normalizedPath in blogMap && (lang === 'ru' || lang === 'en')) {
      const target = blogMap[normalizedPath][lang];
      setLanguage(lang);
      router.push(target);
      return;
    }

    // Boshqa hollarda faqat til state'ni yangilaymiz
    setLanguage(lang);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">✈</span>
              </div>
              <span className="text-2xl bg-linear-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">Airticket</span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Главная навигация">
            {t.nav.map((item, idx) => {
              const isBlog = item.anchor === 'blog';
              const href = isBlog ? `/blog?lang=${language}` : `#${item.anchor}`;
              return (
                <a
                  key={idx}
                  href={href}
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                  aria-label={item.label}
                  tabIndex={0}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => handleLanguageChange('uz')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  language === 'uz' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => handleLanguageChange('ru')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  language === 'ru' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  language === 'en' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                EN
              </button>
            </div>
            <a
              href="tel:+998901234567"
              className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
              aria-label="Позвонить в агентство"
              role="button"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {t.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4 mb-4">
              {t.nav.map((item, idx) => {
                const isBlog = item.anchor === 'blog';
                const href = isBlog ? `/blog?lang=${language}` : `#${item.anchor}`;
                return (
                  <a
                    key={idx}
                    href={href}
                    className="text-gray-700 hover:text-blue-700 transition-colors px-2 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={item.label}
                    tabIndex={0}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div className="flex flex-col gap-3 px-2">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => handleLanguageChange('uz')}
                  className={`flex-1 py-2 rounded-md transition-all ${
                    language === 'uz' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  UZ
                </button>
                <button
                  onClick={() => handleLanguageChange('ru')}
                  className={`flex-1 py-2 rounded-md transition-all ${
                    language === 'ru' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`flex-1 py-2 rounded-md transition-all ${
                    language === 'en' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  EN
                </button>
              </div>
              <a
                href="tel:+998901234567"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
                aria-label="Позвонить в агентство"
                role="button"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {t.cta}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
