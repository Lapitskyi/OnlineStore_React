import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Favorites from '../../../components/Favorites/Favorites';
import Rating from '../../../components/Rating/Rating';
import '../scss/Goods.scss';

const GoodsList = ({
  goods,
}) => (
  <>
    <ul className="goods__list">
      {
        goods.map((product) => (
          <li className="goods__list-item" key={product.id}>
            <div className="goods__list-header">
              <Favorites />
              <NavLink to={`/goods/${product.id}`}>
                <div className="goods__list-photo">
                  <img className="goods__list-img" src={product.photo} alt="product" />
                </div>
              </NavLink>
            </div>

            <div className="goods__list-footer">
              <Rating />
              <div className="goods__list-name">{product.name}</div>
              <div className="goods__list-price">
                {` ${product.price || 0} \u20B4`}
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  </>
);

GoodsList.defaultProps = {
  goods: [],
};
GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object),

};
export default GoodsList;
