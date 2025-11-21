import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface FAQSectionProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    title: 'Ko\'p so\'raladigan savollar',
    faqs: [
      {
        question: 'Aviabilet qanday bron qilinadi?',
        answer: 'Bizga telefon orqali yoki WhatsApp/Telegram orqali bog\'lanasiz. Mutaxassislarimiz sizga yo\'nalish va sana bo\'yicha eng yaxshi variantlarni taklif qiladi. To\'lovni amalga oshirganingizdan so\'ng, elektron chipta sizning emailingizga yuboriladi.'
      },
      {
        question: 'Qaysi yo\'nalishlar mavjud?',
        answer: 'Biz dunyoning barcha yo\'nalishlari bo\'yicha xizmat ko\'rsatamiz. Eng mashhur yo\'nalishlar: Istanbul, Dubai, Jeddah, Moskva, Almaty, Sankt-Peterburg va boshqalar.'
      },
      {
        question: 'Umra paketlar nimalarni o\'z ichiga oladi?',
        answer: 'Umra paketlarimiz: parvoz (borish-qaytish), mehmonxona (2-3 kunlik Makkada, 2-3 kunlik Madinada), transfer xizmati, Umra vizasi, yo\'lboshchi xizmati va zaruriy sug\'urta. Premium va VIP paketlarda qo\'shimcha qulayliklar mavjud.'
      },
      {
        question: 'To\'lov qanday amalga oshiriladi?',
        answer: 'Naqd pul (ofisimizda), bank o\'tkazmasi yoki plastik karta orqali to\'lash mumkin. To\'liq to\'lov yoki bo\'lib-bo\'lib to\'lash imkoniyati mavjud.'
      },
      {
        question: 'Chipta bekor qilish mumkinmi?',
        answer: 'Ha, ammo bekor qilish shartlari aviakompaniya va chipta turига bog\'liq. Ba\'zi chipta turlari bekor qilinmaydi yoki jarimaga ega. Batafsil ma\'lumot uchun mutaxassislarimizga murojaat qiling.'
      },
      {
        question: 'Qo\'shimcha xizmatlar bormi?',
        answer: 'Ha, biz mehmonxona bron qilish, viza rasmiylashtirish, transfer, sayohat sug\'urtasi va boshqa qo\'shimcha xizmatlar taklif qilamiz.'
      }
    ]
  },
  ru: {
    title: 'Часто задаваемые вопросы',
    faqs: [
      {
        question: 'Как забронировать авиабилет?',
        answer: 'Свяжитесь с нами по телефону или через WhatsApp/Telegram. Наши специалисты предложат вам лучшие варианты по направлению и дате. После оплаты электронный билет будет отправлен на вашу почту.'
      },
      {
        question: 'Какие направления доступны?',
        answer: 'Мы обслуживаем все направления мира. Самые популярные: Стамбул, Дубай, Джидда, Москва, Алматы, Санкт-Петербург и другие.'
      },
      {
        question: 'Что включают в себя пакеты Умра?',
        answer: 'Наши пакеты Умра включают: перелет (туда-обратно), отель (2-3 дня в Мекке, 2-3 дня в Медине), трансфер, визу на Умру, услуги гида и необходимую страховку. В Premium и VIP пакетах есть дополнительные удобства.'
      },
      {
        question: 'Как производится оплата?',
        answer: 'Можно оплатить наличными (в нашем офисе), банковским переводом или пластиковой картой. Доступна полная оплата или оплата в рассрочку.'
      },
      {
        question: 'Можно ли отменить билет?',
        answer: 'Да, но условия отмены зависят от авиакомпании и типа билета. Некоторые типы билетов не подлежат отмене или имеют штраф. Для подробной информации обратитесь к нашим специалистам.'
      },
      {
        question: 'Есть ли дополнительные услуги?',
        answer: 'Да, мы предлагаем бронирование отелей, оформление виз, трансфер, туристическую страховку и другие дополнительные услуги.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How to book a ticket?',
        answer: 'Contact us by phone or via WhatsApp/Telegram. Our specialists will offer you the best options by destination and date. After payment, the e-ticket will be sent to your email.'
      },
      {
        question: 'What destinations are available?',
        answer: 'We serve all destinations worldwide. Most popular: Istanbul, Dubai, Jeddah, Moscow, Almaty, Saint Petersburg, and others.'
      },
      {
        question: 'What do Umrah packages include?',
        answer: 'Our Umrah packages include: flight (round trip), hotel (2-3 days in Mecca, 2-3 days in Medina), transfer service, Umrah visa, guide services, and necessary insurance. Premium and VIP packages have additional amenities.'
      },
      {
        question: 'How is payment made?',
        answer: 'You can pay in cash (at our office), by bank transfer, or by credit card. Full payment or installment payment is available.'
      },
      {
        question: 'Can I cancel a ticket?',
        answer: 'Yes, but cancellation terms depend on the airline and ticket type. Some ticket types are non-refundable or have a penalty. Contact our specialists for details.'
      },
      {
        question: 'Are there additional services?',
        answer: 'Yes, we offer hotel booking, visa processing, transfer, travel insurance, and other additional services.'
      }
    ]
  }
};

export function getFAQSchema(language: 'uz' | 'ru' | 'en') {
  const t = translations[language];
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function FAQSection({ language }: FAQSectionProps) {
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center mb-12 text-gray-900">{t.title}</h2>
        </ScrollReveal>

        <div className="space-y-4">
          {t.faqs.map((faq, idx) => (
            <ScrollReveal key={idx}>
              <div
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900 pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-5 text-gray-900">
                    {faq.answer}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}