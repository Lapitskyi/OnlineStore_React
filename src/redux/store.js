import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import menuReducer from './menu-reducer';
import productReducer from './product-reducer';
import authReducer from './auth-reducer';

const reducers = combineReducers({
  menu: menuReducer,
  productPage: productReducer,
  auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
