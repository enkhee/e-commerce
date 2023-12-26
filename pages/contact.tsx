import BaseLayout from '@/layout/baseLayout';
import BtnButton from '@/components/btnButton';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();

  const { id } = router.query;

  const HandleClick = (text: string) => {
    console.log(text);
  };
  return (
    <BaseLayout>
      <BtnButton
        HandleClick={HandleClick}
        color="warning"
        title="contact"
        status={true}
      />
      <Link href={`/about`}>About</Link>
      <button onClick={() => router.push('/about')}>About</button>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => router.reload()}>Reload</button>
      <button onClick={() => router.replace('/about')}>Replace</button>
    </BaseLayout>
  );
}
