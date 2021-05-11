import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getCurrentPage, getGoods, setCurrentPage } from '../../redux/goods-reducer';
import Goods from './Goods';
import Preloader from '../../components/Preloader';

const GoodsContainer = ({
  pageSize,
  totalCount,
  currentPage,
  goods,
  isFetching
}) => {
  getGoods(currentPage, pageSize);

  const onPageChanged = (pageNumber) => {
    setCurrentPage(pageNumber);
    getCurrentPage(pageNumber, pageSize);
  };
  return (
    <>
      { isFetching
        ? <Preloader />
        : (
          <Goods
            goods={goods}
            pageSize={pageSize}
            totalCount={totalCount}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
          />
        )}
    </>
  );
};

const mapStateToProps = ({ goods }) => ({
  goods: goods.goods,
  isFetching: goods.isFetching,
  pageSize: goods.pageSize,
  totalCount: goods.totalCount,
  currentPage: goods.currentPage
});

export default compose(
  connect(mapStateToProps, { getGoods, setCurrentPage, getCurrentPage }),
  withRouter
)(GoodsContainer);

GoodsContainer.defaultProps = {
  goods: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
};

GoodsContainer.propTypes = {
  pageSize: PropTypes.number,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  isFetching: PropTypes.bool,
  goods: PropTypes.arrayOf(PropTypes.object),
};
