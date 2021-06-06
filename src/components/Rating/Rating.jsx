import React from 'react';
import './Rating.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';

const Rating = ({ pathProduct, rating }) => {
  const path = `${pathProduct}`;
  return (
    <div className="rating">
      <ul className="rating__list">
        <li className="rating__list-item">
          <button
            type="button"
            className="rating__btn btn"
            onClick=""
          >
            <svg className="rating__icon">
              <use href={`${sprite}#rating`} />
            </svg>
          </button>
        </li>
        <li className="rating__list-item">
          <button
            type="button"
            className="rating__btn btn"
            onClick=""
          >
            <svg className="rating__icon">
              <use href={`${sprite}#rating`} />
            </svg>
          </button>
        </li>
        <li className="rating__list-item">
          <button
            type="button"
            className="rating__btn btn"
            onClick=""
          >
            <svg className="rating__icon">
              <use href={`${sprite}#rating`} />
            </svg>
          </button>
        </li>
        <li className="rating__list-item">
          <button
            type="button"
            className="rating__btn btn"
            onClick=""
          >
            <svg className="rating__icon">
              <use href={`${sprite}#rating`} />
            </svg>
          </button>
        </li>
        <li className="rating__list-item">
          <button
            type="button"
            className="rating__btn btn"
            onClick=""
          >
            <svg className="rating__icon">
              <use href={`${sprite}#rating`} />
            </svg>
          </button>
        </li>
      </ul>

      <div className="rating__num">
        <NavLink to={path}>
          {` ${rating || 0} отзывов`}
        </NavLink>
      </div>
    </div>
  );
};

Rating.defaultProps = {
  pathProduct: '',
  rating: 0
};
Rating.propTypes = {
  pathProduct: PropTypes.string,
  rating: PropTypes.number
};

export default Rating;
