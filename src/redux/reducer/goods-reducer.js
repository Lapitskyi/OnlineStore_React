import {
  SET_PRODUCT,
  SET_GOODS,
  TOGGLE_ISFETCHING,
  SET_CURRENT_PAGE,
  SET_GOODS_TOTAL_COUNT,
  SET_PRODUCT_PRICE
} from '../type';

const initialState = {
  goods: [
    {
      id: 1,
      name: 'Name product_1',
      price: 100,
      count: 1,
      photo: 'https://via.placeholder.com/400x350',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 2,
      name: 'Name product_2',
      price: 200,
      count: 1,
      photo: 'https://via.placeholder.com/400',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 3,
      name: 'Name product_3',
      price: 300,
      count: 1,
      photo: 'https://via.placeholder.com/350',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 4,
      name: 'Name product_1',
      price: 100,
      count: 1,
      photo: 'https://via.placeholder.com/400x350',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 5,
      name: 'Name product_2',
      price: 200,
      count: 1,
      photo: 'https://via.placeholder.com/400',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 6,
      name: 'Name product_3',
      price: 300,
      count: 1,
      photo: 'https://via.placeholder.com/350',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
  ],
  product: {
    id: 1,
    name: 'Name product',
    price: 0,
    count: 1,
    photo: 'https://via.placeholder.com/400x350',
    photoCollection: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/300',
      '',
      'https://via.placeholder.com/400'
    ],
    size: {
      s: true,
      m: true,
      l: false,
      xl: true,
      xxl: true,
      xxxl: false,
    },
    description: [],
  },
  pageSize: 5,
  portionSize: 10,
  totalCount: 5,
  currentPage: 1,
  isFetching: false,
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS: {
      return {
        ...state, goods: action.goods
      };
    }

    case SET_PRODUCT: {
      return {
        ...state, product: action.product
      };
    }
    case SET_PRODUCT_PRICE: {
      return {
        ...state,
        product: {
          ...state.product,
          count: action.productCount,
          // price: state.product.count * action.product.price
          price: action.productCount * 500
        }
      };
    }

    case TOGGLE_ISFETCHING: {
      return {
        ...state, isFetching: action.isFetching
      };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.PageNumber };
    }

    case SET_GOODS_TOTAL_COUNT: {
      return {
        ...state, totalCount: action.totalCount
      };
    }

    default:
      return state;
  }
};

export default goodsReducer;
