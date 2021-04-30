import React from 'react';
import './scss/Product.scss';
import { NavLink } from 'react-router-dom';

const Product = () => (
  <ul className="product__list">
    <li className="product__list-item">
      <NavLink to="/product/1">
        <div className="product__list-photo">
          <img className="product__list-img" src="https://via.placeholder.com/400x350" alt="product" />
        </div>
      </NavLink>
      <h3 className="product__list-name">Product name </h3>
      <div className="product__list-price">100 UAH</div>
    </li>
    <li className="product__list-item">
      <NavLink to="/product/2">
        <div className="product__list-photo">
          <img className="product__list-img" src="https://via.placeholder.com/400x350" alt="product" />
        </div>
      </NavLink>
      <h3 className="product__list-name">Product name </h3>
      <div className="product__list-price">100 UAH</div>
    </li>
    <li className="product__list-item">
      <NavLink to="/product/3">
        <div className="product__list-photo">
          <img className="product__list-img" src="https://via.placeholder.com/400x350" alt="product" />
        </div>
      </NavLink>
      <h3 className="product__list-name">Product name </h3>
      <div className="product__list-price">100 UAH</div>
    </li>
  </ul>
);

export default Product;
