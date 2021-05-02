import React from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';

import './scss/Merch.scss';

const Merch = ({ products }) => {
  return (
    <section className="merch">
      <div className="container">
        <div className="merch__inner">
          <ProductList products={products} />
        </div>
      </div>
    </section>
  );
};

Merch.defaultProps = {
  products: []
};

Merch.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

export default Merch;
