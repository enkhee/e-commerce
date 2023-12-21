import React from 'react';
import Numeral from 'numeral';
import Quantity from '@/components/product/quantity';
import { toast } from 'react-toastify';
import onChange = toast.onChange;

interface Props {
  product: any;
  addToCart: any;
  onChange: any;
  addToCartToOrder: any;
}
const ProductDetail: React.FC<Props> = ({
  product,
  addToCart,
  onChange,
  addToCartToOrder,
}) => {
  return (
    <>
      <div className="detail-info">
        <h1>{product && product?.title}</h1>
        <p className="price">
          <strong>{Numeral(product?.price).format('0,0')} ₮</strong>
        </p>
        <p>{product?.description}</p>
        <Quantity onChange={onChange} />
        <ul className="list-unstyled product-action d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center">
          <li className="buy-btn">
            <button
              type="button"
              className="btn btn-main flex-grow-1"
              onClick={addToCart}
            >
              <i className="sk sk-cart-add" />
              <span>Сагсанд нэмэх</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-second"
              onClick={addToCartToOrder}
            >
              Захиалах
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ProductDetail;
