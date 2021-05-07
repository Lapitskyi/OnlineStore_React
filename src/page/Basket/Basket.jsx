import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';
import './scss/Basket.scss';
import BasketList from './component/BasketList';

const Basket = ({
  products,
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
            />

          </div>

        </div>

      </div>

    </div>
  );
};

Basket.defaultProps = {
  products: [{
    id: 1,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sem quis lectus lacinia pretium.'
      + ' Nulla vitae dui interdum, pharetra leo id, ornare massa.',
    price: '100',
    photo: 'https://via.placeholder.com/400x350',
    photoCollection: ['img1', 'img2', 'img3', 'img4'],
    size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
    description: {}
  }],
  deleteProduct: () => {
  },
  orderProduct: () => {
  },
  continueShopping: () => {
  },

};
Basket.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  deleteProduct: PropTypes.func,
  orderProduct: PropTypes.func,
  continueShopping: PropTypes.func,
};

export default Basket;
