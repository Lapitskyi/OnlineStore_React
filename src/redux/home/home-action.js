import { SET_PROMOTIONS, SET_NEW_PRODUCTS } from './home-types';
import promotionsApi from '../../service/promotionsApi';

export const setPromotion = (promotions) => ({ type: SET_PROMOTIONS, promotions });
export const setNewProducts = (products) => ({ type: SET_NEW_PRODUCTS, products });

export const requestPromotions = () => async (dispatch) => {
  const data = await promotionsApi.getPromotions();
  dispatch(setPromotion(data));
};

export const requestNewProducts = () => async (dispatch) => {
  const data = await promotionsApi.getNewProducts();
  dispatch(setNewProducts(data));
};
