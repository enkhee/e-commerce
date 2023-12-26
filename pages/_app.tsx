import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-toastify/dist/ReactToastify.css';
import '@/public/static/css/silk-icons.css';
import '@/public/static/css/wrap.css';
import '@/public/static/css/custom.css';
import { AuthProvider } from '@/contexts/auth';
import { CartProvider } from '@/contexts/cart';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CartProvider>
        <AuthProvider>
          <DefaultSeo
            title="Next SEO Training"
            description="Next SEO 123"
            openGraph={{
              type: 'website',
              locale: 'mn_MN',
              url: 'https://www.commerce.mn/',
              siteName: 'e-commerce-1',
            }}
            twitter={{
              handle: '@enkhbayar',
              site: '@e-commerce',
              cardType: 'summary_large_image',
            }}
          />
          <Component {...pageProps} />;
        </AuthProvider>
      </CartProvider>
    </>
  );
};

export default appWithTranslation(App);
