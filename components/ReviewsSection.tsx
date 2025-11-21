import { Star, User } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ReviewsSectionProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    title: 'Mijozlarimiz fikri',
    reviews: [
      {
        name: 'Akmal Rahimov',
        text: 'Juda professional xizmat! Istanbulga bilet bron qildim, hamma narsa aniq va tezkor bo\'ldi. Rahmat!',
        rating: 5
      },
      {
        name: 'Dilnoza Karimova',
        text: 'Umra safari uchun paket oldik. Barcha qulayliklar ta\'minlangan edi. Juda mamnunmiz!',
        rating: 5
      },
      {
        name: 'Bobur Usmonov',
        text: '24/7 yordam juda qulay. Tunda qo\'ng\'iroq qildim, darhol javob berishdi va yordam qilishdi.',
        rating: 5
      },
      {
        name: 'Feruza Tursunova',
        text: 'Eng yaxshi narxlar! Boshqa agentliklar bilan solishtirib ko\'rdim, Airticket eng arzoni.',
        rating: 5
      },
      {
        name: 'Sardor Azimov',
        text: 'Dubai safari juda yoqdi. Agentlik barcha savollarimga aniq javob berdi.',
        rating: 5
      },
      {
        name: 'Nigora Sharipova',
        text: 'Ishonchli va professional jamoa. Har doim Airticket orqali sayohat qilaman.',
        rating: 5
      }
    ]
  },
  ru: {
    title: 'Отзывы наших клиентов',
    reviews: [
      {
        name: 'Акмаль Рахимов',
        text: 'Очень профессиональное обслуживание! Забронировал билет в Стамбул, все четко и быстро. Спасибо!',
        rating: 5
      },
      {
        name: 'Дильноза Каримова',
        text: 'Взяли пакет на Умру. Все удобства были обеспечены. Очень довольны!',
        rating: 5
      },
      {
        name: 'Бобур Усманов',
        text: 'Поддержка 24/7 очень удобна. Звонил ночью, сразу ответили и помогли.',
        rating: 5
      },
      {
        name: 'Феруза Турсунова',
        text: 'Лучшие цены! Сравнивала с другими агентствами, Airticket самый дешевый.',
        rating: 5
      },
      {
        name: 'Сардор Азимов',
        text: 'Поездка в Дубай очень понравилась. Агентство четко ответило на все вопросы.',
        rating: 5
      },
      {
        name: 'Нигора Шарипова',
        text: 'Надежная и профессиональная команда. Всегда путешествую через Airticket.',
        rating: 5
      }
    ]
  },
  en: {
    title: 'Customer Reviews',
    reviews: [
      {
        name: 'Akmal Rahimov',
        text: 'Very professional service! Booked a ticket to Istanbul, everything was clear and fast. Thank you!',
        rating: 5
      },
      {
        name: 'Dilnoza Karimova',
        text: 'Got a package for Umrah. All amenities were provided. Very satisfied!',
        rating: 5
      },
      {
        name: 'Bobur Usmonov',
        text: '24/7 support is very convenient. Called at night, they answered immediately and helped.',
        rating: 5
      },
      {
        name: 'Feruza Tursunova',
        text: 'Best prices! Compared with other agencies, Airticket is the cheapest.',
        rating: 5
      },
      {
        name: 'Sardor Azimov',
        text: 'Really enjoyed the Dubai trip. The agency answered all my questions clearly.',
        rating: 5
      },
      {
        name: 'Nigora Sharipova',
        text: 'Reliable and professional team. I always travel through Airticket.',
        rating: 5
      }
    ]
  }
};

export function ReviewsSection({ language }: ReviewsSectionProps) {
  const t = translations[language];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center mb-12 text-gray-900">{t.title}</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.reviews.map((review, idx) => (
            <ScrollReveal key={idx}>
              <div
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">Google Reviews</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}