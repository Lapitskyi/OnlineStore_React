export interface BasketState {
  goodsOrder: {
    products: any [],
    goodsTotalPrice: number | null,
  },
}

export enum BasketActionType {
  ADD_PRODUCT_ORDER = 'ADD_PRODUCT_ORDER',
  UPDATE_PRODUCT_ORDER = 'UPDATE_PRODUCT_ORDER',
  DELETE_PRODUCT_ORDER = 'DELETE_PRODUCT_ORDER',
  TOTAL_PRODUCT = 'TOTAL_PRODUCT',
}

interface AddProductOrderAction {
  type: BasketActionType.ADD_PRODUCT_ORDER,
  payload: any
}

interface UpdateProductOrderAction {
  type: BasketActionType.UPDATE_PRODUCT_ORDER,
  payload: number
}

interface DeleteProductOrderAction {
  type: BasketActionType.DELETE_PRODUCT_ORDER,
  payload: number
}

interface TotalProductAction {
  type: BasketActionType.TOTAL_PRODUCT,
  payload: number
}

export type BasketAction =
  AddProductOrderAction
  | UpdateProductOrderAction
  | DeleteProductOrderAction
  | TotalProductAction;
