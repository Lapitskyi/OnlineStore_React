import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';
import './scss/Basket.scss';
import BasketList from './component/BasketList';

const Basket = ({
  goodsOrder,
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
            {!goodsOrder
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
              goodsOrder={goodsOrder}
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
  goodsOrder: {},
  deleteProduct: () => {
  },
  orderProduct: () => {
  },
  continueShopping: () => {
  },

};
Basket.propTypes = {
  goodsOrder: PropTypes.objectOf(PropTypes.object),
  deleteProduct: PropTypes.func,
  orderProduct: PropTypes.func,
  continueShopping: PropTypes.func,
};

export default Basket;
