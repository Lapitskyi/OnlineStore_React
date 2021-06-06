import SwiperCore, {
  Navigation, Pagination, A11y
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

const SliderSwiper = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <SwiperSlide>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <img src="https://via.placeholder.com/500" alt="" />
      </SwiperSlide>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <SwiperSlide>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <img src="https://via.placeholder.com/500" alt="" />
      </SwiperSlide>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <SwiperSlide>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <img src="https://via.placeholder.com/500" alt="" />
      </SwiperSlide>

    </Swiper>
  );
};
export default SliderSwiper;

SliderSwiper.defaultProps = {

};
SliderSwiper.propTypes = {

};
