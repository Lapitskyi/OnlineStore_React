import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';
import useCounter from '../../useHook/useCounter';
import './scss/useCounter.scss';

const Counter = ({ initialCount, priceProduct }) => {
  const {
    count, increment, decrement, changeValue,
  } = useCounter(initialCount);

  useEffect(() => {
    priceProduct(count);
  }, [count]);
  return (
    <div className="counter">
      <button
        className="counter__btn btn"
        type="button"
        onClick={decrement}
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
          onChange={changeValue}
        />
      </label>

      <button
        className="counter__btn btn"
        type="button"
        onClick={increment}
      >
        <svg className="counter__icon">
          <use href={`${sprite}#plus`} />
        </svg>
      </button>
    </div>
  );
};

Counter.defaultProps = {
  initialCount: 1,
  priceProduct: () => {},
};
Counter.propTypes = {
  initialCount: PropTypes.number,
  priceProduct: PropTypes.func,
};

export default Counter;
