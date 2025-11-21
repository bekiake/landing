// CSP header namunasi (Next.js custom server yoki Vercel uchun)
// Agar Next.js custom server ishlatsangiz, quyidagicha qo‘shing:

module.exports = function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' https://mc.yandex.ru https://www.googletagmanager.com",
      "img-src 'self' https://mc.yandex.ru data:",
      "style-src 'self' 'unsafe-inline'",
      "connect-src 'self' https://mc.yandex.ru https://www.google-analytics.com",
      "font-src 'self' data:",
      "frame-src https://mc.yandex.ru"
    ].join('; ')
  );
  next();
};
