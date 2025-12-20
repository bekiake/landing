/**
 * Blog SEO Metadata & Structured Data
 * Handles on-page SEO and JSON-LD schema generation
 */

type Language = 'uz' | 'ru' | 'en';

const CANONICAL_BASE = 'https://airtickett.uz';
const localeSegment: Record<Language, string> = {
  uz: '',
  ru: '/ru',
  en: '/en',
};

const buildCanonical = (language: Language, slug: string) =>
  `${CANONICAL_BASE}${localeSegment[language]}/blog/${slug}`;

export interface BlogSEO {
  title: string;
  metaDescription: string;
  canonical: string;
  slug: string;
}

export interface BlogPostSEOData {
  uz: BlogSEO;
  ru: BlogSEO;
  en: BlogSEO;
}

/**
 * SEO metadata for all blog posts
 */
export const blogPostsSEO: Record<string, BlogPostSEOData> = {
  'travel-tips': {
    uz: {
      title: 'Sayohat uchun 10 ta foydali maslahat | Airtickett',
      metaDescription:
        'Sayohatni samarali rejalash, bagaj yigʻish, xavfsizlik choralari va pulni tejash boʻyicha professional maslahatlar.',
      canonical: buildCanonical('uz', 'travel-tips'),
      slug: 'travel-tips',
    },
    ru: {
      title: '10 полезных советов для путешествий | Airtickett',
      metaDescription:
        'Как планировать поездку, собирать багаж, экономить деньги и обеспечить безопасность в путешествии.',
      canonical: buildCanonical('ru', 'travel-tips'),
      slug: 'travel-tips',
    },
    en: {
      title: '10 Useful Travel Tips | Airtickett',
      metaDescription:
        'Professional travel tips: planning, packing, safety, and budget management for stress-free trips.',
      canonical: buildCanonical('en', 'travel-tips'),
      slug: 'travel-tips',
    },
  },
  'cheap-flights': {
    uz: {
      title: 'Aviabiletlarni arzon narxda qanday olish mumkin | Airtickett',
      metaDescription:
        'Aviabilet xarid qilishda pulni tejashning professional usullari. Eng yaxshi narxlarni topish strategiyalari.',
      canonical: buildCanonical('uz', 'cheap-flights'),
      slug: 'cheap-flights',
    },
    ru: {
      title: 'Как купить авиабилеты дешево | Airtickett',
      metaDescription:
        'Проверенные способы экономии при покупке авиабилетов. Стратегии поиска лучших предложений.',
      canonical: buildCanonical('ru', 'cheap-flights'),
      slug: 'cheap-flights',
    },
    en: {
      title: 'How to Buy Cheap Flight Tickets | Airtickett',
      metaDescription:
        'Proven strategies to save money on airfare. Find the best flight deals with expert tips.',
      canonical: buildCanonical('en', 'cheap-flights'),
      slug: 'cheap-flights',
    },
  },
  'travel-budget': {
    uz: {
      title: 'Sayohat byudjeti: Pulni tejash usullari | Airtickett',
      metaDescription:
        'Transport, turar joy va ovqatlanishda pulni tejashning amaliy usullari. Tejamkor sayohat qilish.',
      canonical: buildCanonical('uz', 'travel-budget'),
      slug: 'travel-budget',
    },
    ru: {
      title: 'Бюджет путешествия: Как сэкономить деньги | Airtickett',
      metaDescription:
        'Практические способы экономии на транспорте, жилье, питании. Путешествуйте умнее и дешевле.',
      canonical: buildCanonical('ru', 'travel-budget'),
      slug: 'travel-budget',
    },
    en: {
      title: 'Travel Budget: How to Save Money | Airtickett',
      metaDescription:
        'Save money on transport, accommodation & food. Practical budget travel tips for smart travelers.',
      canonical: buildCanonical('en', 'travel-budget'),
      slug: 'travel-budget',
    },
  },
  'visa-guide': {
    uz: {
      title: "Viza olish: To'liq qo'llanma 2025 | Airtickett",
      metaDescription:
        "Viza olish jarayoni, kerakli hujjatlar, suhbatga tayyorgarlik. To'liq qo'llanma barcha bosqichlar bilan.",
      canonical: buildCanonical('uz', 'visa-guide'),
      slug: 'visa-guide',
    },
    ru: {
      title: 'Получение визы: Полное руководство 2025 | Airtickett',
      metaDescription:
        'Пошаговая инструкция по получению визы: документы, анкеты, собеседование и советы экспертов.',
      canonical: buildCanonical('ru', 'visa-guide'),
      slug: 'visa-guide',
    },
    en: {
      title: 'Getting a Visa: Complete Guide 2025 | Airtickett',
      metaDescription:
        'Step-by-step visa application guide: documents, forms, interview prep. Expert tips for approval.',
      canonical: buildCanonical('en', 'visa-guide'),
      slug: 'visa-guide',
    },
  },
  'packing-tips': {
    uz: {
      title: "Bagaj yig'ish: To'liq qo'llanma sayohat uchun | Airtickett",
      metaDescription:
        "Bagajni to'g'ri yig'ish, kapsul garderob va sayohat aksessuarlari. Profesionallar maslahatiga ko'ra.",
      canonical: buildCanonical('uz', 'packing-tips'),
      slug: 'packing-tips',
    },
    ru: {
      title: 'Как собрать багаж правильно: Полный гид | Airtickett',
      metaDescription:
        'Капсульный гардероб для поездки, что брать в ручную кладь, упаковочные лайфхаки от профи.',
      canonical: buildCanonical('ru', 'packing-tips'),
      slug: 'packing-tips',
    },
    en: {
      title: 'How to Pack Luggage Right: Complete Guide | Airtickett',
      metaDescription:
        'Capsule wardrobe tips, carry-on essentials, and packing hacks from travel pros.',
      canonical: buildCanonical('en', 'packing-tips'),
      slug: 'packing-tips',
    },
  },
  'umrah-preparation': {
    uz: {
      title: "Umra safariga tayyorgarlik: To'liq qo'llanma | Airtickett",
      metaDescription:
        'Umra safari uchun ruhiy va amaliy tayyorgarlik. Hujjatlar, sogliq, bagaj va ibodatlar boyicha maslahatlar.',
      canonical: buildCanonical('uz', 'umrah-preparation'),
      slug: 'umrah-preparation',
    },
    ru: {
      title: 'Подготовка к Умре: Полное руководство | Airtickett',
      metaDescription:
        'Духовная и практическая подготовка к Умре. Документы, здоровье, багаж и обряды паломничества.',
      canonical: buildCanonical('ru', 'umrah-preparation'),
      slug: 'umrah-preparation',
    },
    en: {
      title: 'Umrah Preparation: Complete Guide | Airtickett',
      metaDescription:
        'Spiritual and practical preparation for Umrah. Documents, health, luggage and pilgrimage rites.',
      canonical: buildCanonical('en', 'umrah-preparation'),
      slug: 'umrah-preparation',
    },
  },
};

/**
 * Generate BlogPosting JSON-LD schema
 */
export function generateBlogPostingSchema(
  postId: string,
  language: 'uz' | 'ru' | 'en',
  title: string,
  datePublished: string,
  dateModified: string,
  image: string,
  excerpt?: string
) {
  const seoData = blogPostsSEO[postId]?.[language];
  if (!seoData) return null;

  // Convert relative image URLs to absolute
  const absoluteImage = image.startsWith('http')
    ? image
    : `https://airtickett.uz${image}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt || seoData.metaDescription,
    image: {
      '@type': 'ImageObject',
      url: absoluteImage,
      width: 1080,
      height: 600,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'Airtickett',
      url: 'https://airtickett.uz',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Airtickett',
      url: 'https://airtickett.uz',
      logo: {
        '@type': 'ImageObject',
        url: 'https://airtickett.uz/logo.png',
        width: 200,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': seoData.canonical,
    },
    inLanguage: language === 'uz' ? 'uz-UZ' : language === 'ru' ? 'ru-RU' : 'en-US',
  };
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbSchema(
  postId: string,
  language: 'uz' | 'ru' | 'en',
  title: string
) {
  const blogListingUrl = `${CANONICAL_BASE}${localeSegment[language]}/blog`;
  const postUrl = `${blogListingUrl}/${postId}`;
  const blogLabels = {
    uz: 'Blog',
    ru: 'Блог',
    en: 'Blog',
  };

  const homeLabels = {
    uz: 'Bosh sahifa',
    ru: 'Главная',
    en: 'Home',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabels[language],
        item: 'https://airtickett.uz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: blogLabels[language],
        item: blogListingUrl,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: postUrl,
      },
    ],
  };
}

/**
 * Generate FAQPage JSON-LD schema (if applicable)
 */
export function generateFAQSchema(
  language: 'uz' | 'ru' | 'en',
  faqs: Array<{ question: string; answer: string }>
) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * FAQ data extracted from blog content
 */
export const blogFAQs: Record<string, Record<'uz' | 'ru' | 'en', Array<{ question: string; answer: string }>>> = {
  'cheap-flights': {
    uz: [
      {
        question: 'Aviabiletlarni qachon sotib olish eng yaxshi?',
        answer: 'Xalqaro parvozlar uchun 2-3 oy oldin, ichki parvozlar uchun 1-2 oy oldin qidirishni boshlang. Bu vaqt oraligʻida narxlar odatda eng past boʻladi.',
      },
      {
        question: 'Qaysi kunlarda aviabiletlar arzonroq?',
        answer: 'Seshanba va chorshanba kunlari koʻpincha eng arzon biletlar mavjud. Dam olish kunlari va dushanba kuni odatda qimmatroq.',
      },
      {
        question: 'Incognito rejimda qidirish kerakmi?',
        answer: 'Ha, brauzerda incognito/private rejimda qidiring. Saytlar sizning qidiruv tarixingizga qarab narxlarni oshirishi mumkin.',
      },
      {
        question: 'Bir yoʻnalishli biletlar yaxshiroqmi?',
        answer: 'Baʼzan ikkita bir yoʻnalishli bilet ikki tomonlama biletdan arzonroq boʻlishi mumkin, ayniqsa turli aviakompaniyalardan foydalanilganda.',
      },
    ],
    ru: [
      {
        question: 'Когда лучше покупать авиабилеты?',
        answer: 'Для международных рейсов начинайте поиск за 2-3 месяца, для внутренних — за 1-2 месяца. В этот период цены обычно самые низкие.',
      },
      {
        question: 'В какие дни авиабилеты дешевле?',
        answer: 'Вторник и среда часто предлагают самые дешевые билеты. Выходные и понедельник обычно дороже.',
      },
      {
        question: 'Нужно ли искать в режиме инкогнито?',
        answer: 'Да, ищите в приватном режиме браузера. Сайты могут повышать цену на основе вашей истории поиска.',
      },
      {
        question: 'Выгоднее ли билеты в один конец?',
        answer: 'Иногда два билета в один конец дешевле, чем туда-обратно, особенно с разными авиакомпаниями.',
      },
    ],
    en: [
      {
        question: 'When is the best time to buy flight tickets?',
        answer: 'For international flights start searching 2-3 months ahead, for domestic 1-2 months. Prices are usually lowest during this period.',
      },
      {
        question: 'Which days have cheaper flights?',
        answer: 'Tuesdays and Wednesdays often have the cheapest tickets. Weekends and Mondays tend to be more expensive.',
      },
      {
        question: 'Should I search in incognito mode?',
        answer: 'Yes, search in private/incognito mode. Some sites may increase prices based on your search history.',
      },
      {
        question: 'Are one-way tickets cheaper?',
        answer: 'Sometimes two one-way tickets can be cheaper than a round-trip, especially with different airlines.',
      },
    ],
  },
  'visa-guide': {
    uz: [
      {
        question: 'Pasport qancha muddatga amal qilishi kerak?',
        answer: 'Pasportingiz viza muddati tugagandan keyin ham kamida 6 oy amal qilishi kerak. Sahifalar boʻsh boʻlishi zarur.',
      },
      {
        question: 'Viza uchun qancha moliyaviy koʻrsatkich kerak?',
        answer: 'Koʻpchilik davlatlar bank koʻchirmasi soʻraydi — odatda soʻnggi 3–6 oy uchun hisobdan koʻchirma, yetarli qoldiq va tranzaksiyalar talab qilinadi.',
      },
      {
        question: 'Sugʻurta majburiymi?',
        answer: 'Koʻplab mamlakatlar kirish uchun sayohat sugʻurtasini talab qiladi, odatda tibbiy xarajatlar uchun minimal qamrov summasi 30,000 yevro boʻlishi kerak.',
      },
    ],
    ru: [
      {
        question: 'Сколько должен быть действителен паспорт?',
        answer: 'Паспорт должен быть действителен как минимум 6 месяцев после окончания поездки, а также иметь свободные страницы.',
      },
      {
        question: 'Какие финансовые гарантии нужны для визы?',
        answer: 'Часто требуются выписки из банка за 3–6 месяцев, наличие стабильного дохода и достаточного остатка на счёте.',
      },
      {
        question: 'Обязательна ли медицинская страховка?',
        answer: 'Для многих стран обязательна туристическая страховка с определённым покрытием — обычно от 30,000 евро.',
      },
    ],
    en: [
      {
        question: 'How long must the passport be valid?',
        answer: 'Your passport must be valid at least 6 months after your planned return date and have free pages.',
      },
      {
        question: 'What financial proof is needed for a visa?',
        answer: 'Most embassies require bank statements for the last 3–6 months showing steady income and sufficient balance.',
      },
      {
        question: 'Is travel insurance mandatory?',
        answer: 'Many countries require travel medical insurance with minimum coverage — typically 30,000 EUR.',
      },
    ],
  },
};
