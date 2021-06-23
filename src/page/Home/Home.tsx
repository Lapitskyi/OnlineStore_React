import React, { FC } from 'react';

import SideBar from './components/SideBar';
import ContentHome from './components/ContentHome';

import './scss/Home.scss';

interface HomeProps {
  newProduct?: any | null
  promotions?: any | null
  popular?: any[] | null
  addPopular: () => void
}

const Home: FC<HomeProps> = ({
  promotions,
  newProduct,
  popular,
  addPopular,
}) => (
  <div className="container">
    <div className="home">

      <SideBar />

      <ContentHome
        addPopular={addPopular}
        popular={popular}
        newProduct={newProduct}
        promotions={promotions}
      />

    </div>
  </div>
);

export default Home;
