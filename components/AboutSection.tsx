import { Award, Shield, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Image from 'next/image';

interface AboutSectionProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    title: 'Biz haqimizda',
    description: 'Airticket - 2019 yildan beri sayohat xizmatlari bozorida faol ishlovchi professional agentlik. Biz O\'zbekistonning barcha hududlaridan mijozlarga xizmat ko\'rsatamiz va yurtda hamda xorijda sayohatni oson va qulay qilish uchun harakat qilamiz.',
    mission: 'Bizning missiyamiz - har bir mijozga eng yaxshi narxda, sifatli va ishonchli xizmat ko\'rsatish. Biz 24/7 ish rejimida ishlaymiz va sizning har qanday savolingizga tayyor javob beramiz.',
    features: [
      'Rasmiy litsenziya va guvohnomalar',
      'Barcha xalqaro aviakompaniyalar bilan hamkorlik',
      'Professional va tajribali jamoa',
      'Shaffof narxlar va shartnomalar'
    ],
    stats: [
      { number: '6+', label: 'Yillik tajriba' },
      { number: '3,000+', label: 'Qoniqgan mijozlar' },
      { number: '100+', label: 'Yo\'nalishlar' }
    ]
  },
  ru: {
    title: 'О нас',
    description: 'Airticket - профессиональное агентство, активно работающее на рынке туристических услуг с 2019 года. Мы обслуживаем клиентов со всех регионов Узбекистана и стремимся сделать путешествия внутри страны и за рубежом легкими и удобными.',
    mission: 'Наша миссия - предоставить каждому клиенту качественный и надежный сервис по лучшей цене. Мы работаем в режиме 24/7 и готовы ответить на любой ваш вопрос.',
    features: [
      'Официальная лицензия и сертификаты',
      'Сотрудничество со всеми международными авиакомпаниями',
      'Профессиональная и опытная команда',
      'Прозрачные цены и договоры'
    ],
    stats: [
      { number: '6+', label: 'Лет опыта' },
      { number: '3,000+', label: 'Довольных клиентов' },
      { number: '100+', label: 'Направлений' }
    ]
  },
  en: {
    title: 'About Us',
    description: 'Airticket is a professional agency actively operating in the travel services market since 2019. We serve clients from all regions of Uzbekistan and strive to make travel within the country and abroad easy and convenient.',
    mission: 'Our mission is to provide every client with quality and reliable service at the best price. We operate 24/7 and are ready to answer any of your questions.',
    features: [
      'Official license and certificates',
      'Partnership with all international airlines',
      'Professional and experienced team',
      'Transparent prices and contracts'
    ],
    stats: [
      { number: '6+', label: 'Years of experience' },
      { number: '3,000+', label: 'Satisfied clients' },
      { number: '100+', label: 'Destinations' }
    ]
  }
};

export function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language];
  const altTexts = {
    uz: 'Airticket ofisi va jamoasi',
    ru: 'Офис и команда Airticket',
    en: 'Airticket office and team'
  };

  return (
    <section id="biz-haqimizda" className="py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 text-gray-900" tabIndex={0} aria-label={t.title}>{t.title}</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzYzNzEwMzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt={altTexts[language]}
              fill
              className="object-cover"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={70}
              loading="lazy"
              role="img"
              aria-label={altTexts[language]}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-gray-900 mb-6">
              {t.description}
            </p>
            <p className="text-gray-900 mb-8">
              {t.mission}
            </p>

            <div className="space-y-3 mb-8">
              {t.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-900">{feature}</span>
                </div>
              ))}
            </div>

            {/* License Badge */}
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200 shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-gray-900">
                  {language === 'uz' ? 'Litsenziya №' : language === 'ru' ? 'Лицензия №' : 'License №'}
                  2019-XXX-XXXX
                </div>
                <div className="text-sm text-gray-900">
                  {language === 'uz' ? 'Turizm vazirligi' : language === 'ru' ? 'Министерство туризма' : 'Ministry of Tourism'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8">
          {t.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl text-blue-700 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
