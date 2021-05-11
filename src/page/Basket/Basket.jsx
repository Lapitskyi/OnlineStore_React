import React from 'react';
import PropTypes from 'prop-types';
import './scss/Basket.scss';
import BasketList from './component/BasketList';
import BasketEmpty from './component/BasketEmpty';

const Basket = ({
  goodsOrder: {
    products,
    goodsTotalPrice
  },
  deleteProduct,
  orderProduct,
  continueShopping,
}) => {
  return (
    <div className="basket">
      <div className="container">
        <div className="basket__inner">
          <div className="basket__header">
            <h2 className="basket__title">Корзина</h2>
          </div>
          <div className="basket__content">
            {products.length === 0
            && <BasketEmpty />}
        
            <BasketList
              products={products}
              goodsTotalPrice={goodsTotalPrice}
              deleteProduct={deleteProduct}
              orderProduct={orderProduct}
              continueShopping={continueShopping}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

Basket.defaultProps = {
  goodsOrder: {
    products: [],
    goodsTotalPrice: null
  },
  deleteProduct: () => {
  },
  orderProduct: () => {
  },
  continueShopping: () => {
  },

};
Basket.propTypes = {
  goodsOrder: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.object),
    goodsTotalPrice: PropTypes.number
  }),
  deleteProduct: PropTypes.func,
  orderProduct: PropTypes.func,
  continueShopping: PropTypes.func,
};

export default Basket;
