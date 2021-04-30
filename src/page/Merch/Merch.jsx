import React from 'react';
import './scss/Merch.scss';
import Product from '../../components/Product';

const Merch = () => {
  return (
    <section className="merch">
      <div className="container">
        <div className="merch__inner">
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Merch;
