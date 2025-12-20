const blogSlugs = require('./data/blogSlugs.json');

const languages = ['uz', 'ru', 'en'];

const localizedBlogEntries = blogSlugs.flatMap(({ slug, lastmod }) =>
  languages.map((lng) => ({
    loc: `${lng === 'uz' ? '' : `/${lng}`}/blog/${slug}`,
    changefreq: 'monthly',
    priority: 0.8,
    lastmod,
  }))
);

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://airtickett.uz",
  generateRobotsTxt: false,         // robots.txt qo'lda boshqariladi (public/robots.txt)
  sitemapSize: 5000,                // katta saytlar uchun optimal
  changefreq: "weekly",             // Haftalik yangilanish (blog uchun optimal)
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

  additionalPaths: async () => localizedBlogEntries,
};
