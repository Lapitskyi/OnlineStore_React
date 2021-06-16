import goodsApi from '../../service/goodsApi';
import {
  SET_GOODS, SET_PRODUCT, SET_PRODUCT_PRICE, SET_CURRENT_PAGE, SET_GOODS_TOTAL_COUNT, TOGGLE_IS_FETCHING
} from './goods-type';

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setGoods = (goods) => ({ type: SET_GOODS, goods });
export const setProduct = (product) => ({ type: SET_PRODUCT, product });
export const productPrice = (productCount, product) => ({ type: SET_PRODUCT_PRICE, productCount, product });

// page goods
export const setCurrentPage = (PageNumber) => ({ type: SET_CURRENT_PAGE, PageNumber });
export const setGoodsTotalCount = (totalCount) => ({ type: SET_GOODS_TOTAL_COUNT, totalCount });

export const requestGoods = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await goodsApi.getGoods(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setGoods(data));
};

export const requestProduct = (productId) => async (dispatch) => {
  const data = await goodsApi.getProduct(productId);
  dispatch(setProduct(data));
};

// !!!!!!complete the functionality(Доделать/проверить функционал)
export const updateProduct = (productId) => async (dispatch) => {
  const data = await goodsApi.getProduct(productId);
  dispatch(productPrice(data));
};

export const requestCurrentPage = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await goodsApi.getCurrentPage(pageNumber, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setGoods(data));
};
