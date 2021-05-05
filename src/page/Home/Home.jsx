import React from 'react';
import './scss/Home.scss';
import Product from '../Goods/components/Product';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Product />
      </div>
    </div>
  );
};

export default Home;
