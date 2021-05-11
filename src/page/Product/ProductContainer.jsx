import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addProductOrder } from '../../redux/basket-reducer';
import Product from './Product';

const ProductContainer = ({
  product,
  match: {
    params: {
      productId
    }
  },
  ...props
}) => {
  console.log(productId);

  const addProductBasket = (item) => {
    props.addProductOrder(item);
  };
  return (
    <Product product={product} addProductBasket={addProductBasket} />
  );
};

const mapStateToProps = ({ goods }) => ({
  product: goods.product
});

export default compose(
  connect(mapStateToProps, { addProductOrder }),
  withRouter
)(ProductContainer);

ProductContainer.defaultProps = {
  match: {
    params: {
      productId: 0
    }
  },
  product: {},
  addProductOrder: () => {}
};

ProductContainer.propTypes = {
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
