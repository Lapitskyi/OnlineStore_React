import goodsApi from '../service/goodsApi';
import authAPI from '../service/authAPI';

import {
  ADD_PRODUCT_ORDER,
  UPDATE_PRODUCT_ORDER,
  DELETE_PRODUCT_ORDER,
  TOTAL_PRODUCT,
  SET_AUTH_USER_DATA,
  SET_PRODUCT,
  SET_GOODS,
  TOGGLE_ISFETCHING,
  SET_CURRENT_PAGE,
  SET_GOODS_TOTAL_COUNT,
  PRODUCT_DECRIMENT_INCRIMENT
} from './type';

// goods, product
export const setGoods = (goods) => ({ type: SET_GOODS, goods });
export const setProduct = (product) => ({ type: SET_PRODUCT, product });
export const productPrice = (productId, countType) => ({ type: PRODUCT_DECRIMENT_INCRIMENT, productId, countType });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_ISFETCHING, isFetching });

// page goods
export const setCurrentPage = (PageNumber) => ({ type: SET_CURRENT_PAGE, PageNumber });
export const setGoodsTotalCount = (totalCount) => ({ type: SET_GOODS_TOTAL_COUNT, totalCount });

// basket
export const addProductOrder = (product) => ({ type: ADD_PRODUCT_ORDER, product });
export const deleteProductOrder = (productDeleteId) => ({ type: DELETE_PRODUCT_ORDER, productDeleteId });
export const updateProductOrder = () => ({ type: UPDATE_PRODUCT_ORDER });
export const totalProducts = () => ({ type: TOTAL_PRODUCT, });

// user
export const setAuthUserData = (userId, login, email) => ({ type: SET_AUTH_USER_DATA, data: { userId, login, email } });

export const getAuthUserData = () => (dispatch) => {
  authAPI.getAuth()
    .then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
};

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

export const requestCurrentPage = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await goodsApi.getCurrentPage(pageNumber, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setGoods(data));
};
