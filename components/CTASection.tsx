import { Phone, MessageCircle, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Image from 'next/image';
import { ParallaxSection } from './ScrollReveal';

interface CTASectionProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    title: "Tezkor bron qilish uchun qo'ng'iroq qiling",
    subtitle: 'Mutaxassislarimiz 24/7 xizmatda',
    phone: '+998 97 777 25 02',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram'
  },
  ru: {
    title: 'Звоните для быстрого бронирования',
    subtitle: 'Наши специалисты работают 24/7',
    phone: '+998 97 777 25 02',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram'
  },
  en: {
    title: 'Call for fast booking',
    subtitle: 'Our specialists are available 24/7',
    phone: '+998 97 777 25 02',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram'
  }
};

export function CTASection({ language }: CTASectionProps) {
  const t = translations[language];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549654501-5d270e56e92c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmclMjBzdW5zZXR8ZW58MXx8fHwxNzYzNjM4NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Airplane wing sunset"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          sizes="100vw"
          quality={80}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-purple-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-6 text-white" tabIndex={0} aria-label={t.title}>{t.title}</h2>
        <p className="text-xl text-blue-100 mb-8">
          {t.subtitle}
        </p>

        {/* Phone Number - Big & Prominent */}
        <a
          href="tel:+998901234567"
          className="inline-block text-5xl md:text-6xl text-white mb-12 hover:text-yellow-300 transition-colors"
          aria-label={t.phone}
          role="button"
        >
          {t.phone}
        </a>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+998901234567"
            className="flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
            aria-label={t.phone}
            role="button"
          >
            <Phone className="w-6 h-6" aria-hidden="true" />
            <span className="text-lg">{t.phone}</span>
          </a>
          <a
            href="https://t.me/apple3650"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl"
            aria-label={t.telegram}
            role="button"
          >
            <Send className="w-6 h-6" aria-hidden="true" />
            <span className="text-lg">{t.telegram}</span>
          </a>
        </div>
      </div>
    </section>
  );
}