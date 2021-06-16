import React from 'react';
import PropTypes from 'prop-types';
import SliderSwiper from '../../components/SliderSwiper/SliderSwiper';
import Card from '../../components/Card/Card';

import './scss/Home.scss';
import { H2 } from '../../components/Title/Title';

const Home = ({ popular }) => (
  <div className="home">
    <div className="container">
      <SliderSwiper />
      <div className="popular">
        <div className="popular__inner">

          <H2 title="Text" />
          <div className="popular">
            {popular.map((popularItem) => (
              <Card
                key={popularItem.id}
                cardAlt={popularItem.alt}
                cardName={popularItem.name}
                cardPath={popularItem.path}
                cardPhoto={popularItem.img}
                cardPrice={popularItem.price}
                cardVal={popularItem.val}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
Home.defaultProps = {
  popular: [
    {
      id: 1, img: 'https://via.placeholder.com/500', alt: 'promo', path: '', name: 'product', price: 500, val: 'грн'
    },
    {
      id: 2, img: 'https://via.placeholder.com/700', alt: 'promo', path: '', name: 'product', price: 600, val: 'грн'
    },
    {
      id: 3, img: 'https://via.placeholder.com/800', alt: 'promo', path: '', name: 'product', price: 700, val: 'грн'
    },
    {
      id: 4, img: 'https://via.placeholder.com/1000', alt: 'promo', path: '', name: 'product', price: 800, val: 'грн'
    },
    {
      id: 5, img: 'https://via.placeholder.com/1000', alt: 'promo', path: '', name: 'product', price: 800, val: 'грн'
    },
  ],
};
Home.propTypes = {
  popular: PropTypes.arrayOf(PropTypes.object),

};
export default Home;
