import React, { FC } from 'react';
import SwiperCore, {
  Navigation, Pagination, A11y,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { NavLink } from 'react-router-dom';
import './SliderSwiper.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

interface SliderSwiperProps {
  slider?: any [] | null
}

const SliderSwiper: FC<SliderSwiperProps> = ({ slider }) => {
  return (
    <>
      <div className="slider">
        <Swiper
          className="slider__inner"
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            992: {
              slidesPerView: 1,
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
          <div>
            {slider?.map((sliderItem) => (
              <SwiperSlide key={sliderItem.id}>
                <NavLink className="slider__link" to={sliderItem.path}>
                  <div className="slider__photo">
                    <img className="slider__img" src={sliderItem.img} alt={sliderItem.alt} />
                  </div>
                </NavLink>        
              </SwiperSlide>
            ))} 
          </div>
        </Swiper>
      </div>
    </>
  );
};
export default SliderSwiper;
