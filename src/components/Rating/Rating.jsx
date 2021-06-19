import React from 'react';
import './Rating.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';
import useRating from '../../useHook/useRating';

const Rating = ({ pathProduct, rating }) => {
  const path = `${pathProduct}`;
  const { ratingCount, addRating } = useRating(rating || 0);
  // const stars = Array.from({ length: 5 }, () => '🟊');

  return (
    <div className="rating">
      <ul className="rating__list">
        <li className="rating__list-item">
          <button
            type="button"
            className="rating__btn btn"
            onClick={() => addRating}
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
            // onClick=""
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
            // onClick=""
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
            // onClick=""/>
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
            // onClick=""
          >
            <svg className="rating__icon">
              <use href={`${sprite}#rating`} />
            </svg>
          </button>
        </li>
      </ul>

      <div className="rating__num">
        <NavLink to={path}>
          {` ${ratingCount} отзывов`}
        </NavLink>
      </div>
    </div>
  );
};

Rating.defaultProps = {
  pathProduct: '',
  rating: 0,
};
Rating.propTypes = {
  pathProduct: PropTypes.string,
  rating: PropTypes.number,
};

export default Rating;
