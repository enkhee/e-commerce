import React, { useState, useEffect } from 'react';
// import BaseLayout from '@/layouts/BaseLayout';
// import { getAllProducts } from '@/utils/product';
import Nested from '@/components/nested';
// import HomeSlider from '@/components/home/homeSlider';
import Rate from '@/components/home/rate';
import BaseLayout from '@/layout/baseLayout';
import HomeSlider from '@/components/homeSlider';
// import NewProducts from '@/components/home/newProducts';
// import UEexample from '@/components/hooks/uEexample';
// import UCexample from '@/components/hooks/uCexample';
// import UMexample from '@/components/hooks/uMexample';

export default function Home() {
  // const [products, setProducts] = useState(null);
  //
  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const productsData = await getAllProducts();
  //       setProducts(productsData);
  //     } catch (error) {
  //       console.error('Failed to fetch products:', error);
  //     }
  //   }
  //
  //   fetchProducts();
  // }, []);

  return (
    <BaseLayout>
      {/*<>*/}
      {/*<UEexample />*/}
      {/*  <UCexample />*/}
      {/*  <UMexample />*/}
      {/*</>*/}
      <nav>
        <div className="container">
          <div className="top-categories">
            <div className="row">
              <div className="col-20 col-lg-3">
                <Nested />
              </div>
              <HomeSlider />
              <Rate />
            </div>
          </div>
        </div>
      </nav>
      {/*<section className="top-ads-blocks">*/}
      {/*  <div className="container">*/}
      {/*    <NewProducts />*/}
      {/*  </div>*/}
      {/*</section>*/}
    </BaseLayout>
  );
}
