const ADD_PRODUCT_ORDER = 'ADD_PRODUCT_ORDER';
const UPDATE_PRODUCT_ORDER = 'UPDATE_PRODUCT_ORDER';
const DELETE_PRODUCT_ORDER = 'DELETE_PRODUCT_ORDER';

const initialState = {
  goodsOrder: {
    products: [
      {
        id: 1,
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
        }
      }],
    goodsTotalPrice: 500
  }

};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_ORDER: {
      return {
        ...state,
        ...state.goodsOrder,
        ...state.goodsOrder.products,
        products: [...state.goodsOrder.products, { orderId: 2, product: action.product }]
      };
    }
    case DELETE_PRODUCT_ORDER: {
      return {
        ...state,
        ...state.goodsOrder,
        products: [state.goodsOrder.products.filter((item) => item.product.id !== action.productDeleteId)]
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

export default basketReducer;
