import { ArrowRight, Calendar, Users, Home, Plane } from 'lucide-react';
import { useState } from 'react';
import { BookingModal } from './BookingModal';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollReveal, ParallaxSection } from './ScrollReveal';

interface UmrahSectionProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    title: 'Umra va haj safarlari uchun ishonchli hamroh',
    subtitle:
      "Umra va haj safarlari siz uchun juda mas'uliyatli qaror ekanini bilamiz. airtickett.uz sizga tajribali hamkorlar bilan birga qulay parvoz, mehmonxona va transferlarni o'z ichiga olgan paketlarni taklif etadi.",
    package1: {
      name: 'Standart Paket',
      duration: '10 kun',
      people: '20-30 kishi',
      hotel: '3 yulduzli mehmonxona',
      price: '2,500$ dan'
    },
    package2: {
      name: 'Premium Paket',
      duration: '14 kun',
      people: '15-20 kishi',
      hotel: '4 yulduzli mehmonxona',
      price: '3,800$ dan'
    },
    package3: {
      name: 'VIP Paket',
      duration: '14 kun',
      people: '10-15 kishi',
      hotel: '5 yulduzli mehmonxona',
      price: '5,500$ dan'
    },
    cta: 'Batafsil',
    features: {
      flight: 'Parvoz',
      hotel: 'Mehmonxona',
      people: 'Guruh',
      duration: 'Davomiyligi'
    }
  },
  ru: {
    title: 'Умра 2025 Пакеты',
    subtitle: 'Все удобства для священного путешествия',
    package1: {
      name: 'Стандарт',
      duration: '10 дней',
      people: '20-30 человек',
      hotel: '3* отель',
      price: 'От $2,500'
    },
    package2: {
      name: 'Премиум',
      duration: '14 дней',
      people: '15-20 человек',
      hotel: '4* отель',
      price: 'От $3,800'
    },
    package3: {
      name: 'VIP',
      duration: '14 дней',
      people: '10-15 человек',
      hotel: '5* отель',
      price: 'От $5,500'
    },
    cta: 'Подробнее',
    features: {
      flight: 'Перелет',
      hotel: 'Отель',
      people: 'Группа',
      duration: 'Длительность'
    }
  },
  en: {
    title: 'Umrah 2025 Packages',
    subtitle: 'All amenities for your sacred journey',
    package1: {
      name: 'Standard Package',
      duration: '10 days',
      people: '20-30 people',
      hotel: '3-star hotel',
      price: 'From $2,500'
    },
    package2: {
      name: 'Premium Package',
      duration: '14 days',
      people: '15-20 people',
      hotel: '4-star hotel',
      price: 'From $3,800'
    },
    package3: {
      name: 'VIP Package',
      duration: '14 days',
      people: '10-15 people',
      hotel: '5-star hotel',
      price: 'From $5,500'
    },
    cta: 'Details',
    features: {
      flight: 'Flight',
      hotel: 'Hotel',
      people: 'Group',
      duration: 'Duration'
    }
  }
};

export function UmrahSection({ language }: UmrahSectionProps) {
  const t = translations[language];
  const [modalOpen, setModalOpen] = useState(false);

  type PackageType = typeof t.package1 & { gradient: string; featured?: boolean };
  const packages: PackageType[] = [
    {
      ...t.package1,
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      ...t.package2,
      gradient: 'from-yellow-500 to-yellow-700',
      featured: true
    },
    {
      ...t.package3,
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <>
      <BookingModal open={modalOpen} onOpenChange={setModalOpen} language={language} />
      <section id="umra-turlari" className="py-16 lg:py-24 bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="mb-4 text-gray-900">{t.title}</h2>
              <p className="text-xl text-gray-600">{t.subtitle}</p>
            </div>
          </ScrollReveal>

          {/* Background Image Banner */}
          <ScrollReveal>
            <div className="relative h-64 rounded-3xl overflow-hidden mb-12">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1720549973451-018d3623b55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWFiYSUyMG1lY2NhfGVufDF8fHx8MTc2MzcxMDM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kaaba"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <ScrollReveal key={idx}>
                <div
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${
                    pkg.featured ? 'ring-2 ring-yellow-400 transform md:scale-105' : ''
                  }`}
                >
                  {/* Header with gradient */}
                  <div className={`bg-linear-to-r ${pkg.gradient} p-6 text-white`}>
                    <h3 className="text-white mb-2">{pkg.name}</h3>
                    <div className="text-3xl">{pkg.price}</div>
                  </div>

                  {/* Features */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span>{pkg.people}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Home className="w-5 h-5 text-blue-600" />
                      <span>{pkg.hotel}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Plane className="w-5 h-5 text-blue-600" />
                      <span>{t.features.flight}</span>
                    </div>

                    <button
                      className="w-full mt-6 bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                      onClick={() => setModalOpen(true)}
                    >
                      {t.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}