export interface HomeState {
  promotions: any [],
  newProduct: {
    title: string,
    products: any [],
  },
}

export enum HomeActionType {
  SET_PROMOTIONS = 'SET_PROMOTIONS',
  SET_NEW_PRODUCTS = 'SET_NEW_PRODUCTS',
}

interface SetPromotionsAction {
  type: HomeActionType.SET_PROMOTIONS,
  payload: any[]
}

interface SetNewProductsAction {
  type: HomeActionType.SET_NEW_PRODUCTS,
  payload: {
    title: string,
    products: any [],
  },
}

export type HomeAction = SetPromotionsAction | SetNewProductsAction;
