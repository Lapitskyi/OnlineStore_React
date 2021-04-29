import React from 'react';
import '../scss/NavAction.scss';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/spriteSvg/sprite.svg';

const NavAction = () => (
  <ul className="action__list">
    <li className="action__list-item">
      <NavLink to="/auth" className="action__list-link">
        <svg className="action__list-icon">
          <use href={`${sprite}#user`} />
        </svg>
      </NavLink>
    </li>
    <li className="action__list-item ">
      <NavLink to="/cart" className="action__list-link cart">
        <svg className="action__list-icon ">
          <use href={`${sprite}#cart`} />
        </svg>
        <div className="cart__badge">0</div>
      </NavLink>
    </li>
  </ul>
);

export default NavAction;
