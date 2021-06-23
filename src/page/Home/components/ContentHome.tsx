import React, { FC } from 'react';
import Card from '../../../components/Card/Card';
import { H2 } from '../../../components/Title/Title';
import '../scss/HomeContent.scss';
import SliderSwiper from '../../../components/SliderSwiper/SliderSwiper';

interface ContentProps {
  newProduct?: any[] | null
  promotions?: any[] | null
  popular?: any[] | null
  addPopular: () => void
}

const ContentHome: FC<ContentProps> = ({
  promotions,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  newProduct,
  popular,
  addPopular, 
}) => (
  <div className="home__content">
    <div className="home__content-inner">

      <SliderSwiper slider={promotions} />

      <div className="popular">
        <div className="popular__inner">

          <H2 title="Новинки" />
          <div className="popular">
            {popular?.map((popularItem) => (
              <Card
                key={popularItem.id}
                cardAlt={popularItem.alt}
                cardName={popularItem.name}
                cardPath={popularItem.path}
                cardPhoto={popularItem.img}
                cardPrice={popularItem.price}
                cardVal={popularItem.val}
                rating={popularItem.rating}
              />
            ))}
          </div>
          <button type="button" onClick={() => addPopular}>Показать еще</button>
        </div>
      </div>
    </div>
  </div>
);

export default ContentHome;
