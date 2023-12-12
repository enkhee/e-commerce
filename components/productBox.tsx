import React from 'react';
import Link from 'next/link';
import Numeral from 'numeral';
import { isBrowser } from 'react-device-detect';
import BtnButton from '@/components/btnButton';
import Image from 'next/image';

interface Props {
  product: any;
  HandleClick: (str: string) => void;
}

const ProductBox: React.FC<Props> = props => {
  const { product, HandleClick } = props;

  return (
    <div className="single-ad">
      <BtnButton
        HandleClick={HandleClick}
        color="primary"
        title="hello"
        status={false}
      />
      <div className="image">
        <Link href={`/product/${product.id}`} className="image-link">
          <div className="fit-image">
            <>
              <Image
                placeholder="blur"
                src={product?.image}
                alt={product?.title}
                width={246}
                height={246}
                blurDataURL={product?.image}
              />
            </>
          </div>
          <ul className="prod-info-wrap list-unstyled d-flex align-items-center justify-content-between">
            <li className="rank">
              <strong>{product?.rating?.rate}</strong>
              <i className="sk sk-star-solid" />

              <strong className="text">{product?.rating?.count}</strong>
            </li>
          </ul>
        </Link>
        {isBrowser && (
          <Link href={`/product/${product?.id}`} className="see-more">
            <strong>Дэлгэрэнгүй</strong>
            <i className="sk sk-chevron-right" />
          </Link>
        )}
      </div>
      <div className="detail">
        <Link href={`/product/${product.id}`}>
          <p className="title">{product.title}</p>
          <ul className="list-unstyled to-sell">
            <li className="price">{Numeral(product?.price).format('0,0')} ₮</li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default ProductBox;
