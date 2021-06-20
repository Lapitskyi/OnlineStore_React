import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Rating from '../Rating/Rating';
import './Card.scss';

interface CardProps {
  cardPath: string,
  cardPhoto: string,
  cardAlt: string,
  cardName: string,
  cardPrice: number,
  cardVal: string,
  rating: number
}

const Card: FC<CardProps> = ({
  cardPath, 
  cardPhoto,
  cardAlt,
  cardName, 
  cardPrice,
  cardVal,
  rating,
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
      <Rating
        pathProduct={cardPath}
        rating={rating}
      />
      <div className="card__name">{cardName}</div>
      <div className="card__price">
        {` ${cardPrice || 0} ${cardVal || '\u20B4'}`}
      </div>
    </div>
  </div>

);

export default Card;
