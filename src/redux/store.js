import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import goodsReducer from './goods-reducer';
import authReducer from './auth-reducer';
import basketReducer from './basket-reducer';
import translateReducer from './translate-reducer';

const reducers = combineReducers({
  translate: translateReducer,
  goods: goodsReducer,
  basket: basketReducer,
  auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
