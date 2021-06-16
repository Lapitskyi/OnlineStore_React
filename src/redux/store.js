import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import goodsReducer from './goods/goods-reducer';
import authReducer from './auth/auth-reducer';
import basketReducer from './basket/basket-reducer';

const reducers = combineReducers({
  goods: goodsReducer,
  basket: basketReducer,
  auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
