import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import constant from '../../../assets/constants/constant';

interface MenuItemProps {
  navSideBar: Array<{
    id: number,
    name:string,
    link:string,
  }>
  menuItem: (navSideBar: MenuItemProps) => JSX.Element
}

const NavSideBar = () => {
  const { t } = useTranslation();
  return (
    <nav className="nav-sidebar">
      <ul className="nav-sidebar__list">
        {constant.navSideBar.map((menuItem) => (
          <li className="nav-sidebar__list-item" key={menuItem.id}>
            <NavLink
              className="nav-sidebar__list-link"
              to={menuItem.link}
            >
              {t(menuItem.name)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavSideBar;
