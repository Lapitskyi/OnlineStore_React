import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';
import './scss/Basket.scss';
import BasketList from './component/BasketList';

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
            { products !== 0 && goodsTotalPrice
              ? (
                <BasketList
                  products={products}
                  goodsTotalPrice={goodsTotalPrice}
                  deleteProduct={deleteProduct}
                  orderProduct={orderProduct}
                  continueShopping={continueShopping}
                />
              )
              : (
                <>
                  <svg className="basket__img ">
                    <use href={`${sprite}#cart`} />
                  </svg>
                  <div className="basket__text">
                    <p>
                      Корзина пустая
                    </p>
                  </div>
                </>
              )}

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
