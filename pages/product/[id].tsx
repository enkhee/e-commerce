import React, { useState } from 'react';
import moment from 'moment';

import { ToastContainer, toast } from 'react-toastify';

import Link from 'next/link';

import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllProducts, getSingleProduct } from '@/utils/product';

import { getAddCart } from '@/utils/cart';
import { useAuthState } from '@/contexts/auth';
import { useRouter } from 'next/router';
import { useCartDispatch } from '@/contexts/cart';
import BaseLayout from '@/layout/baseLayout';
import ProductDetail from '@/components/product/productDetail';
import { NextSeo } from 'next-seo';

interface Props {
  product: any;
}
const Product: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { isAuthenticated, user } = useAuthState() || {};
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setCart } = useCartDispatch();
  const currentDate = moment().format('YYYY-MM-DD');
  const displayToastDone = (message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const displayToastError = (message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const addToCart = async () => {
    if (!isAuthenticated) {
      return router.push('/login');
    }
    let itemData = {};
    itemData = {
      userId: user?.id,
      date: currentDate,
      products: [{ productId: product?.id, quantity: Number(quantity) }],
    };

    setLoading(true);
    try {
      getAddCart(itemData)
        .then(async res => {
          setCart(res);
          displayToastDone('Сагсанд амжилттай нэмэгдлээ');
        })
        .catch(() => displayToastError('Сагсанд нэмэх амжилтгүй боллоо'));

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const quantityChange = (quantity: any) => {
    setQuantity(quantity);
  };

  const addToCartToOrder = async () => {
    if (!isAuthenticated) {
      return router.push('/login');
    }
    let itemData = {};
    itemData = {
      userId: user?.id,
      date: currentDate,
      products: [{ productId: product?.id, quantity: Number(quantity) }],
    };

    setLoading(true);
    try {
      getAddCart(itemData)
        .then(async res => {
          setCart(res);
          router.push('/order');
        })
        .catch(() => displayToastError('Сагсанд нэмэх амжилтгүй боллоо'));

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const renderStars = (rate: number) => {
    const totalStars = 5;
    const fullStars = Math.floor(rate);
    const halfStars = rate % 1 >= 0.5 ? 1 : 0;
    const emptyStars = totalStars - fullStars - halfStars;
    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <i key={`full_${index}`} className="sk sk-star-solid active" />
        ))}
        {halfStars === 1 && <i className="sk sk-star-half active" />}{' '}
        {[...Array(emptyStars)].map((_, index) => (
          <i key={`empty_${index}`} className="sk sk-star-solid" />
        ))}
      </>
    );
  };

  return (
    <BaseLayout>
      <NextSeo
        title="Manage SEO in NextJS with Next SEO"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
        canonical="www.example.com/next-seo-blog"
        openGraph={{
          type: 'article',
          article: {
            publishedTime: '2022-06-21T23:04:13Z',
            modifiedTime: '2022-01-21T18:04:43Z',
            authors: [
              'https://www.example.com/authors/@firstnameA-lastnameA',
              'https://www.example.com/authors/@firstnameB-lastnameB',
            ],
            tags: ['Tag A', 'Tag B', 'Tag C'],
          },
          site_name: 'Next Blog',
        }}
      />
      <div className="product-detail">
        {/*<ProductBanner />*/}
        <ToastContainer />
        <nav className="shop-nav">
          <div className="container">
            <a
              href={'/'}
              className="btn btn-main d-lg-none d-inline-flex align-items-center shop-nav-btn"
            >
              <i className="sk sk-nav mr-1" />
              <i className="sk sk-times mr-1" />
              <span>Нүүр</span>
            </a>
            <ul className="list-unstyled align-items-center d-none d-lg-flex shop-nav-list">
              <li>
                <Link href={`/`}>Нүүр</Link>
              </li>
              <li>
                <a href={`/category/${product?.category}`}>
                  {product?.category}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main-detail">
          <div className="container">
            <div className="row">
              <div className="col-80 col-lg-9">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="main-image">
                      <div className="big-image">
                        <img
                          className="img-fluid"
                          alt="bigImage"
                          src={product?.image}
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <ProductDetail
                      product={product}
                      addToCart={addToCart}
                      onChange={quantityChange}
                      addToCartToOrder={addToCartToOrder}
                    />
                  </div>
                </div>
              </div>
              <div className="col-20 col-lg-3">
                <div className="shop-detail color-this">
                  <Link href={`/store/`}>
                    <span
                      className="img11 flex-shrink-0"
                      style={{
                        backgroundImage: `url('${
                          product?.image
                            ? product?.image
                            : '/static/images/noimage.jpg'
                        }')`,
                      }}
                    />
                    <p className="name">
                      <strong>{product?.title}</strong>
                      <span className="rating d-flex align-items-center">
                        <span className="text">Үнэлгээ: </span>
                        <span className="stars d-flex align-items-center">
                          {renderStars(product?.rating?.rate)}
                        </span>
                      </span>
                      <small>Улаанбаатар, Монгол</small>
                      <span className="rank d-inline-flex align-items-center">
                        <strong>{product?.rating?.rate}</strong>
                        <i className="sk sk-star-solid" />
                        <strong className="text">
                          {product?.rating?.count}
                        </strong>
                      </span>
                    </p>
                  </Link>
                  <div className="more-stuff">
                    <ul className="shop-points list-unstyled d-flex align-items-center justify-content-between">
                      <li className="text-center">
                        <Link href={`/store/`}>
                          <span className="text">Үйлчилгээ</span>
                          <strong>222</strong>
                        </Link>
                      </li>
                      <li className="text-center">
                        <Link href={`/store/`}>
                          <span className="text">Тайлбар</span>
                          <strong>jkhjghj</strong>
                        </Link>
                      </li>
                      <li className="text-center">
                        <Link href={`/store/1`}>
                          <span className="text">Хүргэлт</span>
                          <strong>dfg</strong>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="list-unstyled shop-socials d-flex align-items-center flex-wrap">
                    <li>
                      <a href={`/`}>
                        <img src="/static/images/icons/wechat.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href={`/`}>
                        <img src="/static/images/icons/facebook.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href={`/`}>
                        <img src="/static/images/icons/whatsapp.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href={`/`}>
                        <img src="/static/images/icons/phone.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();

  // Ensure products is always an array
  const paths =
    products?.map((product: any) => ({
      params: { id: product.id.toString() },
    })) || [];

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params && (params.id as string);
  const product = await getSingleProduct(id);
  return { props: { product }, revalidate: 60 };
};

export default Product;
