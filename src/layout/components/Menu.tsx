import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import Burger from '../../components/Burger/Burger';
import constant from '../../assets/constants/constant';
import '../scss/Menu.scss';

interface MenuProps {
  showMenu:boolean,
  onShowMenu: () => void,
  closeMenu: () => void,
}
const Menu: FC <MenuProps> = ({
  showMenu,
  onShowMenu,
  closeMenu,
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

export default Menu;
