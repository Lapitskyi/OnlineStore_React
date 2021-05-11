import React from 'react';
import sprite from '../../../assets/spriteSvg/sprite.svg';
import '../scss/Basket.scss';

const BasketEmpty = () => (
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
);

export default BasketEmpty;
