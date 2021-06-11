import React from 'react';
import PropTypes from 'prop-types';
import './scss/useCounter.scss';
import sprite from '../../assets/spriteSvg/sprite.svg';

const Counter = ({
  count, Decrement, Increment, changeValue 
}) => (
  <div className="counter">
    <button
      className="counter__btn btn"
      type="button"
      onClick={Decrement}
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
      onClick={Increment}
    >
      <svg className="counter__icon">
        <use href={`${sprite}#plus`} />
      </svg>
    </button>
  </div>
);

Counter.defaultProps = {
  count: 0,
  Decrement: () => {},
  Increment: () => {},
  changeValue: () => {}
};
Counter.propTypes = {
  count: PropTypes.number,
  Decrement: PropTypes.func,
  Increment: PropTypes.func,
  changeValue: PropTypes.func
};

export default Counter;
