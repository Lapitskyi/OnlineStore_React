import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Basket from './Basket';
import { getGoodsOrder } from '../../redux/selector';
import { deleteProductOrder } from '../../redux/basket/basket-action';
import { AppStateType } from '../../redux/store';

const BasketContainer = () => {
  const goodsOrder = useSelector(({ basket }: AppStateType) => getGoodsOrder(basket));
  const dispatch = useDispatch();

  const deleteProduct = (productId: number) => {
    dispatch(deleteProductOrder(productId));
  };

  const orderProduct = () => {

  };
  const continueShopping = () => {

  };

  const quantityProduct = () => {

  };
  return (
    <Basket
      goodsOrder={goodsOrder}
      deleteProduct={deleteProduct}
      orderProduct={orderProduct}
      continueShopping={continueShopping}
      quantityProduct={quantityProduct}
    />
  );
};

export default BasketContainer;
