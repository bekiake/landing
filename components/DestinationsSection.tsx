import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { BookingModal } from './BookingModal';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Image from 'next/image';
import { ScrollReveal, ParallaxSection } from './ScrollReveal';

interface DestinationsSectionProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    title: "Mashhur aviabilet yo'nalishlari",
    cta: 'Aviabilet topish'
  },
  ru: {
    title: 'Популярные направления',
    cta: 'Подробнее'
  },
  en: {
    title: 'Popular Destinations',
    cta: 'Get Details'
  }
};

const destinations = [
  {
    city: 'Istanbul',
    country: {
      uz: 'Turkiya',
      ru: 'Турция',
      en: 'Turkey'
    },
    image: 'https://images.unsplash.com/photo-1669301800287-32b601bd6d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3RhbmJ1bCUyMHR1cmtleSUyMHRyYXZlbHxlbnwxfHx8fDE3NjM3MTAzODV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    city: 'Dubai',
    country: {
      uz: 'BAA',
      ru: 'ОАЭ',
      en: 'UAE'
    },
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmV8ZW58MXx8fHwxNzYzNjcyNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    city: 'Jeddah',
    country: {
      uz: 'Saudiya Arabistoni',
      ru: 'Саудовская Аравия',
      en: 'Saudi Arabia'
    },
    image: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWRkYWglMjBzYXVkaSUyMGFyYWJpYXxlbnwxfHx8fDE3NjM3MTAzODd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    city: 'Moskva',
    country: {
      uz: 'Rossiya',
      ru: 'Россия',
      en: 'Russia'
    },
    image: 'https://images.unsplash.com/photo-1568011507675-1bf8abf804cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Njb3clMjBrcmVtbGlufGVufDF8fHx8MTc2MzcxMDM4Nnww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];


export function DestinationsSection({ language }: DestinationsSectionProps) {
  const t = translations[language];
  const [modalOpen, setModalOpen] = useState(false);
  const altTexts = {
    uz: (city: string, country: string) => `${city}, mashhur yo'nalish (${country})`,
    ru: (city: string, country: string) => `${city}, популярное направление (${country})`,
    en: (city: string, country: string) => `${city}, popular destination (${country})`,
  };

  return (
    <>
      <BookingModal open={modalOpen} onOpenChange={setModalOpen} language={language} />
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1756630645698-3f03d728393c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBjbG91ZHMlMjBza3klMjBhdmlhdGlvbnxlbnwxfHx8fDE3NjM3MTE1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
        speed={0.3}
        className="py-16 lg:py-24"
      >
        <section id="aviabiletlar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-center mb-12 text-gray-900" tabIndex={0} aria-label={t.title}>{t.title}</h2>
            </ScrollReveal>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((dest, idx) => (
                <ScrollReveal key={idx}>
                  <div
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                    onClick={() => setModalOpen(true)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={altTexts[language](dest.city, dest.country[language])}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        quality={80}
                        loading="lazy"
                        role="img"
                        aria-label={altTexts[language](dest.city, dest.country[language])}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-1 text-gray-900">{dest.city}</h3>
                      <p className="text-gray-900 mb-4">{dest.country[language]}</p>
                      <button
                        className="flex items-center gap-2 text-blue-700 hover:gap-3 transition-all"
                        onClick={() => setModalOpen(true)}
                        aria-label={t.cta}
                      >
                        {t.cta}
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>
    </>
  );
}