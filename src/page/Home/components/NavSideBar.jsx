import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import constant from '../../../assets/constants/constant';

const NavSideBar = () => {
  const { t } = useTranslation();
  return (
    <nav className="nav-sidebar">
      <ul className="nav-sidebar__list">
        {constant?.navSideBar?.map((menuItem) => (
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
NavSideBar.defaultProps = {
  navSideBar: [
    {
      id: 1,
      name: 'navSideBar.product category1',
      link: '/product category1'
    },
    {
      id: 2,
      name: 'navSideBar.product category2',
      link: '/product category2'
    },
    {
      id: 3,
      name: 'navSideBar.product category3',
      link: '/product category3'
    },
    {
      id: 4,
      name: 'navSideBar.product category4',
      link: '/product category4'
    },
  ]
};
NavSideBar.propTypes = {
};

export default NavSideBar;
