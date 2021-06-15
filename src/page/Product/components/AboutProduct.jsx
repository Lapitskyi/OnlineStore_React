import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../scss/Product.scss';
import { NavLink } from 'react-router-dom';
import imageComingSoon from '../../../assets/images/imageComingSoon.png';

import Modal from '../../../components/Modal/Modal';
import useModal from '../../../useHook/useModal';
import Counter from '../../../components/Counter/Counter';

const AboutProduct = ({
  product, addProductBasket, priceProduct
}) => {
  const [inBasket, setInBasket] = useState(false);
  const [poster, setPoster] = useState(product.photo);
  const {
    modal, closeModals, openModal, keyPress
  } = useModal(false);

  const chooseSize = (sizeItem) => {
    console.log(sizeItem);
  };
  const changePicture = (pictureItem) => {
    setPoster(pictureItem);
  };

  return (
    <>
      <div className="container">
        <div className="product" key={product.id}>

          <div className="product__photo">
            <ul className="product__list-photo">
              {product.photoCollection.map((photoItem) => (
                <li
                  className="product__list-itemPhoto"
                  key={photoItem}
                  onClick={() => changePicture(photoItem)}
                  role="presentation"
                >
                  <img
                    className="product__list-photoImg"
                    src={photoItem || imageComingSoon}
                    alt=""
                  />
                </li>
              ))}
            </ul>

            <div className="product__photoBox">
              <img
                className="product__img"
                src={poster || imageComingSoon}
                alt=""
              />
            </div>

          </div>
          <div className="product__content">
            <div className="product__content-inner">
              <h2 className="product__title">{product.name}</h2>
              <div className="product__price">
                {`Цена ${product.price} \u20B4`}
              </div>
              <ul className="product__list-size">
                {Object.keys(product.size)?.map((sizeItem) => (
                  <li className="product__list-itemSize" key={sizeItem}>
                    <button
                      className={product.size[sizeItem] === false
                        ? 'product__list-sizeBtnDisable btn'
                        : 'product__list-sizeBtn btn'}
                      type="button"
                      onClick={() => (product.size[sizeItem] === true ? chooseSize(sizeItem) : null)}
                    >
                      {sizeItem}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="product__table-size">
                Таблица размеров
                <span
                  role="presentation"
                  onClick={openModal}
                >
                  (Просмотреть)
                </span>
              </div>
              <Modal modal={modal} closeModals={closeModals} keyPress={keyPress}>
                <img
                  className="product__img"
                  src={poster || imageComingSoon}
                  alt=""
                />
              </Modal>

              <Counter initialCount={product.count} priceProduct={priceProduct} />
              <>
                {!inBasket ? (
                  <button
                    className="product__btn btn btn__size-large"
                    type="button"
                    onClick={() => {
                      addProductBasket(product);
                      setInBasket(true);
                    }}
                  >
                    Купить
                  </button>
                )
                  : (
                    <NavLink
                      className="product__btn product__btn-inCart btn btn__size-large"
                      to="/cart"
                    >
                      в корзину
                    </NavLink>
                  )}

              </>
              <ul className="product__description">
                {product.description.map((descriptionItem) => (
                  <li className="product__description-item" key={descriptionItem}>
                    <p>{descriptionItem}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutProduct.defaultProps = {
  product: {},
  addProductBasket: () => {
  },
  priceProduct: () => {
  },
};
AboutProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    photo: PropTypes.string,
    photoCollection: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.shape({}),
    description: PropTypes.arrayOf(PropTypes.string),
  }),
  addProductBasket: PropTypes.func,
  priceProduct: PropTypes.func,
};

export default AboutProduct;
