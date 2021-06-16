import React from 'react';
import '../scss/ProductNav.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductNav = ({ productNav, t }) => (
  <div className="productNav">
    <ul className="productNav__list">
      {productNav.map((productNavItem) => (
        <li className="productNav__list-item" key={productNavItem.id}>
          <NavLink className="productNav__list-link" to={productNavItem.link}>
            {t(productNavItem.name)}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);
ProductNav.defaultProps = {
  productNav: [],
  t: () => {
  },
};
ProductNav.propTypes = {
  productNav: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func,
};
export default ProductNav;
