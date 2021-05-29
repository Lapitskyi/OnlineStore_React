import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import goodsReducer from './reducer/goods-reducer';
import authReducer from './reducer/auth-reducer';
import basketReducer from './reducer/basket-reducer';
import showActionReducer from './reducer/showAction-reducer';

const reducers = combineReducers({
  showAction: showActionReducer,
  goods: goodsReducer,
  basket: basketReducer,
  auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
