import React from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/spriteSvg/sprite.svg';
import './Logo.scss';

const Logo = () => (
  <NavLink to="/">
    <div className="logo">
      <svg className="logo__icon">
        <use href={`${sprite}#logo`} />
      </svg>
    </div>
  </NavLink>
);

export default Logo;
