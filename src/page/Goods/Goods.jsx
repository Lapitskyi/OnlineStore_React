import React from 'react';
import PropTypes from 'prop-types';
import GoodsList from './components/GoodsList';

import './scss/Goods.scss';

const Goods = ({
  goods, 
  pageSize,
  totalCount,
  currentPage,
  onPageChanged
}) => {
  return (
    <section className="goods">
      <div className="container">
        <div className="goods__inner">
          <GoodsList
            goods={goods}
            pageSize={pageSize}
            totalCount={totalCount}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
          />
        </div>
      </div>
    </section>
  );
};

Goods.defaultProps = {
  goods: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  onPageChanged: () => {}
};

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object),
  pageSize: PropTypes.number,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Goods;
