import BaseLayout from '@/layout/baseLayout';
import BtnButton from '@/components/btnButton';
import React from 'react';

export default function Contact() {
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
    </BaseLayout>
  );
}
