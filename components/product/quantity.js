import React, { useState, useEffect } from 'react';

const Quantity = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);
  const removeClick = () => {
    setQuantity(quantity - 1);
  };
  const addClick = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantity = e => {
    const val = Number(e.target.value);

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(Number(e.target.value));
    }
  };

  useEffect(() => {
    onChange(quantity);
  }, [quantity]);

  return (
    <div className="product-count d-flex align-items-start">
      <p className="title">Ширхэг:</p>
      <div className="d-flex align-items-center flex-column">
        <form
          action=""
          className="d-flex align-items-center justify-content-center"
        >
          <div className="input-group">
            <div className="input-group-prepend" id="button-addon3">
              <button
                className="btn btn-darker"
                type={`button`}
                onClick={removeClick}
                disabled={quantity <= 1}
              >
                <i className="sk sk-minus" />
              </button>
            </div>
            <input
              type="number"
              max={99}
              min={1}
              className="form-control new-form-control"
              placeholder=""
              value={quantity}
              onChange={handleQuantity}
            />

            <div className="input-group-append">
              <button
                className="btn btn-darker"
                type={'button'}
                onClick={addClick}
              >
                <i className="sk sk-plus" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Quantity;
