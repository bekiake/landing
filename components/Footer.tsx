import { Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';

interface FooterProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    quickLinks: 'Tezkor havolalar',
    links: ['Aviabiletlar', 'Umra turlari', 'Biz haqimizda', 'Aloqa'],
    contact: 'Aloqa',
    social: 'Ijtimoiy tarmoqlar',
    copyright: '© 2025 Airticket. Barcha huquqlar himoyalangan.',
    address: 'Toshkent sh., Chilonzor tumani',
    workingHours: 'Ish vaqti: 24/7'
  },
  ru: {
    quickLinks: 'Быстрые ссылки',
    links: ['Авиабилеты', 'Тур Умра', 'О нас', 'Контакты'],
    contact: 'Контакты',
    social: 'Социальные сети',
    copyright: '© 2025 Airticket. Все права защищены.',
    address: 'г. Ташкент, Чиланзарский район',
    workingHours: 'Время работы: 24/7'
  },
  en: {
    quickLinks: 'Quick Links',
    links: ['Airline Tickets', 'Umrah Tours', 'About Us', 'Contact'],
    contact: 'Contact',
    social: 'Social Media',
    copyright: '© 2025 Airticket. All rights reserved.',
    address: 'Tashkent, Chilanzar district',
    workingHours: 'Working hours: 24/7'
  }
};

export function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer id="aloqa" className="bg-linear-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">✈</span>
              </div>
              <span className="text-2xl bg-linear-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Airticket
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              {language === 'uz' ? 'Sayohatingiz bizning ishimiz!' : 
               language === 'ru' ? 'Ваше путешествие - наша работа!' :
               'Your journey is our business!'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-white">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {t.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 hover:text-blue-400 transition-colors"
                    aria-label={link}
                    tabIndex={0}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-white">{t.contact}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+998901234567"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-400 transition-colors"
                  aria-label="Позвонить в агентство"
                  role="button"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +998 97 777 25 02
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@airticket.uz"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-400 transition-colors"
                  aria-label="Написать на email"
                  role="button"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  info@airticket.uz
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <MapPin className="w-4 h-4 shrink-0 mt-1" aria-hidden="true" />
                <span>{t.address}</span>
              </li>
              <li className="text-gray-700 text-sm">
                {t.workingHours}
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-white">{t.social}</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/airticket.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
                role="button"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/airticket.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
                role="button"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://t.me/apple3650"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Telegram"
                role="button"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-700 text-sm">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}
