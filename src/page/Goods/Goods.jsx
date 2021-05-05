import React from 'react';
import PropTypes from 'prop-types';
import GoodsList from './components/GoodsList';

import './scss/Goods.scss';

const Goods = ({ goods }) => {
  return (
    <section className="goods">
      <div className="container">
        <div className="goods__inner">
          <GoodsList goods={goods} />
        </div>
      </div>
    </section>
  );
};

Goods.defaultProps = {
  goods: []
};

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object)
};

export default Goods;
