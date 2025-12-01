import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="uz">
      <Head>

        {/* ====== FAVICONS (Google uchun tartiblangan) ====== */}
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Primary browser color */}
        <meta name="theme-color" content="#1e40af" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://airtickett.uz/" />

        {/* ====== SOCIAL META TAGS ====== */}
        <meta property="og:locale" content="uz_UZ" />
        <meta property="og:site_name" content="Airtickett.uz – Turizm Agentligi" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ====== YANDEX VERIFICATION ====== */}
        <meta name="yandex-verification" content="94d2066f5ade0969" />

        {/* ====== PERFORMANCE PRECONNECTS ====== */}
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ====== GOOGLE ANALYTICS ====== */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VWY8BB37LK"></script>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied'
              });
              gtag('js', new Date());
              gtag('config', 'G-VWY8BB37LK', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* ====== YANDEX METRIKA ====== */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0];
                  k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(105449004, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:false,
                  trackSession:false
              });
            `,
          }}
        />

      </Head>

      <body>
        <Main />

        {/* Yandex noscript fallback */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/105449004"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>

        <NextScript />
      </body>
    </Html>
  );
}
