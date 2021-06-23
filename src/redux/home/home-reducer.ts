import { HomeActionType, HomeAction, HomeState } from './home-types';

const initialState: HomeState = {
  promotions: [
    {
      id: 1, img: 'https://via.placeholder.com/500', alt: 'promo', path: '',
    },
    {
      id: 2, img: 'https://via.placeholder.com/700', alt: 'promo', path: '',
    },
    {
      id: 3, img: 'https://via.placeholder.com/800', alt: 'promo', path: '',
    },
    {
      id: 4, img: 'https://via.placeholder.com/1000', alt: 'promo', path: '',
    },
  ],
  popular: [
    {
      id: 1, img: 'https://via.placeholder.com/500', alt: 'promo', path: '', name: 'product', price: 500, val: 'грн',
    },
    {
      id: 2, img: 'https://via.placeholder.com/700', alt: 'promo', path: '', name: 'product', price: 600, val: 'грн',
    },
    {
      id: 3, img: 'https://via.placeholder.com/800', alt: 'promo', path: '', name: 'product', price: 700, val: 'грн',
    },
    {
      id: 4, img: 'https://via.placeholder.com/1000', alt: 'promo', path: '', name: 'product', price: 800, val: 'грн',
    },
    {
      id: 5, img: 'https://via.placeholder.com/1000', alt: 'promo', path: '', name: 'product', price: 800, val: 'грн',
    },
  ],
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
