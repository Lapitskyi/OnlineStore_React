import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import Burger from '../../components/Burger/Burger';
import constant from '../../assets/constants/constant';
import '../scss/Menu.scss';

const Menu = ({
  showMenu,
  onShowMenu,
  closeMenu
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={cn('menu', { active: showMenu })}>
        <ul className="menu__list">
          {constant.nav.map((menuItem) => (
            <li className="menu__list-item" key={menuItem.id}>
              <NavLink
                className="menu__list-link"
                to={menuItem.link}
                onClick={closeMenu}
              >
                {t(menuItem.name)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Burger showMenu={showMenu} onShowMenu={onShowMenu} />
    </>
  );
};

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
