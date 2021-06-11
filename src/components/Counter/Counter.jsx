import React from 'react';
import PropTypes from 'prop-types';
import './scss/useCounter.scss';
import sprite from '../../assets/spriteSvg/sprite.svg';

const Counter = ({
  count, productCounterPrice, productId
}) => (
  <div className="counter">
    <button
      className="counter__btn btn"
      type="button"
      onClick={() => productCounterPrice(productId, 'increment')}
    >
      <svg className="counter__icon">
        <use href={`${sprite}#minus`} />
      </svg>
    </button>
    <label className="counter__label" htmlFor="count">
      <input
        className="counter__input"
        id="count"
        type="text"
        min={1}
        max={10}
        value={count}
        onChange={(e) => productCounterPrice(productId, +e.target.value)}
      />
    </label>

    <button
      className="counter__btn btn"
      type="button"
      onClick={() => productCounterPrice(productId, 'decrement')}
    >
      <svg className="counter__icon">
        <use href={`${sprite}#plus`} />
      </svg>
    </button>
  </div>
);

Counter.defaultProps = {
  count: 0,
  productId: 0,
  productCounterPrice: () => {},
};
Counter.propTypes = {
  count: PropTypes.number,
  productId: PropTypes.number,
  productCounterPrice: PropTypes.func,

};

export default Counter;
