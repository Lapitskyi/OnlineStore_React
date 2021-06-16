import React from 'react';
import SwiperCore, {
  Navigation, Pagination, A11y
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './SliderSwiper.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

const SliderSwiper = ({ slider }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 1,
        },
        568: {
          slidesPerView: 1,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slider.map((sliderItem) => (
        <SwiperSlide key={sliderItem.id} className="slider">
          <div className="slider__inner">
            <NavLink className="slider__link" to={sliderItem.path}>
              <div className="slider__photo">
                <img className="slider__img" src={sliderItem.img} alt={sliderItem.alt} />
              </div>
            </NavLink>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SliderSwiper;

SliderSwiper.defaultProps = {
  slider: [
    {
      id: 1, img: 'https://via.placeholder.com/500', alt: 'promo', path: ''
    },
    {
      id: 2, img: 'https://via.placeholder.com/700', alt: 'promo', path: ''
    },
    {
      id: 3, img: 'https://via.placeholder.com/800', alt: 'promo', path: ''
    },
    {
      id: 4, img: 'https://via.placeholder.com/1000', alt: 'promo', path: ''
    },
  ]
};
SliderSwiper.propTypes = {
  slider: PropTypes.arrayOf(PropTypes.object)
};
