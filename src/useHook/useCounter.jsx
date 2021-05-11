import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './scss/useCounter.scss';
import sprite from '../assets/spriteSvg/sprite.svg';

const UseCounter = ({ productCount }) => {
  const [count, setCount] = useState(productCount);

  return (
    <div className="counter">
      <button
        className="counter__btn btn"
        type="button"
        onClick={() => {
          setCount(count - 1);
        }}
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
          onChange={(e) => {
            setCount(+e.target.value);
          }}
        />
      </label>

      <button
        className="counter__btn btn"
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <svg className="counter__icon">
          <use href={`${sprite}#plus`} />
        </svg>
      </button>
    </div>
  );
};

UseCounter.defaultProps = {
  productCount: 0,
};
UseCounter.propTypes = {
  productCount: PropTypes.number
};

export default UseCounter;
