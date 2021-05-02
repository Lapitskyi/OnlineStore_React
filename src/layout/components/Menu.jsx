import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Burger from '../../components/Burger';

import '../scss/Menu.scss';

const Menu = ({ showMenu, onShowMenu, closeMenu }) => (
  <>
    <div className={!showMenu ? 'menu' : 'menu active'}>
      <ul className="menu__list">
        <li className="menu__list-item">
          <NavLink className="menu__list-link" to="/" onClick={closeMenu}>Home</NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink className="menu__list-link" to="/about" onClick={closeMenu}>About</NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink className="menu__list-link" to="/merch" onClick={closeMenu}>Merch</NavLink>
        </li>
      </ul>
    </div>
    <Burger showMenu={showMenu} onShowMenu={onShowMenu} />
  </>
);
Menu.defaultProps = {
  showMenu: false,
  onShowMenu: () => {
  },
  closeMenu: () => {
  }
};
Menu.propTypes = {
  showMenu: PropTypes.bool,
  onShowMenu: PropTypes.func,
  closeMenu: PropTypes.func
};

export default Menu;
