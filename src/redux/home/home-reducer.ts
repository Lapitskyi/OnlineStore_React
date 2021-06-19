import { HomeActionType, HomeAction, HomeState } from './home-types';

const initialState: HomeState = {
  promotions: [],
  newProduct: {
    title: 'Новинки',
    products: [],
  },
};

const homeReducer = (state = initialState, action:HomeAction):HomeState => {
  switch (action.type) {
    case HomeActionType.SET_PROMOTIONS:
      return {
        ...state,
      };
    case HomeActionType.SET_NEW_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default homeReducer;
