import React, { FC, useEffect } from 'react';
import sprite from '../../assets/spriteSvg/sprite.svg';
import useCounter from '../../useHook/useCounter';
import './scss/useCounter.scss';

interface CounterProps {
  initialCount: number,
  priceProduct: (count: unknown) => void
}

const Counter: FC<CounterProps> = ({ initialCount, priceProduct }) => {
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

export default Counter;
