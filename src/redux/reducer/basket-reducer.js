import {
  ADD_PRODUCT_ORDER,
  UPDATE_PRODUCT_ORDER,
  DELETE_PRODUCT_ORDER,
  TOTAL_PRODUCT
} from '../type';

const initialState = {
  goodsOrder: {
    products: [],
    goodsTotalPrice: null
  }
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_ORDER: {
      return {
        ...state,
        goodsOrder: {
          ...state.goodsOrder,
          products: [...state.goodsOrder.products, { id: 2, product: action.product }],
          goodsTotalPrice:
            [...state.goodsOrder.products]
              .reduce((prevPrice, currentPrice) => prevPrice + currentPrice.product.price, 0)
        }
      };
    }
    case DELETE_PRODUCT_ORDER: {
      return {
        ...state,
        goodsOrder: {
          ...state.goodsOrder,
          products:
            state.goodsOrder.products.filter((item) => item.id !== action.productDeleteId)
        },
      };
    }

    case UPDATE_PRODUCT_ORDER: {
      return {};
    }

    case TOTAL_PRODUCT: {
      return {};
    }

    default:
      return state;
  }
};

export default basketReducer;
