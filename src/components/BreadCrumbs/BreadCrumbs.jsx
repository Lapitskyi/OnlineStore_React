import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BreadCrumbs.scss';

const BreadCrumbs = ({ pathname, name }) => (
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

BreadCrumbs.defaultProps = {
  pathname: '',
  name: ''
};
BreadCrumbs.propTypes = {
  pathname: PropTypes.string,
  name: PropTypes.string,
};

export default BreadCrumbs;
