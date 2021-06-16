import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Favorites from '../Favorites/Favorites';
import Rating from '../Rating/Rating';
import './Card.scss';

const Card = ({
  cardPath, 
  cardPhoto,
  cardAlt,
  cardName, 
  cardPrice,
  cardVal
}) => (
  <div className="card">
    <div className="card__header">
      <div className="card__favorite">
        <Favorites />
      </div>

      <NavLink to={cardPath}>
        <div className="card__photo">
          <img className="card__img" src={cardPhoto} alt={cardAlt} />
        </div>
      </NavLink>
    </div>

    <div className="card__footer">
      <Rating />
      <div className="card__name">{cardName}</div>
      <div className="card__price">
        {` ${cardPrice || 0} ${cardVal}`}
      </div>
    </div>
  </div>

);
Card.defaultProps = {
  cardPath: '',
  cardPhoto: '',
  cardAlt: '',
  cardName: '',
  cardPrice: 1,
  cardVal: '\u20B4'
};
Card.propTypes = {
  cardPath: PropTypes.string,
  cardPhoto: PropTypes.string,
  cardAlt: PropTypes.string,
  cardName: PropTypes.string,
  cardPrice: PropTypes.number,
  cardVal: PropTypes.string
};

export default Card;
