import { ScrollReveal } from './ScrollReveal';

interface StatsSectionProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    stats: [
      { number: '6', label: 'yil bozorda' },
      { number: '100+', label: 'sayohat yo\'nalishlari' },
      { number: '3,000+', label: 'doimiy mijozlar' },
      { number: '100+', label: 'hamkor aviakompaniyalar' },
      { number: '97%', label: 'qoniqgan mijozlar' }
    ]
  },
  ru: {
    stats: [
      { number: '6', label: 'лет на рынке' },
      { number: '100+', label: 'направлений для поездок' },
      { number: '3,000+', label: 'постоянных клиентов' },
      { number: '100+', label: 'авиакомпаний с которыми мы работаем' },
      { number: '97%', label: 'довольных клиентов' }
    ]
  },
  en: {
    stats: [
      { number: '6', label: 'years on market' },
      { number: '100+', label: 'travel destinations' },
      { number: '3,000+', label: 'regular customers' },
      { number: '100+', label: 'partner airlines' },
      { number: '97%', label: 'satisfied customers' }
    ]
  }
};

export function StatsSection({ language }: StatsSectionProps) {
  const t = translations[language];

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {t.stats.map((stat, idx) => (
            <ScrollReveal key={idx}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-600">
                    {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}