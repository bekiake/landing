/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['uz', 'ru', 'en'],
    defaultLocale: 'uz',
    localeDetection: false,
  },
  reactStrictMode: true,
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
