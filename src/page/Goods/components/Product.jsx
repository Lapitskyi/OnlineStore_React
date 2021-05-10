import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Product.scss';
import UseCounter from '../../../useHook/useCounter';

const Product = ({ product, addProductBasket }) => {
  return (
    <>
      <div className="product" key={product.id}>
        <div className="product__photo">
          <div className="product__photoBox">
            <img
              className="product__img"
              src={product.photo
                ? product.photo
                : 'https://via.placeholder.com/400x350'}
              alt=""
            />
          </div>
          <ul className="product__list-photo">
            {product.photoCollection.map((photoItem) => (
              <li className="product__list-itemPhoto" key={photoItem}>
                <img className="product__list-photoImg" src={photoItem} alt="" />
              </li>
            ))}
          </ul>

        </div>
        <div className="product__content">
          <h2 className="product__title">{product.name}</h2>
          <div className="product__price">
            {`Цена ${product.price} UAH`}
          </div>
          <ul className="product__list-size">
            {product.size.map((sizeItem) => (
              <li className="product__list-itemSize" key={sizeItem}>
                <button className="product__list-sizeBtn btn" type="button">{sizeItem}</button>
              </li>
            ))}
          </ul>

          <UseCounter />

          <div className="product__table-size">Таблица размеров(Просмотреть)</div>
          <button className="product__btn btn btn__size-large" type="button" onClick={() => addProductBasket(product)}>
            В корзину
          </button>
          <ul className="product__description">
            {product.description.map((descriptionItem) => (
              <li className="product__description-item" key={descriptionItem}>
                <p>{descriptionItem}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

Product.defaultProps = {
  product: {},
  addProductBasket: () => {
  }
};
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    photo: PropTypes.string,
    photoCollection: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.arrayOf(PropTypes.string),
  }),
  addProductBasket: PropTypes.func
};

export default Product;
