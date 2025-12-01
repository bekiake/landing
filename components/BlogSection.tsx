import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollReveal } from './ScrollReveal';

interface BlogSectionProps {
  language: 'uz' | 'ru' | 'en';
  onPostClick?: (postId: string) => void;
}

const translations = {
  uz: {
    title: 'Blog va maslahatlar',
    subtitle: "Sayohat bo'yicha foydali maqolalar, maslahatlar va yangiliklar",
    readMore: 'Batafsil',
    minRead: 'daqiqa',
    blogs: [
      {
        id: 'travel-tips',
        title: 'Sayohat uchun 10 ta foydali maslahat',
        excerpt:
          "Sayohatingizni qulayroq va tejamkor qilish uchun eng muhim maslahatlar. Bilet olishdan tortib, bagaj yig'ishgacha bo'lgan barcha bosqichlar.",
        date: '15 Noyabr 2024',
        readTime: '5',
        category: 'Maslahatlar',
        image: '/travel-tips.jpg',
      },
      {
        id: 'cheap-flights',
        title: 'Aviabilet qanday qilib arzon narxda olish mumkin?',
        excerpt:
          "Aviabiletlarni tejamkor narxlarda sotib olish sirlari. Qaysi kunlarda va qaysi vaqtda biletlar arzonroq bo'ladi.",
        date: '10 Noyabr 2024',
        readTime: '7',
        category: 'Aviabiletlar',
        image: '/airticket.jpg',
      },
      {
        id: 'travel-budget',
        title: 'Sayohat byudjeti: Pulni qanday tejash mumkin',
        excerpt:
          "Sayohat davomida pulni tejash bo'yicha amaliy maslahatlar. Transport, turar joy va ovqatlanish xarajatlarini qisqartirish yo'llari.",
        date: '5 Noyabr 2024',
        readTime: '6',
        category: 'Moliya',
        image:
          'https://images.unsplash.com/photo-1650821414031-cf7291ce938c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjB0cmF2ZWwlMjBtb25leXxlbnwxfHx8fDE3NjQzMjEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'visa-guide',
        title: "Viza olish: To'liq qo'llanma",
        excerpt:
          'Vizani to\'g\'ri va tezkor rasmiylashtirish bo\'yicha batafsil ko\'rsatmalar. Kerakli hujjatlar va umumiy xatolar.',
        date: '1 Noyabr 2024',
        readTime: '8',
        category: 'Viza',
        image: '/visa-application-document.jpg',
      },
      {
        id: 'packing-tips',
        title: "Bagajni to'g'ri yig'ish: Nima olib borish kerak?",
        excerpt:
          'Har qanday sayohat uchun ideal bagaj yig\'ish bo\'yicha maslahatlar. Nima kerak, nima keraksiz va qanday qilib kompaktroq yig\'ish mumkin.',
        date: '28 Oktyabr 2024',
        readTime: '5',
        category: 'Maslahatlar',
        image:
          '/travel-concept-with-open-luggage.jpg',
      },
      {
        id: 'umrah-preparation',
        title: "Umra safari: To'liq tayyorgarlik",
        excerpt:
          'Muqaddas ziyorat uchun to\'liq tayyorgarlik ko\'rish bo\'yicha yo\'riqnoma. Ruhiy va jismoniy tayyorgarlik, kerakli narsalar ro\'yxati.',
        date: '25 Oktyabr 2024',
        readTime: '10',
        category: 'Umra',
        image: '/umra-safari-2.jpg'
      },
    ],
  },
  ru: {
    title: 'Блог и советы',
    subtitle: 'Полезные статьи, советы и новости о путешествиях',
    readMore: 'Подробнее',
    minRead: 'мин',
    blogs: [
      {
        id: 'travel-tips',
        title: '10 полезных советов для путешествий',
        excerpt:
          'Самые важные советы, чтобы сделать ваше путешествие комфортнее и экономичнее. Все этапы от покупки билета до упаковки багажа.',
        date: '15 Ноябрь 2024',
        readTime: '5',
        category: 'Советы',
        image:'/travel-tips.jpg',
      },
      {
        id: 'cheap-flights',
        title: 'Как купить авиабилеты дешево?',
        excerpt:
          'Секреты покупки авиабилетов по выгодным ценам. В какие дни и время билеты дешевле.',
        date: '10 Ноябрь 2024',
        readTime: '7',
        category: 'Авиабилеты',
        image:'/airticket.jpg',
      },
      {
        id: 'travel-budget',
        title: 'Бюджет путешествия: Как сэкономить деньги',
        excerpt:
          'Практические советы по экономии денег во время путешествия. Способы сократить расходы на транспорт, жилье и питание.',
        date: '5 Ноябрь 2024',
        readTime: '6',
        category: 'Финансы',
        image:
          'https://images.unsplash.com/photo-1650821414031-cf7291ce938c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjB0cmF2ZWwlMjBtb25leXxlbnwxfHx8fDE3NjQzMjEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'visa-guide',
        title: 'Получение визы: Полное руководство',
        excerpt:
          'Подробная инструкция по правильному и быстрому оформлению визы. Необходимые документы и частые ошибки.',
        date: '1 Ноябрь 2024',
        readTime: '8',
        category: 'Виза',
        image:
        '/visa-application-document.jpg'
      },
      {
        id: 'packing-tips',
        title: 'Правильная упаковка багажа: Что брать с собой?',
        excerpt:
          'Советы по идеальной упаковке багажа dla lyubogo puteshestviya. Chto nuzhno, chto lishnee i kak upakovat kompaktnee.',
        date: '28 Октябрь 2024',
        readTime: '5',
        category: 'Советы',
        image:
          '/travel-concept-with-open-luggage.jpg',
      },
      {
        id: 'umrah-preparation',
        title: 'Умра: Полная подготовка',
        excerpt:
          'Руководство по полной подготовке к священному паломничеству. Духовная и физическая подготовка, список необходимого.',
        date: '25 Октябрь 2024',
        readTime: '10',
        category: 'Умра',
        image:
          '/umra-safari-2.jpg',
      },
    ],
  },
  en: {
    title: 'Blog & Tips',
    subtitle: 'Useful articles, tips and travel news',
    readMore: 'Read More',
    minRead: 'min',
    blogs: [
      {
        id: 'travel-tips',
        title: '10 Useful Travel Tips',
        excerpt:
          'The most important tips to make your trip more comfortable and economical. All stages from buying a ticket to packing your luggage.',
        date: 'November 15, 2024',
        readTime: '5',
        category: 'Tips',
        image:
          '/travel-tips.jpg',
      },
      {
        id: 'cheap-flights',
        title: 'How to Buy Cheap Flight Tickets?',
        excerpt:
          'Secrets of buying airline tickets at affordable prices. On which days and times tickets are cheaper.',
        date: 'November 10, 2024',
        readTime: '7',
        category: 'Flights',
        image:
          '/airticket.jpg',
      },
      {
        id: 'travel-budget',
        title: 'Travel Budget: How to Save Money',
        excerpt:
          'Practical tips on saving money while traveling. Ways to reduce costs on transport, accommodation and food.',
        date: 'November 5, 2024',
        readTime: '6',
        category: 'Finance',
        image:
          'https://images.unsplash.com/photo-1650821414031-cf7291ce938c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjB0cmF2ZWwlMjBtb25leXxlbnwxfHx8fDE3NjQzMjEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'visa-guide',
        title: 'Getting a Visa: Complete Guide',
        excerpt:
          'Detailed instructions for proper and fast visa processing. Required documents and common mistakes.',
        date: 'November 1, 2024',
        readTime: '8',
        category: 'Visa',
        image:
          '/visa-application-document.jpg',
      },
      {
        id: 'packing-tips',
        title: 'Packing Luggage Right: What to Bring?',
        excerpt:
          'Tips for perfect luggage packing for any trip. What you need, what is unnecessary and how to pack more compactly.',
        date: 'October 28, 2024',
        readTime: '5',
        category: 'Tips',
        image:
          '/travel-concept-with-open-luggage.jpg',
      },
      {
        id: 'umrah-preparation',
        title: 'Umrah Journey: Complete Preparation',
        excerpt:
          'A guide to complete preparation for the sacred pilgrimage. Spiritual and physical preparation, list of essentials.',
        date: 'October 25, 2024',
        readTime: '10',
        category: 'Umrah',
        image:
          '/umra-safari-2.jpg',
      },
    ],
  },
} as const;

export function BlogSection({ language, onPostClick }: BlogSectionProps) {
  const t = translations[language as keyof typeof translations];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="mb-4">{t.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.blogs.map((blog) => (
            <ScrollReveal key={blog.id}>
              <article
                onClick={() => onPostClick?.(blog.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-700 px-3 py-1 rounded-full text-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime} {t.minRead}</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 text-blue-700 hover:gap-3 transition-all group/btn">
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
