import React, { useEffect, useState } from 'react';
import ProductBox from '@/components/productBox';
import { getLimitProducts } from '@/utils/product';
import Loading from '@/components/loading';
type Product = any;
const NewProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<any>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getLimitProducts(10);
        setProducts(productsData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Failed to fetch products:', error);
      }
    }

    fetchProducts();
  }, []);

  const HandleClick = (str: string) => {
    console.log('clicked');
    console.log(str);
  };

  return (
    <>
      <h4 className="d-flex align-items-center justify-content-between">
        <strong>
          <i className="sk sk-caret-down" />
          <span>Шинэ</span>
        </strong>
        <a href="#" className="btn btn-more ml-auto">
          <span>Нийт шинэ</span>
          <i className="sk sk-arrow-right ml-1" />
        </a>
      </h4>
      <div className="row">
        {isLoading && <Loading />}
        {products &&
          products.map((item, i) => {
            return (
              <div className="col-20 col-lg-3 col-sm-4 col-6" key={i}>
                <ProductBox product={item} HandleClick={HandleClick} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NewProducts;
