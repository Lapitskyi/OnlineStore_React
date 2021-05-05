const ADD_PRODUCT_ORDER = 'ADD_PRODUCT_ORDER';
const UPDATE_PRODUCT_ORDER = 'UPDATE_PRODUCT_ORDER';
const DELETE_PRODUCT_ORDER = 'DELETE_PRODUCT_ORDER';

const initialState = {
  goodsOrder: [
    {
      id: 1,
      productOrder: {
        id: '',
        name: '',
        img: '',
        color: '',
        size: '',
        countProduct: 0,
        priceProduct: 0
      },
      goodsTotalPrice: 0
    }
  ]
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_ORDER: {
      return {
        ...state, goodsOrder: [...state.goodsOrder, { id: 2, productOrder: action.productOrder }]
      };
    }
    case DELETE_PRODUCT_ORDER: {
      return {
        ...state, goodsOrder: [state.goodsOrder.filter((item) => item.id !== action.productDeleteId)]
      };
    }

    case UPDATE_PRODUCT_ORDER: {
      return {
      };
    }

    default:
      return state;
  }
};

export const addProductOrder = (productOrder) => ({ type: ADD_PRODUCT_ORDER, productOrder });
export const deleteProductOrder = (productDeleteId) => ({ type: DELETE_PRODUCT_ORDER, productDeleteId });
export const updateProductOrder = () => ({ type: UPDATE_PRODUCT_ORDER });

export default basketReducer;
