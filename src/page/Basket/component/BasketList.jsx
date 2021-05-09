import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import sprite from '../../../assets/spriteSvg/sprite.svg';
import '../scss/BasketList.scss';
import UseCounter from '../../../useHook/useCounter';

const BasketList = ({
  goodsOrder: {
    products,
    goodsTotalPrice
  },
  deleteProduct,
  orderProduct,
  continueShopping
}) => {
  console.log(products);
  return (
    <>
      <ul className="basket__list">
        {
          products.map((productItem) => (
            <li className="basket__list-item" key={productItem.product.id}>

              <div className="basket__list-header">
                <div className="basket__list-photo">
                  <img className="basket__list-img" src="https://via.placeholder.com/100" alt="product" />
                </div>
                <NavLink className="basket__list-link" to={`/goods/${productItem.product.id}`}>
                  <div className="basket__list-name">
                    {productItem.product.name ? productItem.product.name : 'name'}
                  </div>
                </NavLink>

                <button
                  className="basket__list-btn btn"
                  type="button"
                  onClick={() => deleteProduct(productItem.product.id)}
                >
                  <svg className="basket__list-icon ">
                    <use href={`${sprite}#remove`} />
                  </svg>
                </button>

              </div>

              <div className="basket__list-footer">
                <UseCounter />
                <div className="basket__list-total">{`${productItem.product.price} UAH`}</div>
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
            {`${goodsTotalPrice} UAH` }
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
  goodsOrder: {
    products: [],
    goodsTotalPrice: 0
  },
  deleteProduct: () => {
  },
  orderProduct: () => {
  },
  continueShopping: () => {
  },
};
BasketList.propTypes = {
  goodsOrder: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.object),
    goodsTotalPrice: PropTypes.number
  }),
  deleteProduct:
  PropTypes.func,
  orderProduct:
  PropTypes.func,
  continueShopping:
  PropTypes.func,
};
export default BasketList;
