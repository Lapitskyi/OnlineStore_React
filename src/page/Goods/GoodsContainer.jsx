import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Goods from './Goods';
import Product from './components/Product';
import { addProductOrder } from '../../redux/basket-reducer';

const GoodsContainer = ({
  goods,
  product,
  ...props
}) => {
  const addProductBasket = (item) => {
    props.addProductOrder(item);
  };
  return (
    <>
      <Route exact path="/goods" render={() => <Goods goods={goods} />} />
      <Route
        path="/goods/:productId"
        render={() => <Product product={product} addProductBasket={addProductBasket} />}
      />
    </>
  );
};

const mapStateToProps = ({ goods }) => ({
  goods: goods.goods,
  product: goods.product
});

export default compose(
  connect(mapStateToProps, { addProductOrder }),
  withRouter
)(GoodsContainer);

GoodsContainer.defaultProps = {
  productId: 0,
  goods: [],
  product: {},
  addProductOrder: () => {}
};

GoodsContainer.propTypes = {
  productId: PropTypes.number,
  goods: PropTypes.arrayOf(PropTypes.object),
  product: PropTypes.shape([]),
  addProductOrder: PropTypes.func
};
