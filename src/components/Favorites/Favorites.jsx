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
      className={favorite === true ? 'btn favorites__btn active' : 'btn favorites__btn'}
      onClick={actionFavorites}
    >
      <svg className="favorites__icon">
        <use href={`${sprite}#favorites`} />
      </svg>
    </button>
  );
};

export default Favorites;
