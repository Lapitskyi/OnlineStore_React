import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import sprite from '../../../assets/spriteSvg/sprite.svg';
import '../scss/BasketList.scss';
import UseCounter from '../../../useHook/useCounter';

const BasketList = ({
  products,
  deleteProduct,
  orderProduct,
  continueShopping
}) => {
  return (
    <>
      <ul className="basket__list">
        {
          products.map((product) => (
            <li className="basket__list-item" key={product.id}>

              <div className="basket__list-header">
                <div className="basket__list-photo">
                  <img className="basket__list-img" src="https://via.placeholder.com/100" alt="product" />
                </div>
                <NavLink className="basket__list-link" to={`/goods/${product.id}`}>
                  <div className="basket__list-name">
                    {product.name ? product.name : 'name'}
                  </div>
                </NavLink>

                <button className="basket__list-btn btn" type="button" onClick={deleteProduct}>
                  <svg className="basket__list-icon ">
                    <use href={`${sprite}#remove`} />
                  </svg>
                </button>

              </div>

              <div className="basket__list-footer">
                <UseCounter />
                <div className="basket__list-total">100 UAH</div>
              </div>

            </li>

          ))
        }
      </ul>

      <div className="basket__footer">
        <button
          className="basket__footer-btn btn btn__size-medium "
          type="button"
          onClick={continueShopping}
        >
          Продолжить покупки
        </button>

        <div className="basket__footer-total">
          <div className="basket__footer-sum">
            600
            <span>UAH</span>
          </div>
          <button
            className="basket__footer-orderBtn btn btn__size-large btn--color"
            type="button"
            onClick={orderProduct}
          >
            Оформить заказ
          </button>
        </div>

      </div>
    </>
  );
};
BasketList.defaultProps = {
  products: [{
    id: 1,
    name: 'Name product',
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
BasketList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  deleteProduct:
  PropTypes.func,
  orderProduct:
  PropTypes.func,
  continueShopping:
  PropTypes.func,
};
export default BasketList;
