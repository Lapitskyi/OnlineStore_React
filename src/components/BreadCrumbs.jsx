import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './scss/BreadCrumbs.scss';

const BreadCrumbs = ({ path, name }) => (
  <div className="breadCrumbs">
    <div className="container">
      <ul className="breadCrumbs__list">
        <li className="breadCrumbs__list-item">
          <NavLink className="breadCrumbs__list-link" to="/">
            Главная
          </NavLink>
        </li>
        <li className="breadCrumbs__list-item">
          <NavLink className="breadCrumbs__list-link" to={path}>
            {name}
          </NavLink>
        </li>
        {/* {path.map((itemPath) => ( */}
        {/*  <li className="breadCrumbs__list-item" key={itemPath}> */}
        {/*    <NavLink className="breadCrumbs__list-link" to={itemPath.path}> */}
        {/*      {name} */}
        {/*    </NavLink> */}
        {/*  </li> */}
        {/* ))} */}
      </ul>
    </div>
  </div>
);

BreadCrumbs.defaultProps = {
  path: '',
  name: ''
};
BreadCrumbs.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
};

export default BreadCrumbs;
