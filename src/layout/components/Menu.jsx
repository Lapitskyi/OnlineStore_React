import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Menu.scss';

const Menu = () => (
  <ul className="menu__list">
    <li className="menu__list-item">
      <NavLink className="menu__list-link" to="About">Home</NavLink>
    </li>
    <li className="menu__list-item">
      <NavLink className="menu__list-link" to="About">About</NavLink>
    </li>
    <li className="menu__list-item">
      <NavLink className="menu__list-link" to="About">Merch</NavLink>
    </li>
  </ul>
);

export default Menu;
