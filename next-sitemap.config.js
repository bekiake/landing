/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://airtickett.uz",
  generateRobotsTxt: true,          // robots.txt avtomatik generatsiya
  sitemapSize: 5000,                // katta saytlar uchun optimal
  changefreq: "daily",              // Google uchun – har kuni yangilanadi
  priority: 0.7,                    // umumiy prioritet
  trailingSlash: false,             // URL'larda slash qo'shmaydi
  autoLastmod: true,                // lastmod sana avtomatik qo‘yiladi

  // Agar sizda ko‘p language bo‘lsa, hlm qo‘yiladi (i18n)
  alternateRefs: [
    {
      href: "https://airtickett.uz",
      hreflang: "uz",
    },
    {
        href: "https://airtickett.uz/en",
        hreflang: "en",
    },
    {
      href: "https://airtickett.uz/ru",
      hreflang: "ru",
    },
  ],

  // Ba'zi sahifalarni sitemapga qo‘shmaslik
  exclude: [
    "/404",
    "/500",
    "/admin/*",
  ],
};
