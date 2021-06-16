import {
  ADD_PRODUCT_ORDER, DELETE_PRODUCT_ORDER, TOTAL_PRODUCT, UPDATE_PRODUCT_ORDER 
} from './basket-type';

export const addProductOrder = (product) => ({ type: ADD_PRODUCT_ORDER, product });
export const deleteProductOrder = (productDeleteId) => ({ type: DELETE_PRODUCT_ORDER, productDeleteId });
export const updateProductOrder = () => ({ type: UPDATE_PRODUCT_ORDER });
export const totalProducts = () => ({ type: TOTAL_PRODUCT, });
