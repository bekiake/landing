import { Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Image from 'next/image';
import { useRef } from 'react';

interface HeroSectionProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    title1: 'Arzon aviabiletlar va sayohat xizmatlari – ',
    title2: 'airtickett.uz',
    subtitle:
      "airtickett.uz O'zbekiston va xalqaro yo'nalishlarda arzon aviabiletlarni qidirish va bron qilish, shuningdek umra, haj va tur paketlarni taklif qiluvchi onlayn turizm servisi. Narxlarni solishtiring, eng qulay reysni tanlang va sayohatingizni bir necha daqiqada rejalashtiring.",
    callButton: "Qo'ng'iroq qilish"
  },
  ru: {
    title1: 'Подбор ',
    title2: 'авиабилетов',
    subtitle: 'Ищете выгодный билет на ближайший рейс или планируете отпуск заранее? Мы подберем оптимальный вариант — по времени, цене и комфорту. Без бесконечных выдачи и подозрительных сайтов: только проверенные авиакомпании, прямые или удобные стыковочные рейсы.',
    callButton: 'Позвонить'
  },
  en: {
    title1: 'Find ',
    title2: 'airline tickets',
    subtitle: 'Looking for a great deal on the next flight or planning your vacation in advance? We will find the best option for you - by time, price and comfort. Only verified airlines, direct or convenient connecting flights.',
    callButton: 'Call Now'
  }
};

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language];
  const altTexts = {
    uz: 'Tropik plyaj va sayohat manzili',
    ru: 'Тропический пляж и туристическое направление',
    en: 'Tropical beach travel destination'
  };
  const ref = useRef(null);

  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt={altTexts[language]}
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 60vw"
          quality={70}
        />
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/50 via-blue-900/40 to-blue-900/60 bg-[rgba(0,0,0,0)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="mb-6 text-white" tabIndex={0} aria-label={t.title1 + t.title2}>
            {t.title1}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>
          <p className="mb-10 text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
            <div className="flex justify-center">
              <a
                href="tel:+998977772502"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 px-10 py-4 rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                aria-label={t.callButton}
                role="button"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                {t.callButton}
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}