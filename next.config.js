/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['uz', 'ru', 'en'],
    defaultLocale: 'uz',
    localeDetection: false,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
