import goodsApi from '../service/goodsApi';

const SET_PRODUCT = 'SET_PRODUCT';
const SET_GOODS = 'SET_PRODUCT';
const TOGGLE_ISFETCHING = 'SET_ISFETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_GOODS_TOTAL_COUNT = 'SET_GOODS_TOTAL_COUNT';

const initialState = {
  goods: [
    {
      id: 1,
      name: 'Name product_1',
      price: '100',
      photo: 'https://via.placeholder.com/400x350',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 2,
      name: 'Name product_2',
      price: '200',
      photo: 'https://via.placeholder.com/400',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 3,
      name: 'Name product_3',
      price: '300',
      photo: 'https://via.placeholder.com/350',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 4,
      name: 'Name product_4',
      price: '400',
      photo: 'https://via.placeholder.com/200',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 5,
      name: 'Name product_5',
      price: '500',
      photo: 'https://via.placeholder.com/600',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
  ],
  product: {
    id: 1,
    name: 'Name product',
    price: 500,
    photo: 'https://via.placeholder.com/400x350',
    photoCollection: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/400'
    ],
    size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
    description: [],
  },
  pageSize: 5,
  totalCount: 0,
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
    case TOGGLE_ISFETCHING: {
      return {
        ...state, isFetching: action.isFetching
      };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
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

export const setGoods = (goods) => ({ type: SET_PRODUCT, goods });
export const setProduct = (product) => ({ type: SET_PRODUCT, product });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_ISFETCHING, isFetching });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setGoodsTotalCount = (totalCount) => ({ type: SET_GOODS_TOTAL_COUNT, totalCount });

export default goodsReducer;

export const getGoods = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    goodsApi.getGoods(currentPage, pageSize)
      .then((data) => {
        dispatch(toggleIsFetching(false));
        dispatch(setGoods(data));
      });
  };
};

export const getProduct = (productId) => {
  return (dispatch) => {
    goodsApi.getProduct(productId)
      .then((data) => {
        dispatch(setProduct(data));
      });
  };
};

export const getCurrentPage = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    goodsApi.getCurrentPage(pageNumber, pageSize)
      .then((data) => {
        dispatch(toggleIsFetching(false));
        dispatch(setGoods(data));
      });
  };
};
