import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Basket from './Basket';
import { deleteProductOrder } from '../../redux/basket-reducer';

const BasketContainer = ({ goodsOrder, ...props }) => {
  const deleteProduct = (productId) => {
    props.deleteProductOrder(productId);
    console.log(productId);
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
  goodsOrder: basket.goodsOrder
});

export default compose(
  connect(mapStateToProps, { deleteProductOrder })
)(BasketContainer);

BasketContainer.defaultProps = {
  goodsOrder: {},
  deleteProductOrder: () => {}
};
BasketContainer.propTypes = {
  goodsOrder: PropTypes.shape({
    product: PropTypes.arrayOf(PropTypes.object),
    goodsTotalPrice: PropTypes.number
  }),
  deleteProductOrder: PropTypes.func
};
