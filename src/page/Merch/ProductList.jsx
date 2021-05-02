import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Pagination from '../../components/Pagination';

import './scss/Product.scss';

const ProductList = ({ products }) => (
  <>
    <ul className="product__list">
      {
        products.map((product) => (
          <li className="product__list-item" key={product.id}>
            <NavLink to={`/merch/${product.id}`}>
              <div className="product__list-photo">
                <img className="product__list-img" src={product.photo} alt="product" />
              </div>
            </NavLink>
            <div className="product__list-name">{product.name}</div>
            <div className="product__list-price">{product.price}</div>
          </li>
        ))
      }
    </ul>
    <Pagination />
  </>
);

ProductList.defaultProps = {
  products: []
};
ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};
export default ProductList;
