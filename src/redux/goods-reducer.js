const SET_PRODUCT = 'SET_PRODUCT';
const SET_GOODS = 'SET_PRODUCT';

const initialState = {
  goods: [
    {
      id: 1,
      name: 'Name product',
      price: '100',
      photo: 'https://via.placeholder.com/400x350',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 2,
      name: 'Name product',
      price: '200',
      photo: 'https://via.placeholder.com/400',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 3,
      name: 'Name product',
      price: '30',
      photo: 'https://via.placeholder.com/350',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 4,
      name: 'Name product',
      price: '30',
      photo: 'https://via.placeholder.com/200',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
    {
      id: 5,
      name: 'Name product',
      price: '200',
      photo: 'https://via.placeholder.com/600',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: {}
    },
  ],
  product: {
    id: 1,
    name: 'Name product',
    price: '500',
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

    default:
      return state;
  }
};

export const setGoods = (goods) => ({ type: SET_PRODUCT, goods });
export const setProduct = (product) => ({ type: SET_PRODUCT, product });

export default goodsReducer;
