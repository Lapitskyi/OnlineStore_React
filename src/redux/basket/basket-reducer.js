import {
  ADD_PRODUCT_ORDER,
  UPDATE_PRODUCT_ORDER,
  DELETE_PRODUCT_ORDER,
  TOTAL_PRODUCT
} from './basket-type';

const initialState = {
  goodsOrder: {
    products: [],
    goodsTotalPrice: null
  }
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    // Проверить при рабочей базе ADD_PRODUCT_ORDER
    case ADD_PRODUCT_ORDER: {
      if (state.goodsOrder.products.length !== 0) {
        return {
          ...state,
          goodsOrder: {
            ...state.goodsOrder,
            products: state.goodsOrder.products.map((productsItem) => {
              if (productsItem.id === action.product.id) {
                return {
                  ...productsItem,
                  count: productsItem.count + action.product.count,
                  price: productsItem.price + action.product.price
                };
              }
              return productsItem;
            }),
            goodsTotalPrice:
              state.goodsOrder.products.reduce((accum, item) => {
                return accum.price + item.price;
              }, 0)
          }
        };
      }

      return {
        ...state,
        goodsOrder: {
          ...state.goodsOrder,
          products: [...state.goodsOrder.products, action.product],
          goodsTotalPrice:
            state.goodsOrder.products.reduce((accum, item) => {
              return accum.price + item.price;
            }, 0)
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
