import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  language: 'uz' | 'ru' | 'en';
  setLanguage: (lang: 'uz' | 'ru' | 'en') => void;
}

const translations = {
  uz: {
    nav: ['Aviabiletlar', 'Umra turlari', 'Biz haqimizda', 'Aloqa'],
    cta: "+998901234567"
  },
  ru: {
    nav: ['Авиабилеты', 'Тур Умра', 'О нас', 'Контакты'],
    cta: '+998901234567'
  },
  en: {
    nav: ['Airline Tickets', 'Umrah Tours', 'About Us', 'Contact'],
    cta: '+998901234567'
  }
};

export function Header({ language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">✈</span>
              </div>
              <span className="text-2xl bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">Airticket</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {t.nav.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  language === 'uz' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  language === 'ru' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  language === 'en' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                EN
              </button>
            </div>
            <a
              href="tel:+998901234567"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
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
              {t.nav.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-blue-700 transition-colors px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 px-2">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`flex-1 py-2 rounded-md transition-all ${
                    language === 'uz' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  UZ
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`flex-1 py-2 rounded-md transition-all ${
                    language === 'ru' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 py-2 rounded-md transition-all ${
                    language === 'en' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  EN
                </button>
              </div>
              <a
                href="tel:+998901234567"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                {t.cta}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
