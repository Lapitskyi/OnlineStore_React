import {
  BasketActionType,
} from './basket-type';

export const addProductOrder = (payload: any []) => ({ type: BasketActionType.ADD_PRODUCT_ORDER, payload });
export const deleteProductOrder = (payload: number) => (
  { type: BasketActionType.DELETE_PRODUCT_ORDER, payload });
export const updateProductOrder = () => ({ type: BasketActionType.UPDATE_PRODUCT_ORDER });
export const totalProducts = () => ({ type: BasketActionType.TOTAL_PRODUCT });
