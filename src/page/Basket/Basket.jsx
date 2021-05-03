import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';
import './scss/Basket.scss';
import BasketList from './BasketList';

const Basket = ({
  products,
  deleteProduct,
  orderProduct,
  continueShopping,
  count,
  setCount,
}) => {
  return (
    <div className="basket">
      <div className="container">
        <div className="basket__inner">
          <div className="basket__header">
            <h2 className="basket__title">Корзина</h2>
          </div>
          <div className="basket__content">
            {!products
            && (
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

            <BasketList
              products={products}
              deleteProduct={deleteProduct}
              orderProduct={orderProduct}
              continueShopping={continueShopping}
              count={count}
              setCount={setCount}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

Basket.defaultProps = {
  count: 0,
  products: [],
  deleteProduct: () => {
  },
  orderProduct: () => {
  },
  continueShopping: () => {
  },
  setCount: () => {
  },
};
Basket.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.object),
  deleteProduct: PropTypes.func,
  orderProduct: PropTypes.func,
  continueShopping: PropTypes.func,
};

export default Basket;
