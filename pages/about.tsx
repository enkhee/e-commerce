import BaseLayout from '@/layout/baseLayout';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic-ext'],
  display: 'swap',
});
export default function About() {
  return (
    <BaseLayout>
      <h1 className={roboto.className}>ABout</h1>
    </BaseLayout>
  );
}
