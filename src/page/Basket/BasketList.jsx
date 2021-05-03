import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';
import './scss/BasketList.scss';

const BasketList = ({
  products,
  deleteProduct,
  orderProduct,
  continueShopping,
  count,
  setCount,
}) => {
  return (
    <>
      <ul className="basketProduct__list">
        {
          products.map((product) => (
            <li className="basketProduct__list-item" key={product.id}>
              <div>
                <img className="basketProduct__list-img" src="https://via.placeholder.com/100" alt="product" />
                <NavLink className="basketProduct__list-link" to="/">
                  <div className="basketProduct__list-name">
                    {product.name ? product.name : 'name'}
                  </div>
                </NavLink>
              </div>

              <button className="basketProduct__list-btn btn" type="button" onClick={deleteProduct}>
                <svg className="basketProduct__list-icon ">
                  <use href={`${sprite}#remove`} />
                </svg>
              </button>

              <div className="basketProduct__list-counter">
                <button
                  className="basketProduct__list-counterBtn"
                  type="button"
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  -
                </button>
                <div className="basketProduct__list-couterTotal">{count}</div>
                <button
                  className="basketProduct__list-counterBtn"
                  type="button"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>

              <div className="basketProduct__list-total">100 UAH</div>

            </li>
          ))
}
      </ul>

      <div className="basketProduct__footer">

        <button
          className="basketProduct__footer-btn btn btn_size_medium"
          type="button"
          onClick={continueShopping}
        >
          Продолжить покупки
        </button>

        <div className="basketProduct__footer-total">
          <div className="basketProduct__footer-sum">
            600
            <span>UAH</span>
          </div>
          <button
            className="basketProduct__footer-orderBtn btn btn_size_large"
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
BasketList.propTypes = {
  count: PropTypes.number,
  setCount:
  PropTypes.func,
  products:
    PropTypes.arrayOf(PropTypes.object),
  deleteProduct:
  PropTypes.func,
  orderProduct:
  PropTypes.func,
  continueShopping:
  PropTypes.func,
};
export default BasketList;
