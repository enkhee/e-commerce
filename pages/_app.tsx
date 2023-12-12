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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />;
      </AuthProvider>
    </>
  );
}
