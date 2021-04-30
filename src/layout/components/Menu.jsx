import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../scss/Menu.scss';
import Burger from '../../components/Burger';

const Menu = ({ isMenuShow, onShowMenu, closeMenu }) => (
  <>
    <div className={!isMenuShow ? 'menu' : 'menu active'}>
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
    <Burger isMenuShow={isMenuShow} onShowMenu={onShowMenu} />
  </>
);
Menu.defaultProps = {
  isMenuShow: false,
  onShowMenu: () => {
  },
  closeMenu: () => {
  }
};
Menu.propTypes = {
  isMenuShow: PropTypes.bool,
  onShowMenu: PropTypes.func,
  closeMenu: PropTypes.func
};

export default Menu;
