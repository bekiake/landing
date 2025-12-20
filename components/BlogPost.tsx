import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPostProps {
  language: 'uz' | 'ru' | 'en';
  postId: string;
  onBack: () => void;
}

const blogPosts = {
  'travel-tips': {
    uz: {
      title: 'Sayohat uchun 10 ta foydali maslahat',
      date: '15 Noyabr 2025',
      readTime: '5',
      category: 'Maslahatlar',
      image: '/travel-tips.jpg',
      content: `
        <p>Sayohat - bu hayotimizdagi eng yoqimli tajribalardan biri. Lekin yaxshi tayyorgarlik ko'rsatmasangiz, bu tajriba qiyinchiliklarga to'la bo'lishi mumkin. Mana sizga 10 ta muhim maslahat:</p>

        <h3>1. Oldindan rejalashtiring</h3>
        <p>Sayohatingizni kamida 2-3 oy oldin rejalashtirishni boshlang. Bu sizga eng yaxshi narxlarda aviabilet va mehmonxona topishga yordam beradi. Buking platformalarida narxlarni kuzatib turing va eng mos vaqtda sotib oling.</p>

        <h3>2. Hujjatlaringizni tekshiring</h3>
        <p>Pasportingiz amal qilish muddatini tekshiring - ko'pchilik davlatlar kamida 6 oy amal qilish muddati talab qiladi. Kerakli vizalarni oldindan rasmiylashtirib oling va barcha hujjatlarning nusxalarini tayyorlab qo'ying.</p>

        <h3>3. Sug'urta qiling</h3>
        <p>Sayohat sug'urtasi muhim! Bu sizni kutilmagan tibbiy xarajatlar, parvoz bekor qilinishi yoki bagaj yo'qolishi kabi vaziyatlardan himoya qiladi. Ishonchli sug'urta kompaniyasini tanlang.</p>

        <h3>4. Bagajni to'g'ri yig'ing</h3>
        <p>Faqat kerakli narsalarni olib boring. Og'ir yukni sudrab yurishdan ko'ra, joyda kerakli narsalarni sotib olish osonroq. Muhim dori-darmonlar va hujjatlarni qo'lda olib yuradigan sumkangizga solib qo'ying.</p>

        <h3>5. Mahalliy pulni tayyorlang</h3>
        <p>Har doim bir oz mahalliy valyutani naqd ko'rinishida olib yurishingiz kerak. Barcha joyda karta qabul qilinmasligi mumkin. Lekin ko'p naqd pul olib yurmang - bu xavfli.</p>

        <h3>6. Mahalliy til va madaniyatni o'rganing</h3>
        <p>Kamida asosiy iboralarni o'rganib oling: "salom", "rahmat", "uzr", "yordam bering". Bu mahalliy aholi bilan muloqot qilishni osonlashtiradi va sizga hurmat bildiradi.</p>

        <h3>7. Telefon va internet aloqasini ta'minlang</h3>
        <p>Roaming rejalarini yoki mahalliy SIM-karta sotib olish imkoniyatini oldindan o'rganing. Oflayn xaritalar (Google Maps) yuklab oling - bu internetga ulanish imkoni bo'lmaganda juda foydali.</p>

        <h3>8. Muhim ma'lumotlarni saqlang</h3>
        <p>Elchixona raqamlari, mehmonxona manzili, favqulodda hollar uchun telefon raqamlarini telefon va qog'ozga yozib qo'ying. Barcha muhim hujjatlarning raqamli nusxalarini bulutda saqlang.</p>

        <h3>9. Xavfsizlikni unutmang</h3>
        <p>Qimmatbaho buyumlarni e'tiborga tutmang. Pulni turli joylarda saqlang. Tunda notanish joylarga yolg'iz bormang. Mahalliy qonunlar va odatlarni hurmat qiling.</p>

        <h3>10. Sayohatdan zavq oling!</h3>
        <p>Rejadan chetga chiqishdan qo'rqmang. Ba'zan eng yaxshi xotiralar kutilmagan qadamlar natijasida paydo bo'ladi. Ochiq fikrli bo'ling va yangi tajribalarni qabul qiling!</p>

        <p><strong>Xulosa:</strong> Yaxshi rejalashtirilgan sayohat - bu muvaffaqiyatli sayohat. Bu maslahatlar sizga yo'l davomida vaqt va pulni tejashga, hamda eng muhimi - xotirjamlik va xavfsizlikni ta'minlashga yordam beradi.</p>
      `,
    },
    ru: {
      title: '10 полезных советов для путешествий',
      date: '15 Ноябрь 2025',
      readTime: '5',
      category: 'Советы',
      image:
        '/travel-tips.jpg',
      content: `
        <p>Путешествие - это одно из самых приятных переживаний в нашей жизни. Однако без хорошей подготовки оно может превратиться в череду трудностей. Вот 10 важных советов для вас:</p>

        <h3>1. Планируйте заранее</h3>
        <p>Начинайте планировать поездку минимум за 2-3 месяца. Это поможет вам найти авиабилеты и отели по лучшим ценам. Следите за ценами на букинг-платформах и покупайте в самое подходящее время.</p>

        <h3>2. Проверьте документы</h3>
        <p>Проверьте срок действия паспорта - большинство стран требуют минимум 6 месяцев действия. Оформите необходимые визы заранее и подготовьте копии всех документов.</p>

        <h3>3. Оформите страховку</h3>
        <p>Туристическая страховка важна! Она защитит вас от непредвиденных медицинских расходов, отмены рейса или потери багажа. Выберите надежную страховую компанию.</p>

        <h3>4. Упакуйте багаж правильно</h3>
        <p>Берите только необходимое. Проще купить нужные вещи на месте, чем тащить тяжелый багаж. Важные лекарства и документы положите в ручную кладь.</p>

        <h3>5. Подготовьте местную валюту</h3>
        <p>Всегда имейте при себе немного местной валюты наличными. Не везде принимают карты. Но не носите много наличных - это опасно.</p>

        <h3>6. Изучите местный язык и культуру</h3>
        <p>Выучите хотя бы основные фразы: "здравствуйте", "спасибо", "извините", "помогите". Это облегчит общение с местными жителями и покажет ваше уважение.</p>

        <h3>7. Обеспечьте связь</h3>
        <p>Заранее узнайте о роуминг-пакетах или возможности купить местную SIM-карту. Скачайте офлайн-карты (Google Maps) - они очень полезны без интернета.</p>

        <h3>8. Сохраните важную информацию</h3>
        <p>Запишите номера посольства, адрес отеля, экстренные телефоны в телефон и на бумагу. Храните цифровые копии важных документов в облаке.</p>

        <h3>9. Не забывайте о безопасности</h3>
        <p>Не привлекайте внимание к ценным вещам. Храните деньги в разных местах. Не ходите в незнакомые места в одиночку ночью. Уважайте местные законы и обычаи.</p>

        <h3>10. Наслаждайтесь путешествием!</h3>
        <p>Не бойтесь отклоняться от плана. Иногда лучшие воспоминания возникают в результате неожиданных шагов. Будьте открыты и принимайте новый опыт!</p>

        <p><strong>Итог:</strong> Хорошо спланированное путешествие - это успешное путешествие. Эти советы помогут вам сэкономить время и деньги в пути, а главное - обеспечить спокойствие и безопасность.</p>
      `,
    },
    en: {
      title: '10 Useful Travel Tips',
      date: 'November 15, 2025',
      readTime: '5',
      category: 'Tips',
      image:
        '/travel-tips.jpg',
      content: `
        <p>Travel is one of the most enjoyable experiences in our lives. However, without proper preparation, it can turn into a series of difficulties. Here are 10 important tips for you:</p>

        <h3>1. Plan Ahead</h3>
        <p>Start planning your trip at least 2-3 months in advance. This will help you find flights and hotels at the best prices. Monitor prices on booking platforms and buy at the most suitable time.</p>

        <h3>2. Check Your Documents</h3>
        <p>Check your passport expiration date - most countries require at least 6 months validity. Obtain necessary visas in advance and prepare copies of all documents.</p>

        <h3>3. Get Travel Insurance</h3>
        <p>Travel insurance is important! It protects you from unexpected medical expenses, flight cancellations, or lost luggage. Choose a reliable insurance company.</p>

        <h3>4. Pack Smart</h3>
        <p>Take only what you need. It's easier to buy necessary items on location than to drag heavy luggage. Put important medicines and documents in your carry-on bag.</p>

        <h3>5. Prepare Local Currency</h3>
        <p>Always have some local currency in cash. Not everywhere accepts cards. But don't carry too much cash - it's risky.</p>

        <h3>6. Learn Local Language and Culture</h3>
        <p>Learn at least basic phrases: "hello", "thank you", "sorry", "help". This will make communication with locals easier and show your respect.</p>

        <h3>7. Ensure Communication</h3>
        <p>Research roaming packages or the possibility of buying a local SIM card in advance. Download offline maps (Google Maps) - they're very useful without internet.</p>

        <h3>8. Save Important Information</h3>
        <p>Write down embassy numbers, hotel address, emergency phones in your phone and on paper. Store digital copies of important documents in the cloud.</p>

        <h3>9. Don't Forget Safety</h3>
        <p>Don't draw attention to valuables. Keep money in different places. Don't go to unfamiliar places alone at night. Respect local laws and customs.</p>

        <h3>10. Enjoy Your Trip!</h3>
        <p>Don't be afraid to deviate from the plan. Sometimes the best memories come from unexpected steps. Be open-minded and embrace new experiences!</p>

        <p><strong>Conclusion:</strong> A well-planned trip is a successful trip. These tips will help you save time and money on the road, and most importantly - ensure peace of mind and safety.</p>
      `,
    },
  },
  'cheap-flights': {
    uz: {
      title: 'Aviabilet qanday qilib arzon narxda olish mumkin?',
      date: '10 Noyabr 2025',
      readTime: '7',
      category: 'Aviabiletlar',
      image: '/airticket.jpg',
      content: `
        <p>Aviabiletlar sayohat xarajatlarining asosiy qismini tashkil qiladi. Lekin to'g'ri strategiya bilan siz sezilarli darajada tejash mumkin. Mana professional maslahatlar:</p>

        <h3>Qachon qidirish kerak?</h3>
        <p><strong>Oldindan xarid qiling:</strong> Xalqaro parvozlar uchun 2-3 oy oldin, ichki parvozlar uchun 1-2 oy oldin qidirishni boshlang. Bu vaqt oralig'ida narxlar odatda eng past bo'ladi.</p>

        <p><strong>Eng yaxshi kunlar:</strong> Seshanba va chorshanba kunlari ko'pincha eng arzon biletlar mavjud. Dam olish kunlari va dushanba kuni odatda qimmatroq.</p>

        <h3>Vaqt muhim</h3>
        <p><strong>Ertalab parvozlari:</strong> Juda erta yoki kech kechqurun parvozlar ko'pincha arzonroq. Garchi noqulay bo'lsa ham, bu sizga 30-50% gacha tejash imkonini beradi.</p>

        <p><strong>Mavsum:</strong> Past mavsum - eng yaxshi vaqt. Masalan, Yevropaga aprel-may yoki sentyabr-oktyabr oylarida borish yozgi oylardan ancha arzon.</p>

        <h3>Moslashuvchan bo'ling</h3>
        <p><strong>Sana moslashuvchanligi:</strong> Agar bir necha kun ilgari yoki keyinroq uchish mumkin bo'lsa, narxlar sezilarli farq qilishi mumkin. Ko'pchilik qidiruv tizimlari moslashuvchan sana variantlarini ko'rsatadi.</p>

        <p><strong>Aeroportlar:</strong> Yaqin atrofdagi boshqa aeroportlarni tekshiring. Ba'zan kichikroq shahar aeroportidan uchish ancha arzon.</p>

        <h3>Qidiruv strategiyalari</h3>
        <p><strong>Bir necha saytda qidiring:</strong> Google Flights, Skyscanner, Kayak kabi saytlardan foydalaning. Har bir platforma turli narxlarni ko'rsatishi mumkin.</p>

        <p><strong>Incognito rejimi:</strong> Brauzerda incognito/private rejimda qidiring. Saytlar sizning qidiruv tarixingizga qarab narxlarni oshirishi mumkin.</p>

        <h3>Fiksirlashdan oldin</h3>
        <p><strong>Narxlarni kuzating:</strong> Ko'pgina saytlar narx ogohlantirishlarini sozlash imkonini beradi. Narx pasayganda sizga xabar yuboriladi.</p>

        <p><strong>Aviakompaniya saytini tekshiring:</strong> Ba'zan aviakompaniyaning o'z saytida to'g'ridan-to'g'ri xarid qilish arzonroq. Plus, qo'shimcha bonuslar olish mumkin.</p>

        <h3>Qo'shimcha maslahatlar</h3>
        <p><strong>Bir yo'nalishli biletlar:</strong> Ba'zan ikkita bir yo'nalishli bilet ikki tomonlama biletdan arzonroq bo'lishi mumkin, ayniqsa turli aviakompaniyalardan foydalanilganda.</p>

        <p><strong>Transport variantlari:</strong> Uzoq masofalar uchun tranзит va qo'nishli reyslarni ko'rib chiqing - bu vaqt olishi mumkin, lekin ancha tejamkor.</p>

        <p><strong>Bonus dasturlar:</strong> Aviakompaniyalarning sodiqlik dasturlariga qo'shiling. Yig'ilgan millar keyinchalik bepul yoki arzon biletlarga aylanishi mumkin.</p>

        <p><strong>Xulosa:</strong> Arzon aviabilet topish - bu san'at va fan kombinatsiyasi. Sabr-toqat va moslashuvchanlik bilan siz eng yaxshi takliflarni topishingiz mumkin. Esda tuting - har doim eng arzon variant eng yaxshisi emas. Transport, comfort va vaqtni ham hisobga oling!</p>
      `,
    },
    ru: {
      title: 'Как купить авиабилеты дешево?',
      date: '10 Ноябрь 2025',
      readTime: '7',
      category: 'Авиабилеты',
      image: '/airticket.jpg',
      content: `
        <p>Авиабилеты составляют основную часть расходов на путешествие. Но с правильной стратегией вы можете существенно сэкономить. Вот профессиональные советы:</p>

        <h3>Когда искать?</h3>
        <p><strong>Покупайте заранее:</strong> Для международных рейсов начинайте поиск за 2-3 месяца, для внутренних - за 1-2 месяца. В этот период цены обычно самые низкие.</p>

        <p><strong>Лучшие дни:</strong> Вторник и среда часто предлагают самые дешевые билеты. Выходные и понедельник обычно дороже.</p>

        <h3>Время важно</h3>
        <p><strong>Утренние рейсы:</strong> Очень ранние или поздние вечерние рейсы часто дешевле. Хотя это неудобно, но может сэкономить 30-50%.</p>

        <p><strong>Сезон:</strong> Низкий сезон - лучшее время. Например, поездка в Европу в апреле-мае или сентябре-октябре гораздо дешевле летних месяцев.</p>

        <h3>Будьте гибкими</h3>
        <p><strong>Гибкость дат:</strong> Если можно улететь на несколько дней раньше или позже, цены могут существенно отличаться. Большинство поисковиков показывают гибкие варианты дат.</p>

        <p><strong>Аэропорты:</strong> Проверьте другие аэропорты поблизости. Иногда вылет из аэропорта меньшего города гораздо дешевле.</p>

        <h3>Стратегии поиска</h3>
        <p><strong>Ищите на нескольких сайтах:</strong> Используйте Google Flights, Skyscanner, Kayak. Каждая платформа может показывать разные цены.</p>

        <p><strong>Режим инкогнито:</strong> Ищите в приватном режиме. Сайты могут повышать цену на основе вашей истории поиска.</p>

        <h3>Перед бронированием</h3>
        <p><strong>Отслеживайте цены:</strong> Многие сайты позволяют настроить уведомления о снижении цены. Когда цена упадет, вы получите сообщение.</p>

        <p><strong>Проверьте сайт авиакомпании:</strong> Иногда напрямую на сайте авиакомпании дешевле, плюс возможны бонусы.</p>

        <h3>Дополнительные советы</h3>
        <p><strong>Билеты в один конец:</strong> Иногда два билета в один конец дешевле, чем туда-обратно, особенно с разными авиакомпаниями.</p>

        <p><strong>Пересадки:</strong> Рейсы с пересадками занимают больше времени, но часто стоят заметно дешевле.</p>

        <p><strong>Бонусные программы:</strong> Вступайте в программы лояльности авиакомпаний. Накопленные мили позже можно обменять на бесплатные или дешевые билеты.</p>

        <p><strong>Итог:</strong> Поиск дешевых авиабилетов - это сочетание искусства и анализа. С терпением и гибкостью вы найдете лучшие предложения. Помните: самый дешевый вариант не всегда лучший - учитывайте комфорт, время и пересадки.</p>
      `,
    },
    en: {
      title: 'How to Buy Cheap Flight Tickets?',
      date: 'November 10, 2025',
      readTime: '7',
      category: 'Flights',
      image:
        '/airticket.jpg',
      content: `
        <p>Airfare makes up the major part of travel expenses. But with the right strategy, you can save significantly. Here are some professional tips:</p>

        <h3>When to Search?</h3>
        <p><strong>Book in advance:</strong> For international flights start searching 2-3 months ahead, for domestic 1-2 months. Prices are usually lowest during this period.</p>

        <p><strong>Best days:</strong> Tuesdays and Wednesdays are often cheapest. Weekends and Mondays tend to be more expensive.</p>

        <h3>Timing Matters</h3>
        <p><strong>Early or late flights:</strong> Very early morning or late night flights are often cheaper. Although less convenient, they can save you 30-50%.</p>

        <p><strong>Season:</strong> Low season is the best time. For example, traveling to Europe in April-May or September-October is much cheaper than in summer.</p>

        <h3>Be Flexible</h3>
        <p><strong>Flexible dates:</strong> If you can depart a few days earlier or later, prices may differ a lot. Most search engines show flexible date options.</p>

        <p><strong>Airports:</strong> Check alternative nearby airports – sometimes flying from a smaller airport is much cheaper.</p>

        <h3>Search Strategies</h3>
        <p><strong>Use multiple sites:</strong> Compare Google Flights, Skyscanner, Kayak and others. Each may show different deals.</p>

        <p><strong>Incognito mode:</strong> Search in private mode. Some sites increase prices based on your search history.</p>

        <h3>Before Booking</h3>
        <p><strong>Track prices:</strong> Set up price alerts – you’ll get notified when fares drop.</p>

        <p><strong>Check airline website:</strong> Sometimes booking directly on the airline website is cheaper and gives extra perks.</p>

        <h3>Extra Tips</h3>
        <p><strong>One-way vs round-trip:</strong> Two one-way tickets can sometimes be cheaper than a return ticket, especially with different airlines.</p>

        <p><strong>Connections:</strong> Flights with layovers take longer but are often much cheaper than direct ones.</p>

        <p><strong>Loyalty programs:</strong> Join airline loyalty programs – collected miles can later become free or heavily discounted flights.</p>

        <p><strong>Conclusion:</strong> Finding cheap flights is a mix of art and data. With patience and flexibility, you can catch great deals. Remember, the cheapest option isn’t always the best – consider comfort, time and route as well.</p>
      `,
    },
  },
  'travel-budget': {
    uz: {
      title: 'Sayohat byudjeti: Pulni qanday tejash mumkin',
      date: '5 Noyabr 2025',
      readTime: '6',
      category: 'Moliya',
      image:
        'https://images.unsplash.com/photo-1650821414031-cf7291ce938c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjB0cmF2ZWwlMjBtb25leXxlbnwxfHx8fDE3NjQzMjEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>Sayohat qimmat bo'lishi shart emas! To'g'ri yondashuv bilan siz kam pul bilan ajoyib tajriba olishingiz mumkin. Mana pulni tejashning amaliy usullari:</p>

        <h3>Transport xarajatlari</h3>
        <p><strong>Jamoat transporti:</strong> Taksi o'rniga metro, avtobus yoki tramvaydan foydalaning. Bu nafaqat arzonroq, balki mahalliy hayotni yaqindan ko'rish imkonini ham beradi.</p>

        <p><strong>Piyoda yuring:</strong> Ko'pchilik shaharlar piyoda sayr qilish uchun juda qulay. Bu bepul va sog'lom!</p>

        <h3>Turar joy</h3>
        <p><strong>Xostellar va mehmonxonalar:</strong> Hashamatli mehmonxonalar o'rniga xostel, Airbnb yoki mahalliy mehmonxonalarni tanlang. Ular odatda 2-3 baravar arzonroq.</p>

        <p><strong>Markazdan tashqari:</strong> Shahar markazidan biroz uzoqroq joy tanlang - narxi past, transportda esa 10-15 daqiqa ko'proq vaqt ketadi xolos.</p>

        <h3>Ovqatlanish</h3>
        <p><strong>Mahalliy bozorlarda:</strong> Supermarket yoki mahalliy bozordan mahsulot sotib olib, o'zingiz tayyorlang. Bu restorandan bir necha baravar arzon.</p>

        <p><strong>Ko'cha taomlari:</strong> Ko'cha taomlari odatda mazali va arzon. Plus, bu mahalliy madaniyatni his qilishning ajoyib usuli.</p>

        <p><strong>Tushlik maxsus takliflari:</strong> Ko'p restoranlar tushlik vaqtida maxsus takliflar beradi - xuddi shu taom kechqurundan 30-40% arzonroq.</p>

        <h3>Diqqatga sazovor joylar</h3>
        <p><strong>Bepul kunlar:</strong> Ko'pgina muzeylar va diqqatga sazovor joylar haftaning ma'lum kunlarida bepul kirish taklif qiladi.</p>

        <p><strong>Shahar kartalari:</strong> Agar ko'p joyga tashrif buyurmoqchi bo'lsangiz, shahar turistik kartasini sotib oling - bu sezilarli tejamkorlik beradi.</p>

        <p><strong>Bepul sayohatlar:</strong> Ko'pgina shaharlarda bepul piyoda sayohatlar mavjud (odatda bahshish asosida).</p>

        <h3>Xarid qilish</h3>
        <p><strong>Suvenir do'konlari:</strong> Turistik joylardagi do'konlardan emas, mahalliy bozorlardan sovg'a oling - narxi 2-3 baravar arzonroq.</p>

        <p><strong>Kerakli narsalar:</strong> Faqat haqiqatan ham kerakli sovg'alarni oling. Keraksiz narsalar pulni isrof qiladi va bagajni og'irlashtiradi.</p>

        <h3>Umumiy maslahatlar</h3>
        <p><strong>Byudjet tuzing:</strong> Kunlik xarajatlar limitini belgilang va unga amal qiling. Mobil ilovalarda xarajatlarni kuzatib boring.</p>

        <p><strong>Naqd pul:</strong> Kunlik naqd limit belgilang va faqat shuncha olib yuring - bu ortiqcha xarajatlardan saqlaydi.</p>

        <p><strong>Mavsum:</strong> Past mavsumda sayohat qiling - har narsa arzonroq va kamroq olomon.</p>

        <p><strong>Xulosa:</strong> Tejamkor sayohat sifatsiz sayohat demak emas. Aqlli rejalashtiruv va mahalliy kabi yashash orqali siz kam pul sarflagan holda unutilmas xotiralar yaratishingiz mumkin!</p>
      `,
    },
    ru: {
      title: 'Бюджет путешествия: Как сэкономить деньги',
      date: '5 Ноябрь 2025',
      readTime: '6',
      category: 'Финансы',
      image:
        'https://images.unsplash.com/photo-1650821414031-cf7291ce938c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjB0cmF2ZWwlMjBtb25leXxlbnwxfHx8fDE3NjQzMjEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>Путешествие не обязательно должно быть дорогим! С правильным подходом вы можете получить отличный опыт за небольшие деньги. Вот практические способы экономии:</p>

        <h3>Транспортные расходы</h3>
        <p><strong>Общественный транспорт:</strong> Вместо такси используйте метро, автобусы или трамваи. Это дешевле и помогает узнать город.</p>

        <p><strong>Ходите пешком:</strong> Многие города удобны для пеших прогулок. Это бесплатно и полезно для здоровья!</p>

        <h3>Проживание</h3>
        <p><strong>Хостелы и гестхаусы:</strong> Вместо дорогих отелей выбирайте хостелы, Airbnb или местные гестхаусы. Они обычно в 2–3 раза дешевле.</p>

        <p><strong>Не в центре:</strong> Жилье чуть дальше от центра стоит меньше, а дорога на транспорте занимает всего 10–15 минут.</p>

        <h3>Питание</h3>
        <p><strong>Рынки и супермаркеты:</strong> Покупайте продукты и готовьте сами – это в несколько раз дешевле ресторанов.</p>

        <p><strong>Уличная еда:</strong> Часто вкусная, недорогая и помогает прочувствовать местную кухню.</p>

        <p><strong>Обеденные меню:</strong> Днем многие рестораны предлагают меню по сниженным ценам – те же блюда на 30–40% дешевле, чем вечером.</p>

        <h3>Достопримечательности</h3>
        <p><strong>Бесплатные дни:</strong> Узнайте, в какие дни музеи и парки открыты бесплатно или со скидкой.</p>

        <p><strong>Городские туристические карты:</strong> Они включают транспорт и вход в основные объекты со скидкой.</p>

        <p><strong>Free walking tours:</strong> Во многих городах есть бесплатные пешие экскурсии за чаевые.</p>

        <h3>Покупки</h3>
        <p><strong>Не покупайте в туристических зонах:</strong> На местных рынках сувениры в 2–3 раза дешевле.</p>

        <p><strong>Меньше лишнего:</strong> Покупайте только то, что действительно нужно – так вы экономите деньги и место в чемодане.</p>

        <h3>Общие советы</h3>
        <p><strong>Составьте бюджет:</strong> Определите дневной лимит и следите за расходами через приложения.</p>

        <p><strong>Лимит наличных:</strong> Носите с собой ограниченную сумму – это помогает не тратить лишнего.</p>

        <p><strong>Путешествуйте не в сезон:</strong> В низкий сезон цены ниже на все: жилье, билеты, экскурсии.</p>

        <p><strong>Итог:</strong> Бюджетное путешествие может быть таким же ярким, как и дорогое. Грамотное планирование и разумные решения помогут создать незабываемые впечатления с минимальными расходами.</p>
      `,
    },
    en: {
      title: 'Travel Budget: How to Save Money',
      date: 'November 5, 2025',
      readTime: '6',
      category: 'Finance',
      image:
        'https://images.unsplash.com/photo-1650821414031-cf7291ce938c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjB0cmF2ZWwlMjBtb25leXxlbnwxfHx8fDE3NjQzMjEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>Travel doesn’t have to be expensive. With smart planning, you can have an amazing trip on a reasonable budget. Here are practical ways to save money:</p>

        <h3>Transport</h3>
        <p><strong>Use public transport:</strong> Instead of taxis, take the metro, buses or trams – cheaper and more authentic.</p>

        <p><strong>Walk more:</strong> Many cities are very walkable. Walking is free and healthy.</p>

        <h3>Accommodation</h3>
        <p><strong>Hostels & guesthouses:</strong> Choose hostels or local guesthouses instead of luxury hotels to cut costs.</p>

        <p><strong>Stay outside the center:</strong> A place slightly away from the center is cheaper, and commuting usually takes only 10–15 extra minutes.</p>

        <h3>Food</h3>
        <p><strong>Cook yourself:</strong> Buy groceries at supermarkets or local markets and cook at your accommodation.</p>

        <p><strong>Street food:</strong> Often tasty, cheap and a great way to experience local cuisine.</p>

        <p><strong>Lunch deals:</strong> Many restaurants offer cheaper lunch menus compared to dinner prices.</p>

        <h3>Sightseeing</h3>
        <p><strong>Look for free days:</strong> Museums and attractions may have free or discounted days.</p>

        <p><strong>City cards:</strong> Tourist cards bundle transport and attractions with discounts.</p>

        <p><strong>Free walking tours:</strong> Join tip-based walking tours to learn the city on a budget.</p>

        <h3>Shopping</h3>
        <p><strong>Avoid tourist traps:</strong> Buy souvenirs at local markets, not at tourist hotspots.</p>

        <p><strong>Travel light:</strong> Only buy things you truly want – save both money and luggage space.</p>

        <h3>General tips</h3>
        <p><strong>Set a daily budget:</strong> Track your spending with apps and stick to a limit.</p>

        <p><strong>Limit cash:</strong> Carry only a set amount of cash per day to avoid overspending.</p>

        <p><strong>Off-season travel:</strong> Travelling in the shoulder or low season is cheaper and less crowded.</p>

        <p><strong>Conclusion:</strong> A budget trip can be just as memorable as an expensive one. With the right mindset and planning, you can enjoy rich experiences without draining your wallet.</p>
      `,
    },
  },
    'visa-guide': {
    uz: {
      title: "Viza olish: To'liq qo'llanma",
      date: '1 Noyabr 2025',
      readTime: '8',
      category: 'Viza',
      image: '/visa-application-document.jpg',
      content: `
        <p>Chet elga chiqish uchun viza olish ko‘pchilik uchun murakkab tuyulishi mumkin. Aslida esa hammasi tartibli yondashuv va to‘g‘ri hujjatlarga bog‘liq. Keling, bosqichma-bosqich ko‘rib chiqamiz.</p>

        <h3>1. Qaysi turdagi viza kerakligini aniqlang</h3>
        <p>Har bir davlatda turli viza turlari mavjud: <strong>turistik</strong>, <strong>ishchi</strong>, <strong>o‘qish</strong>, <strong>tranzit</strong> va hokazo. Sayohat maqsadingizga eng mos turini tanlang. Masalan, qisqa muddatli sayohat uchun odatda turistik yoki biznes viza kifoya.</p>

        <h3>2. Rasmiy talablardan boshlang</h3>
        <p>Elchixona yoki konsullikning rasmiy saytiga kiring va <strong>hujjatlar ro‘yxati</strong>, <strong>anketa shakli</strong>, <strong>konsullik yig‘imi</strong> va <strong>ko‘rib chiqish muddati</strong> bilan tanishing. Telegram kanallaridan olingan ma’lumotga emas, aynan rasmiy manbaga tayaning.</p>

        <h3>3. Pasport va fotosuratlar</h3>
        <p>Pasportingiz viza muddati tugagandan keyin ham kamida <strong>6 oy amal qilishi</strong> kerak. Sahifalar bo‘sh bo‘lishi zarur. Fotosuratlar esa odatda <strong>35x45 mm</strong> yoki o‘sha davlat talab qilgan formatda bo‘ladi.</p>

        <h3>4. Moliyaviy holatni tasdiqlash</h3>
        <p>Ko‘pchilik davlatlar sizning sayohat davrida o‘zingizni ta’minlashingizni ko‘rsatuvchi <strong>bank ko‘chirmasi</strong> so‘raydi. Odatda so‘nggi 3–6 oy uchun hisobdan ko‘chirma, yetarli qoldiq va tranzaksiyalar talab qilinadi.</p>

        <h3>5. Mehmonxona va aviabilet bronlari</h3>
        <p><strong>Mehmonxona bronlari</strong> (reservation) va <strong>aviabiletlar</strong> (yoki bron kodlari) ko‘pincha majburiy. Ular vizani tasdiqlash uchun asos bo‘lib xizmat qiladi. Biz siz uchun qaytarib bo‘ladigan tariflar yoki moslashuvchan variantlarni tanlashda yordam bera olamiz.</p>

        <h3>6. Sug‘urta polisi</h3>
        <p>Ko‘plab mamlakatlar kirish uchun <strong>sayohat sug‘urtasi</strong>ni talab qiladi. Unda tibbiy xarajatlar uchun minimal qamrov summasi (masalan, 30 000 yevro) ko‘rsatilgan bo‘lishi lozim.</p>

        <h3>7. Anketa to‘ldirish</h3>
        <p>Onlayn yoki qog‘oz shakldagi <strong>anketa</strong>ni to‘ldirishda xatolarga yo‘l qo‘ymang. Ma’lumotlar pasport va boshqa hujjatlardagi ma’lumotlarga aynan mos bo‘lishi kerak. Soxta ma’lumot berish viza rad etilishiga olib keladi.</p>

        <h3>8. Suhbat (intervyu)ga tayyorgarlik</h3>
        <p>Ba’zi elchixonalar suhbat o‘tkazadi. Sizdan sayohat maqsadi, ish joyi, daromad manbalari va qaytish rejasi haqida so‘ralishi mumkin. Javoblaringiz aniq, mantiqli va hujjatlaringizga mos bo‘lsin.</p>

        <h3>9. Eng ko‘p uchraydigan xatolar</h3>
        <ul>
          <li>Yetarli moliyaviy ko‘rsatkichlar bo‘lmasligi</li>
          <li>Soxta yoki chalkash ma’lumotlar</li>
          <li>Sayohat rejasining noaniqligi</li>
          <li>Oldingi vizalar va chegara holatlari bo‘yicha muammolar</li>
        </ul>

        <h3>10. Professional yordamdan foydalaning</h3>
        <p>Agar vaqt yoki tajriba yetishmasa, vizaga hujjat tayyorlashni mutaxassislarga topshirishingiz mumkin. Biz sizga anketani to‘g‘ri to‘ldirish, hujjatlarni tekshirish va uchrashuvga ro‘yxatdan o‘tkazishda yordam bera olamiz.</p>

        <p><strong>Xulosa:</strong> Viza olish – bu qo‘rqinchli jarayon emas, faqat tartib va diqqat talab qiladi. To‘g‘ri tayyorgarlik bilan siz bemalol viza olib, rejalashtirgan sayohatingizdan zavqlanishingiz mumkin.</p>
      `,
    },
    ru: {
      title: 'Получение визы: Полное руководство',
      date: '1 Ноябрь 2025',
      readTime: '8',
      category: 'Виза',
      image: "/visa-application-document.jpg",
      content: `
        <p>Оформление визы часто кажется сложным и запутанным процессом. На самом деле, если действовать по шагам и пользоваться официальной информацией, всё проходит гораздо спокойнее. Разберём основной алгоритм.</p>

        <h3>1. Определите тип визы</h3>
        <p>Сначала уточните, какая именно виза вам нужна: <strong>туристическая</strong>, <strong>деловая</strong>, <strong>учебная</strong>, <strong>транзитная</strong> и т.д. Неправильно выбранный тип визы может привести к отказу.</p>

        <h3>2. Изучите требования на официальном сайте</h3>
        <p>Перейдите на официальный сайт посольства или консульства нужной страны. Там указаны <strong>список документов</strong>, <strong>формы анкет</strong>, <strong>консульские сборы</strong> и <strong>сроки рассмотрения</strong>. Не полагайтесь только на форумы и слухи.</p>

        <h3>3. Паспорт и фотографии</h3>
        <p>Паспорт должен быть действителен как минимум <strong>6 месяцев после окончания поездки</strong>, а также иметь свободные страницы. Фотографии должны соответствовать формату и требованиям (часто 35x45 мм, светлый фон).</p>

        <h3>4. Финансовые гарантии</h3>
        <p>Часто требуется показать, что у вас достаточно средств на поездку: <strong>выписки из банка</strong> за 3–6 месяцев, наличие стабильного дохода, остатка на счёте.</p>

        <h3>5. Бронирование отеля и авиабилетов</h3>
        <p>Подготовьте <strong>подтверждения брони отеля</strong> и <strong>авиабилетов</strong> или хотя бы брони с кодами. Эти документы подтверждают реальность вашего маршрута.</p>

        <h3>6. Медицинская страховка</h3>
        <p>Для многих стран обязательна <strong>туристическая страховка</strong> с определённым покрытием (например, от 30 000 евро).</p>

        <h3>7. Заполнение анкеты</h3>
        <p>Заполняйте анкету внимательно и без противоречий. Все данные должны совпадать с паспортом и подтверждающими документами.</p>

        <h3>8. Подготовка к собеседованию</h3>
        <p>Если предполагается интервью, продумайте ответы на вопросы о цели поездки, месте работы, доходах, семье и планах возвращения.</p>

        <h3>9. Распространённые ошибки</h3>
        <ul>
          <li>Неполный пакет документов</li>
          <li>Скрытие важной информации (например, прошлых отказов)</li>
          <li>Несоответствие между анкетой и документами</li>
          <li>Слишком размытый маршрут поездки</li>
        </ul>

        <h3>10. Когда стоит обратиться к специалистам</h3>
        <p>Если вы впервые оформляете визу или у вас мало времени, можно доверить подготовку документов профессионалам.</p>

        <p><strong>Итог:</strong> Получение визы — понятный процесс, если соблюдать требования и быть внимательным к деталям. Грамотная подготовка повышает шансы на одобрение и экономит ваше время и нервы.</p>
      `,
    },
    en: {
      title: 'Getting a Visa: Complete Guide',
      date: 'November 1, 2025',
      readTime: '8',
      category: 'Visa',
      image: "/visa-application-document.jpg",
      content: `
        <p>Applying for a visa can feel stressful, but if you follow a clear process and rely on official information, it becomes much easier. Here’s a structured guide to help you.</p>

        <h3>1. Choose the right visa type</h3>
        <p>Decide whether you need a <strong>tourist</strong>, <strong>business</strong>, <strong>study</strong> or <strong>transit</strong> visa. Your purpose of travel must match the visa type.</p>

        <h3>2. Check official requirements</h3>
        <p>Go to the official embassy or consulate website. Check the <strong>document list</strong>, <strong>forms</strong>, <strong>fees</strong> and <strong>processing times</strong>.</p>

        <h3>3. Passport & photos</h3>
        <p>Make sure your passport is valid at least <strong>6 months after</strong> your planned return date and has free pages. Follow the photo requirements exactly.</p>

        <h3>4. Financial proof</h3>
        <p>Prepare <strong>bank statements</strong> for the last 3–6 months to show you can cover travel expenses.</p>

        <h3>5. Flight and hotel bookings</h3>
        <p>Most embassies ask for <strong>flight</strong> and <strong>accommodation</strong> bookings. Flexible or refundable tickets are safer for visa purposes.</p>

        <h3>6. Travel insurance</h3>
        <p>Get <strong>travel medical insurance</strong> with the minimum coverage required by the country (for example, 30,000 EUR).</p>

        <h3>7. Fill the form carefully</h3>
        <p>All information must match your passport and documents. Avoid mistakes and contradictions.</p>

        <h3>8. Prepare for the interview</h3>
        <p>Be ready to answer questions about your trip, job, income and ties to your home country.</p>

        <h3>9. Avoid common mistakes</h3>
        <ul>
          <li>Incomplete documents</li>
          <li>Hidden past refusals or overstays</li>
          <li>Unclear travel plans</li>
        </ul>

        <h3>10. When to ask for help</h3>
        <p>If you’re unsure, use professional visa assistance to check documents and forms.</p>

        <p><strong>Conclusion:</strong> A visa is much easier to get when you are well prepared and honest. Good preparation saves time and nerves.</p>
      `,
    },
  },
  'packing-tips': {
    uz: {
      title: "Bagajni to'g'ri yig'ish: Nima olib borish kerak?",
      date: '28 Oktyabr 2025',
      readTime: '5',
      category: 'Maslahatlar',
      image: '/travel-concept-with-open-luggage.jpg',
      content: `
        <p>Sayohatning yarmi — to‘g‘ri yig‘ilgan bagaj. Ortiqcha yuk sizni charchatadi, yetishmayotgan narsalar esa noqulay holatlarga olib keladi. Keling, ideal bagajni qanday yig‘ishni ko‘rib chiqamiz.</p>

        <h3>1. Oldindan ro‘yxat tuzing</h3>
        <p>Hech qachon “yig‘ayotganda o‘ylab topaman” uslubida ish tutmang. <strong>Ro‘yxat</strong> tuzing: kiyimlar, gigiyena vositalari, texnika, hujjatlar, dori-darmonlar va hokazo.</p>

        <h3>2. Kapsul garderob</h3>
        <p>Bir-biriga mos rangdagi kiyimlarni tanlang. 5–6 ta asosiy elementdan turli kombinatsiyalar yasash mumkin.</p>

        <h3>3. Ruchnoy va asosiy bagajni ajrating</h3>
        <p>Pasport, pul, telefon, zaryadlovchi, dori-darmon va bir juft kiyimni albatta <strong>qo‘l yuki</strong>ga soling.</p>

        <h3>4. Gigiyena va kosmetika</h3>
        <p>Katta shampunlar o‘rniga sayohat formatidagi kichik idishlardan foydalaning. Suyuqliklar uchun 100 ml qoidasini unutmang.</p>

        <h3>5. Oyoq kiyimlari</h3>
        <p>Eng ko‘pi bilan 2–3 juft oling: qulay kundalik, sport va kerak bo‘lsa, tantanali poyabzal.</p>

        <p><strong>Xulosa:</strong> To‘g‘ri yig‘ilgan bagaj — yengil va faqat kerakli narsalardan iborat bo‘ladi.</p>
      `,
    },
    ru: {
      title: 'Правильная упаковка багажа: Что брать с собой?',
      date: '28 Октябрь 2025',
      readTime: '5',
      category: 'Советы',
      image:
        '/travel-concept-with-open-luggage.jpg',
      content: `
        <p>Чемодан — ваш маленький дом в путешествии. Если собрать его правильно, поездка проходит намного спокойнее.</p>

        <h3>1. Список вещей</h3>
        <p>Составьте список по категориям: одежда, обувь, гигиена, техника, документы, лекарства.</p>

        <h3>2. Капсульный гардероб</h3>
        <p>Берите вещи, которые легко сочетать между собой. Нейтральные цвета и базовые модели.</p>

        <h3>3. Что в ручную кладь</h3>
        <p>Паспорт, деньги, техника, лекарства и смена одежды — только в ручную кладь.</p>

        <h3>4. Косметика и жидкости</h3>
        <p>Перелейте средства в дорожные флаконы. Соблюдайте ограничения по объёму жидкостей.</p>

        <h3>5. Обувь</h3>
        <p>2–3 пары достаточно: повседневная, лёгкая и при необходимости более нарядная.</p>

        <p><strong>Итог:</strong> Лёгкий и продуманный чемодан — залог комфортного путешествия.</p>
      `,
    },
    en: {
      title: 'Packing Luggage Right: What to Bring?',
      date: 'October 28, 2025',
      readTime: '5',
      category: 'Tips',
      image:
        '/travel-concept-with-open-luggage.jpg',
      content: `
        <p>Packing well saves time, money and nerves. A smart suitcase means an easier trip.</p>

        <h3>1. Make a checklist</h3>
        <p>Group items by category: clothes, shoes, toiletries, electronics, documents, medicine.</p>

        <h3>2. Capsule wardrobe</h3>
        <p>Choose clothes that mix and match easily in neutral colors.</p>

        <h3>3. Separate carry-on and checked bag</h3>
        <p>Keep passport, money, phone, chargers, meds and a change of clothes in your carry-on.</p>

        <h3>4. Toiletries</h3>
        <p>Use travel-size containers and respect liquid limits for hand luggage.</p>

        <h3>5. Shoes</h3>
        <p>Limit yourself to 2–3 pairs: everyday, light sneakers and optionally a dressy pair.</p>

        <p><strong>Conclusion:</strong> The lighter and more organized your luggage, the more you enjoy the journey.</p>
      `,
    },
  },
  'umrah-preparation': {
    uz: {
      title: "Umra safari: To'liq tayyorgarlik",
      date: '25 Oktyabr 2025',
      readTime: '10',
      category: 'Umra',
      image:
      '/umra-safari-2.jpg',
      content: `
        <p>Umra — har bir musulmon orzu qiladigan muborak safari. Bu nafaqat ruhiy, balki jismoniy va tashkiliy tayyorgarlikni ham talab qiladi.</p>

        <h3>1. Niyat va ruhiy tayyorgarlik</h3>
        <p>Niyatni ixlos bilan qiling, duo va istig‘forni ko‘paytiring.</p>

        <h3>2. Hujjatlar</h3>
        <p>Pasport, Umra vizasi, aviabiletlar va mehmonxona bronlarini alohida papkada saqlang.</p>

        <h3>3. Sog‘liq</h3>
        <p>Shifokorga ko‘rinib, zarur dori-darmonlarni o‘zingiz bilan oling.</p>

        <h3>4. Nimalarni olib borish kerak</h3>
        <ul>
          <li>Ihram (erkaklar uchun)</li>
          <li>Yengil va yopiq kiyimlar</li>
          <li>Qulay oyoq kiyim</li>
          <li>Gigiyena vositalari, nam salfetkalar, antiseptik</li>
        </ul>

        <h3>5. Umra amallari</h3>
        <p>Ihramga kirish, tavaf, sa’yi va sochni qisqartirish — asosiy bosqichlar hisoblanadi.</p>

        <p><strong>Xulosa:</strong> Yaxshi tayyorgarlik ruhiy xotirjamlik beradi va ibodatga ko‘proq e’tibor qaratish imkonini beradi.</p>
      `,
    },
    ru: {
      title: 'Умра: подготовка к паломничеству',
      date: '25 Октябрь 2025',
      readTime: '10',
      category: 'Умра',
      image:
        '/umra-safari-2.jpg',
      content: `
        <p>Умра — важное духовное путешествие, которое требует и внутренней, и практической подготовки.</p>

        <h3>1. Намерение</h3>
        <p>Очистите ният, настройтесь на поклонение, чтение Корана и дуа.</p>

        <h3>2. Документы</h3>
        <p>Паспорт, виза, билеты и брони отеля должны быть под рукой и в копиях.</p>

        <h3>3. Здоровье</h3>
        <p>Посетите врача, возьмите необходимые лекарства и базовую аптечку.</p>

        <h3>4. Что взять с собой</h3>
        <ul>
          <li>Ихрам (для мужчин)</li>
          <li>Свободную лёгкую одежду</li>
          <li>Удобную обувь для длительной ходьбы</li>
          <li>Средства личной гигиены</li>
        </ul>

        <h3>5. Основные обряды</h3>
        <p>Вступление в ихрам, таваф, са’й и сбривание/укорачивание волос — ключевые этапы Умры.</p>

        <p><strong>Итог:</strong> Хорошая подготовка помогает избежать лишнего стресса и сосредоточиться на духовной стороне паломничества.</p>
      `,
    },
    en: {
      title: 'Umrah Journey: Preparation Guide',
      date: 'October 25, 2025',
      readTime: '10',
      category: 'Umrah',
      image:
        '/umra-safari-2.jpg',
      content: `
        <p>Umrah is a special spiritual journey that benefits greatly from good preparation.</p>

        <h3>1. Intention</h3>
        <p>Set a sincere intention and focus on worship, Qur’an and dua.</p>

        <h3>2. Documents</h3>
        <p>Keep your passport, Umrah visa, flight tickets and hotel confirmations together and backed up.</p>

        <h3>3. Health</h3>
        <p>Consult your doctor, bring your regular medication and a simple first-aid kit.</p>

        <h3>4. What to pack</h3>
        <ul>
          <li>Ihram (for men)</li>
          <li>Light, modest clothing</li>
          <li>Comfortable walking footwear</li>
          <li>Basic hygiene items</li>
        </ul>

        <h3>5. Main rites</h3>
        <p>Entering ihram, tawaf, sa’i and cutting/shaving hair are the main steps.</p>

        <p><strong>Conclusion:</strong> The better you prepare in advance, the more you can focus on the spiritual benefit of Umrah.</p>
      `,
    },
  },
} as const;

const translations = {
  uz: {
    back: 'Orqaga',
    share: 'Ulashish',
    minRead: "daqiqa o'qish",
    relatedPosts: "O'xshash maqolalar",
    readMore: 'Batafsil',
    shareCopied: 'Havola nusxa olindi',
    ctaTitle: 'Sayohat rejalashtirmoqchimisiz?',
    ctaSubtitle: 'Biz sizga eng yaxshi aviabiletlar va Umra turlarini topishda yordam beramiz',
    callButton: "Qo'ng'iroq qilish",
    telegramButton: 'Telegram',
  },
  ru: {
    back: 'Назад',
    share: 'Поделиться',
    minRead: 'мин чтения',
    relatedPosts: 'Похожие статьи',
    readMore: 'Подробнее',
    shareCopied: 'Ссылка скопирована',
    ctaTitle: 'Хотите спланировать путешествие?',
    ctaSubtitle: 'Поможем подобрать лучшие авиабилеты и пакеты на Умру.',
    callButton: 'Позвонить',
    telegramButton: 'Телеграм',
  },
  en: {
    back: 'Back',
    share: 'Share',
    minRead: 'min read',
    relatedPosts: 'Related Posts',
    readMore: 'Read More',
    shareCopied: 'Link copied',
    ctaTitle: 'Ready to plan your trip?',
    ctaSubtitle: 'We help you find the best flights and Umrah packages.',
    callButton: 'Call us',
    telegramButton: 'Telegram',
  },
} as const;

export function BlogPost({ language, postId, onBack }: BlogPostProps) {
  const t = translations[language as keyof typeof translations];
  const post = (blogPosts as any)[postId]?.[language];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Maqola topilmadi</h2>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.back}
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (typeof window === 'undefined') return;
    const url = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.title,
          url,
        })
        .catch(() => {});
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        alert(t.shareCopied);
      });
    }
  };

  return (
    <article className="bg-white">
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.back}
          </button>
        </div>
      </div>
      <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          width={1080}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute top-6 left-4 md:left-8">
          <span className="bg-white/90 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>
                {post.readTime} {t.minRead}
              </span>
            </div>
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-colors ml-auto"
            >
              <Share2 className="w-5 h-5" />
              <span>{t.share}</span>
            </button>
          </div>
        </div>
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-700 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-12 p-8 bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl text-white text-center">
          <h3 className="mb-4 text-white">{t.ctaTitle}</h3>
          <p className="mb-6 text-blue-100">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+998977772502"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full hover:bg-blue-50 transition-all"
            >
              {t.callButton}
            </a>
            <a
              href="https://t.me/apple3650"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-400 transition-all"
            >
              {t.telegramButton}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
