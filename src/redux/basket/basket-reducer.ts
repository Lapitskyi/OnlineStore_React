import {
  BasketActionType, BasketState, BasketAction,
} from './basket-type';

const initialState:BasketState = {
  goodsOrder: {
    products: [],
    goodsTotalPrice: null,
  },
};

const basketReducer = (state = initialState, action:BasketAction):BasketState => {
  switch (action.type) {
    // Проверить при рабочей базе ADD_PRODUCT_ORDER
    case BasketActionType.ADD_PRODUCT_ORDER: {
      if (state.goodsOrder.products.length !== 0) {
        return {
          ...state,
          goodsOrder: {
            ...state.goodsOrder,
            products: state.goodsOrder.products.map((productsItem: { id: any; count: any; price: any; }) => {
              if (productsItem.id === action.payload) {
                return {
                  ...productsItem,
                  count: productsItem.count + action.payload.product.count,
                  price: productsItem.price + action.payload.product.price,
                };
              }
              return productsItem;
            }),
            goodsTotalPrice:
              state.goodsOrder.products.reduce((accum: { price: any; }, item: { price: any; }) => {
                return accum.price + item.price;
              }, 0),
          },
        };
      }

      return {
        ...state,
        goodsOrder: {
          ...state.goodsOrder,
          products: [...state.goodsOrder.products, action.payload],
          goodsTotalPrice:
            state.goodsOrder.products.reduce((accum: { price: any; }, item: { price: any; }) => {
              return accum.price + item.price;
            }, 0),
        },
      };
    }
    case BasketActionType.DELETE_PRODUCT_ORDER: {
      return {
        ...state,
        goodsOrder: {
          ...state.goodsOrder,
          products:
            state.goodsOrder.products.filter((item: { id: number; }) => item.id !== action.payload),
        },
      };
    }

    case BasketActionType.UPDATE_PRODUCT_ORDER: {
      return {
        ...state,
      };
    }

    case BasketActionType.TOTAL_PRODUCT: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default basketReducer;
