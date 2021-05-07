import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Product.scss';
import UseCounter from '../../../useHook/useCounter';

const Product = ({ product }) => {
  return (
    <>
      {product?.map((item) => (
        <div className="product" key={item.id}>
          <div className="product__photo">
            <div className="product__photoBox">
              <img
                className="product__img"
                src={item.img
                  ? item.img
                  : 'https://via.placeholder.com/400x350'}
                alt=""
              />
            </div>
            <ul className="product__list-photo">
              <li className="product__list-itemPhoto">
                <img className="product__list-photoImg" src="https://via.placeholder.com/400x350" alt="" />
              </li>
              <li className="product__list-itemPhoto">
                <img className="product__list-photoImg" src="https://via.placeholder.com/400x350" alt="" />
              </li>
              <li className="product__list-itemPhoto">
                <img className="product__list-photoImg" src="https://via.placeholder.com/400x350" alt="" />
              </li>
              <li className="product__list-itemPhoto">
                <img className="product__list-photoImg" src="https://via.placeholder.com/400x350" alt="" />
              </li>
            </ul>

          </div>
          <div className="product__content">
            <h2 className="product__title">name Product</h2>
            <div className="product__price">100 UAH</div>
            <ul className="product__list-size">
              <li className="product__list-itemSize">
                <button className="product__list-sizeBtn btn" type="button">S</button>
              </li>
              <li className="product__list-itemSize">
                <button className="product__list-sizeBtn btn" type="button">M</button>
              </li>
              <li className="product__list-itemSize">
                <button className="product__list-sizeBtn btn" type="button">L</button>
              </li>
              <li className="product__list-itemSize">
                <button className="product__list-sizeBtn btn" type="button">XL</button>
              </li>
              <li className="product__list-itemSize">
                <button className="product__list-sizeBtn btn" type="button">XXL</button>
              </li>
            </ul>

            <UseCounter />

            <div className="product__table-size">Таблица размеров(Просмотреть)</div>
            <button className="product__btn btn btn__size-large" type="button">
              В корзину
            </button>
            <div className="product__description">
              <p>
                Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

Product.defaultProps = {
  product: [{
    id: 1,
    name: 'Name product',
    price: '100',
    photo: 'https://via.placeholder.com/400x350',
    photoCollection: ['img1', 'img2', 'img3', 'img4'],
    size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
    description: {}
  }]
};
Product.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object)
};

export default Product;
