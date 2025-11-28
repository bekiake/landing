import { Award, Clock, Users, DollarSign, Shield, Zap } from 'lucide-react';
import { ScrollReveal, ParallaxSection } from './ScrollReveal';

interface WhyChooseSectionProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    title: "Nega aviabiletni aynan airtickett.uz orqali sotib olish kerak?",
    features: [
      {
        title: 'Arzon narxlar va aksiyalar',
        description:
          "Turli aviakompaniyalar takliflarini bir joyda solishtirib, eng qulay va arzon aviabiletlarni topishingiz mumkin."
      },
      {
        title: 'Tez va qulay bron qilish',
        description:
          "Qidirish, tanlash va to'lov jarayoni bir necha oddiy qadamdan iborat. Keraksiz qo'ng'iroqlarsiz onlayn bron qiling."
      },
      {
        title: 'Tajribali turizm maslahatchilari',
        description:
          'Umra, haj va tur paketlar bo‘yicha savollaringizga tajribali mutaxassislar javob beradi.'
      },
      {
        title: 'Xavfsiz onlayn to‘lov',
        description:
          'UZCARD, HUMO, Visa va MasterCard orqali himoyalangan to‘lov tizimi orqali chipta xarid qilasiz.'
      },
      {
        title: '24/7 qo‘llab-quvvatlovchi xizmat',
        description:
          'Telegram, telefon va boshqa kanallar orqali kecha-kunduz aloqa qilishingiz mumkin.'
      },
      {
        title: 'Ishonchli hamkorlar va litsenziyalar',
        description: 'Rasmiy litsenziyaga ega ishonchli turizm hamkorlari bilan ishlaymiz.'
      }
    ]
  },
  ru: {
    title: 'Почему выбирают Airticket?',
    features: [
      {
        title: '6 лет опыта',
        description: 'Надежный партнер в сфере путешествий'
      },
      {
        title: 'Поддержка 24/7',
        description: 'Всегда на связи и готовы помочь'
      },
      {
        title: '3,000+ клиентов',
        description: 'Довольные клиенты, которые нам доверяют'
      },
      {
        title: 'Гарантия лучшей цены',
        description: 'Самые низкие цены на рынке'
      },
      {
        title: '100% надежно',
        description: 'Официальная лицензия и сертификаты'
      },
      {
        title: 'Быстрое бронирование',
        description: 'Бронь билета за несколько минут'
      }
    ]
  },
  en: {
    title: 'Why Choose Airticket?',
    features: [
      {
        title: '6 years experience',
        description: 'Reliable partner in travel industry'
      },
      {
        title: '24/7 support',
        description: 'Always available and ready to help'
      },
      {
        title: '3,000+ clients',
        description: 'Satisfied customers who trust us'
      },
      {
        title: 'Best price guarantee',
        description: 'Lowest prices on the market'
      },
      {
        title: '100% reliable',
        description: 'Official license and certificates'
      },
      {
        title: 'Fast booking',
        description: 'Book tickets in minutes'
      }
    ]
  }
};

const icons = [Award, Clock, Users, DollarSign, Shield, Zap];

export function WhyChooseSection({ language }: WhyChooseSectionProps) {
  const t = translations[language];

  return (
    <ParallaxSection 
      backgroundImage="https://images.unsplash.com/photo-1641242190206-a7ce7fafb5ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMGNpdHklMjBsaWdodHMlMjBhZXJpYWx8ZW58MXx8fHwxNzYzNzExNTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      speed={0.4}
      className="py-16 lg:py-24"
    >
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center mb-16 text-gray-900">{t.title}</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, idx) => {
              const Icon = icons[idx];
              return (
                <ScrollReveal key={idx}>
                  <div
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-900">{feature.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
}