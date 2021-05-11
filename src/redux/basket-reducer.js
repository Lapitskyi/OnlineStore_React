const ADD_PRODUCT_ORDER = 'ADD_PRODUCT_ORDER';
const UPDATE_PRODUCT_ORDER = 'UPDATE_PRODUCT_ORDER';
const DELETE_PRODUCT_ORDER = 'DELETE_PRODUCT_ORDER';
const TOTAL_PRODUCT = 'TOTAL_PRODUCT';

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
          goodsTotalPrice: [1, 2, 2].reduce((acc, cur) => {
            return console.log(acc + cur);
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

    default:
      return state;
  }
};

export const addProductOrder = (product) => ({ type: ADD_PRODUCT_ORDER, product });
export const deleteProductOrder = (productDeleteId) => ({ type: DELETE_PRODUCT_ORDER, productDeleteId });
export const updateProductOrder = () => ({ type: UPDATE_PRODUCT_ORDER });
export const totalProducts = () => ({ type: TOTAL_PRODUCT, });

export default basketReducer;
