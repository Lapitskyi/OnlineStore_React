import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { requestCurrentPage, requestGoods, setCurrentPage } from '../../redux/actions';
import Goods from './Goods';
import Preloader from '../../components/Preloader/Preloader';
import {
  getCurrentPage,
  getGoods,
  getIsFetching,
  getPageSize,
  getPortionSize,
  getTotalCount
} from '../../redux/selector';

const GoodsContainer = ({
  pageSize,
  portionSize,
  totalCount,
  currentPage,
  goods,
  isFetching,
  ...props
}) => {
  requestGoods(currentPage, pageSize);

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.requestCurrentPage(pageNumber, pageSize);
  };

  return (
    <>
      {isFetching
        ? <Preloader />
        : (
          <Goods
            goods={goods}
            pageSize={pageSize}
            portionSize={portionSize}
            totalCount={totalCount}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
          />
        )}
    </>
  );
};

const mapStateToProps = ({ goods }) => ({
  goods: getGoods(goods),
  isFetching: getIsFetching(goods),
  pageSize: getPageSize(goods),
  totalCount: getTotalCount(goods),
  currentPage: getCurrentPage(goods),
  portionSize: getPortionSize(goods)
});

export default compose(
  connect(mapStateToProps,
    { requestGoods, setCurrentPage, requestCurrentPage }),
  withRouter
)(GoodsContainer);

GoodsContainer.defaultProps = {
  goods: [],
  pageSize: 0,
  portionSize: 0,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  setCurrentPage: () => {},
  requestCurrentPage: () => {}
};
GoodsContainer.propTypes = {
  pageSize: PropTypes.number,
  portionSize: PropTypes.number,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  isFetching: PropTypes.bool,
  goods: PropTypes.arrayOf(PropTypes.object),

  setCurrentPage: PropTypes.func,
  requestCurrentPage: PropTypes.func
};
