import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Menu.scss';
import Burger from '../../components/Burger';

const Menu = () => (
  <>
    <ul className="menu__list">
      <li className="menu__list-item">
        <NavLink className="menu__list-link" to="/">Home</NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__list-link" to="/about">About</NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__list-link" to="/merch">Merch</NavLink>
      </li>
    </ul>
    <Burger />
  </>
);

export default Menu;
