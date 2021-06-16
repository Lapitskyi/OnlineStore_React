import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
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
import { requestCurrentPage, requestGoods, setCurrentPage } from '../../redux/goods/goods-action';

const GoodsContainer = () => {
  const products = useSelector(({ goods }) => getGoods(goods));
  const isFetching = useSelector(({ goods }) => getIsFetching(goods));
  const pageSize = useSelector(({ goods }) => getPageSize(goods));
  const totalCount = useSelector(({ goods }) => getTotalCount(goods));
  const currentPage = useSelector(({ goods }) => getCurrentPage(goods));
  const portionSize = useSelector(({ goods }) => getPortionSize(goods));

  const dispatch = useDispatch();

  requestGoods(currentPage, pageSize);

  const onPageChanged = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(requestCurrentPage(pageNumber, pageSize));
  };

  return (
    <>
      {isFetching
        ? <Preloader />
        : (
          <Goods
            goods={products}
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

export default compose(
  withRouter
)(GoodsContainer);

GoodsContainer.defaultProps = {

};
GoodsContainer.propTypes = {
};
