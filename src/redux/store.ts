import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import goodsReducer from './goods/goods-reducer';
import authReducer from './auth/auth-reducer';
import basketReducer from './basket/basket-reducer';
import homeReducer from './home/home-reducer';

const reducer = combineReducers({
  goods: goodsReducer,
  basket: basketReducer,
  auth: authReducer,
  home: homeReducer,
});

export type AppStateType = ReturnType<typeof reducer>;

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
