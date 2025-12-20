import '../globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700', '800'], variable: '--font-montserrat' });
const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600'], variable: '--font-open-sans' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${openSans.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);
