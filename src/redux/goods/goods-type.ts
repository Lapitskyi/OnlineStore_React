export interface GoodsState {
  goods: any [],
  product: any | null,
  pageSize: number,
  portionSize: number,
  totalCount: number,
  currentPage: number,
  isFetching: boolean,
}

export enum GoodsActionType {
  SET_PRODUCT = 'SET_PRODUCT',
  SET_PRODUCT_PRICE = 'SET_PRODUCT_PRICE',
  SET_GOODS = 'SET_PRODUCT',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_GOODS_TOTAL_COUNT = 'SET_GOODS_TOTAL_COUNT',
  TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
}

interface SetProductAction {
  type: GoodsActionType.SET_PRODUCT,
  payload: any
}

interface SetProductPriceAction {
  type: GoodsActionType.SET_PRODUCT_PRICE,
  payload: {
    productCount: number,
    product: number
  }
}

interface SetGoodsAction {
  type: GoodsActionType.SET_GOODS,
  payload: any
}

interface SetCurrentPageAction {
  type: GoodsActionType.SET_CURRENT_PAGE,
  payload: number
}

interface SetGoodsTotalCountAction {
  type: GoodsActionType.SET_GOODS_TOTAL_COUNT,
  payload: number
}

interface ToggleIsFetching {
  type: GoodsActionType.TOGGLE_IS_FETCHING,
  payload: boolean
}

export type GoodsAction =
  SetProductAction
  | SetProductPriceAction
  | SetGoodsAction
  | SetCurrentPageAction
  | SetGoodsTotalCountAction
  | ToggleIsFetching;
