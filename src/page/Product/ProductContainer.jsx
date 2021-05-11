import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addProductOrder } from '../../redux/basket-reducer';
import Product from './Product';
import { getProduct } from '../../redux/goods-reducer';
import Preloader from '../../components/Preloader';

const ProductContainer = ({
  isFetching,
  product,
  match: {
    params: {
      productId
    }
  },
  ...props
}) => {
  getProduct(productId);
  const addProductBasket = (item) => {
    props.addProductOrder(item);
  };
  return (
    <>
      { isFetching
        ? <Preloader />
        : <Product product={product} addProductBasket={addProductBasket} />}
    </>
  );
};

const mapStateToProps = ({ goods }) => ({
  product: goods.product,
  isFetching: goods.isFetching
});

export default compose(
  connect(mapStateToProps, { addProductOrder, getProduct }),
  withRouter
)(ProductContainer);

ProductContainer.defaultProps = {
  isFetching: false,
  match: {
    params: {
      productId: 0
    }
  },
  product: {},
  addProductOrder: () => {}
};

ProductContainer.propTypes = {
  isFetching: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string
    })
  }),
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    photo: PropTypes.string,
    photoCollection: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.arrayOf(PropTypes.string),
  }),
  addProductOrder: PropTypes.func
};
