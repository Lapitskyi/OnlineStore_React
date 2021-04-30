import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import menuReducer from './menu-reducer';

const reducers = combineReducers({
  menu: menuReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
