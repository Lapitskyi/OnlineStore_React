import { SET_PROMOTIONS, SET_NEW_PRODUCTS } from './home-types';

const initialState = {
  promotions: [],
  newProduct: {
    title: 'Новинки',
    products: []
  }
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROMOTIONS:
      return {
        ...state
      };
    case SET_NEW_PRODUCTS:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default homeReducer;
