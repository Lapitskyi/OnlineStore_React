import * as BasketActionCreator from './basket/basket-action';
import * as AuthActionCreator from './auth/auth-action';
import * as GoodsActionCreator from './goods/goods-action';
import * as HomeActionCreator from './home/home-action';

export default {
  ...AuthActionCreator,
  ...BasketActionCreator,
  ...HomeActionCreator,
  ...GoodsActionCreator,
};
