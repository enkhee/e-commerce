import Link from 'next/link';
import { useRouter } from 'next/router';
import { getLang } from '@/components/data';
import React, { useState } from 'react';

const LanguageSelector = () => {
  const router = useRouter();
  const { locale = 'mn', locales, asPath } = router;
  const regex = new RegExp(`^/(${locales && locales.join('|')})`);
  const LanguageMenus = getLang();
  const currentSelectedItem = locale
    ? LanguageMenus.find(o => o.value === locale)
    : LanguageMenus[0];
  const [selectedItem, setSelectedItem] = useState(currentSelectedItem);

  function renderName(name: any) {
    switch (name) {
      case 'mn':
        return 'Монгол';
      case 'cn':
        return 'China';
      default:
        return 'Монгол';
    }
  }

  function renderFlag(flag: any) {
    switch (flag) {
      case 'mn':
        return '/static/images/mng.png';
      case 'cn':
        return '/static/images/chn.png';
      default:
        return '/static/images/mng.png';
    }
  }

  function handleItemClick(e: any, value: any) {
    e.preventDefault();
    setSelectedItem(value);

    router.push(asPath, undefined, {
      locale: value.value,
    });
  }

  return (
    <li>
      <Link href="#">
        <img src={renderFlag(locale)} alt="" />
        <i className="sk sk-caret-down" />
      </Link>
      <ul className="lang-drop list-unstyled">
        {LanguageMenus?.map(option => {
          const isActive = option.id === selectedItem?.id;
          return (
            <li key={option.id}>
              <button
                className={`dropdown-item ${isActive ? 'active' : ''}`}
                type={'button'}
                onClick={event => handleItemClick(event, option)}
              >
                <span>{option.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default LanguageSelector;
