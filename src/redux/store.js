import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import goodsReducer from './goods-reducer';
import authReducer from './auth-reducer';
import basketReducer from './basket-reducer';
import showActionReducer from './showAction-reducer';

const reducers = combineReducers({
  showAction: showActionReducer,
  goods: goodsReducer,
  basket: basketReducer,
  auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
