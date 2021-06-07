import React, { useState } from 'react';
import './Favorites.scss';
import sprite from '../../assets/spriteSvg/sprite.svg';

const Favorites = () => {
  const [favorite, setFavorite] = useState(false);
  const actionFavorites = () => {
    setFavorite(!!favorite === false);
  };
  return (
    <button
      type="button"
      className="btn favorites__btn"
      onClick={actionFavorites}
    >
      {favorite
        ? (
          <svg className="favorites__icon">
            <use href={`${sprite}#favorites-filled`} />
          </svg>
        )
        : (
          <svg className="favorites__icon">
            <use href={`${sprite}#favorites`} />
          </svg>
        )}

    </button>
  );
};

export default Favorites;
