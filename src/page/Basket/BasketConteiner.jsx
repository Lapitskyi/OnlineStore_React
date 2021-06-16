import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Basket from './Basket';
import { getGoodsOrder } from '../../redux/selector';
import { deleteProductOrder } from '../../redux/basket/basket-action';

const BasketContainer = ({ goodsOrder, ...props }) => {
  const deleteProduct = (productId) => {
    props.deleteProductOrder(productId);
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

const mapStateToProps = ({ basket }) => ({
  goodsOrder: getGoodsOrder(basket)
});

export default compose(
  connect(mapStateToProps, { deleteProductOrder })
)(BasketContainer);

BasketContainer.defaultProps = {
  goodsOrder: {},
  deleteProductOrder: () => {
  }
};
BasketContainer.propTypes = {
  goodsOrder: PropTypes.shape({
    product: PropTypes.arrayOf(PropTypes.object),
    goodsTotalPrice: PropTypes.number
  }),
  deleteProductOrder: PropTypes.func
};
