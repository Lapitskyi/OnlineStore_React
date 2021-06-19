import goodsApi from '../../service/goodsApi';
import { GoodsActionType } from './goods-type';

export const toggleIsFetching = (payload: boolean) => ({ type: GoodsActionType.TOGGLE_IS_FETCHING, payload });

export const setGoods = (payload: any) => ({ type: GoodsActionType.SET_GOODS, payload });
export const setProduct = (payload: any) => ({ type: GoodsActionType.SET_PRODUCT, payload });
export const productPrice = (payload: { productCount: number, product: any }) => (
  { type: GoodsActionType.SET_PRODUCT_PRICE, payload });

// page goods
export const setCurrentPage = (payload: number) => ({ type: GoodsActionType.SET_CURRENT_PAGE, payload });
export const setGoodsTotalCount = (payload: number) => ({ type: GoodsActionType.SET_GOODS_TOTAL_COUNT, payload });

export const requestGoods = (currentPage:number, pageSize: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  const data = await goodsApi.getGoods(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setGoods(data));
};

export const requestProduct = (productId: number) => async (dispatch: any) => {
  const data = await goodsApi.getProduct(productId);
  dispatch(setProduct(data));
};

// !!!!!!complete the functionality(Доделать/проверить функционал)
export const updateProduct = (productId: number) => async (dispatch:any) => {
  const data = await goodsApi.getProduct(productId);
  dispatch(productPrice(data));
};

export const requestCurrentPage = (pageNumber: number, pageSize: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  const data = await goodsApi.getCurrentPage(pageNumber, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setGoods(data));
};
