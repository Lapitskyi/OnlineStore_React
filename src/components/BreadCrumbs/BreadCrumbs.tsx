import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './BreadCrumbs.scss';

interface BreadCrumbsProps {
  pathname: string,
  name: string
}

const BreadCrumbs: FC <BreadCrumbsProps> = ({ pathname, name }) => (
  <div className="breadCrumbs">
    <div className="container">
      <ul className="breadCrumbs__list">
        <li className="breadCrumbs__list-item">
          <NavLink className="breadCrumbs__list-link" to="/">
            Главная
          </NavLink>
        </li>
        <li className="breadCrumbs__list-item">
          <NavLink className="breadCrumbs__list-link" to={pathname}>
            {name}
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default BreadCrumbs;
