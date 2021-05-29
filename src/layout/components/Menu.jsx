import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Burger from '../../components/Burger/Burger';

import '../scss/Menu.scss';

const Menu = ({
  showMenu,
  onShowMenu,
  closeMenu,
  menu
}) => (
  <>
    <div className={!showMenu ? 'menu' : 'menu active'}>
      <ul className="menu__list">
        {menu.map((menuItem) => (
          <li className="menu__list-item" key={menuItem.id}>
            <NavLink className="menu__list-link" to={menuItem.link} onClick={closeMenu}>{menuItem.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
    <Burger showMenu={showMenu} onShowMenu={onShowMenu} />
  </>
);

Menu.defaultProps = {
  menu: [],
  showMenu: false,
  onShowMenu: () => {
  },
  closeMenu: () => {
  }
};
Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
  showMenu: PropTypes.bool,
  onShowMenu: PropTypes.func,
  closeMenu: PropTypes.func
};

export default Menu;
