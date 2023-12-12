import React from 'react';

import Link from 'next/link';
import User from '@/components/home/user';

const TopBar = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-lg-between justify-content-end">
        <ul className="top-link-nav list-unstyled d-lg-flex align-items-center justify-content-end d-none">
          <li>
            <Link href={'/about'}>
              <span>Тухай</span>
            </Link>
          </li>
          <li>
            <Link href={'/helper'}>
              <span>Тусламж</span>
            </Link>
          </li>
          <li>
            <Link href={'/faq'}>
              <span>Асуулт хариулт</span>
            </Link>
          </li>
          <li>
            <Link href={'/policy'}>
              <span>Үйлчилгээний нөхцөл</span>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <span>Холбоо барих</span>
            </Link>
          </li>
        </ul>
        <ul className="top-link-nav list-unstyled d-flex align-items-center justify-content-end">
          <User />
          {/*<LanguageSelector />*/}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
