import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Pagination from '../../../components/Pagination';

import '../scss/Goods.scss';

const GoodsList = ({ goods }) => (
  <>
    <ul className="goods__list">
      {
        goods.map((product) => (
          <li className="goods__list-item" key={product.id}>
            <NavLink to={`/goods/${product.id}`}>
              <div className="goods__list-photo">
                <img className="goods__list-img" src={product.photo} alt="product" />
              </div>
            </NavLink>
            <div className="goods__list-name">{product.name}</div>
            <div className="goods__list-price">{product.price}</div>
          </li>
        ))
      }
    </ul>
    <Pagination />
  </>
);

GoodsList.defaultProps = {
  goods: []
};
GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object)
};
export default GoodsList;
