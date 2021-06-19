import { HomeActionType } from './home-types';
import promotionsApi from '../../service/promotionsApi';

export const setPromotion = (payload: any[]) => ({ type: HomeActionType.SET_PROMOTIONS, payload });
export const setNewProducts = (payload: { title: string, product: any[] }) => (
  { type: HomeActionType.SET_NEW_PRODUCTS, payload });

export const requestPromotions = () => async (dispatch: any) => {
  const data = await promotionsApi.getPromotions();
  dispatch(setPromotion(data));
};

export const requestNewProducts = () => async (dispatch: any) => {
  const data = await promotionsApi.getNewProducts();
  dispatch(setNewProducts(data));
};
