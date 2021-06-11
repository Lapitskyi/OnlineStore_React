import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addProductOrder, productPrice, requestProduct } from '../../redux/actions';
import Product from './Product';
import Preloader from '../../components/Preloader/Preloader';
import { getIsFetching, getProduct } from '../../redux/selector';

const ProductContainer = ({
  isFetching,
  product,
  match: {
    params: {
      productId
    }
  },
  location: {
    pathname
  },
  ...props
}) => {
  requestProduct(productId);
  const addProductBasket = (item) => {
    props.addProductOrder(item);
  };

  const productCounterPrice = (id, countType) => {
    console.log(id, countType);
    props.productPrice();
  };
  return (
    <>
      {isFetching
        ? <Preloader />
        : (
          <Product
            product={product}
            addProductBasket={addProductBasket}
            pathname={pathname}
            productCounterPrice={productCounterPrice}
          />
        )}
    </>
  );
};

const mapStateToProps = ({ goods }) => ({
  product: getProduct(goods),
  isFetching: getIsFetching(goods)
});

export default compose(
  connect(mapStateToProps, { addProductOrder, requestProduct, productPrice }),
  withRouter
)(ProductContainer);

ProductContainer.defaultProps = {
  isFetching: false,
  match: {
    params: {
      productId: 0
    }
  },
  location: {
    pathname: ''
  },
  product: {},
  addProductOrder: () => {
  },
  productPrice: () => {
  }
};

ProductContainer.propTypes = {
  isFetching: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string
    })
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    photo: PropTypes.string,
    photoCollection: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.shape({}),
    description: PropTypes.arrayOf(PropTypes.string),
  }),
  addProductOrder: PropTypes.func,
  productPrice: PropTypes.func
};
