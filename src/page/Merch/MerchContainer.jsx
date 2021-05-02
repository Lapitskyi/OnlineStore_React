import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Merch from './Merch';
import './scss/Merch.scss';

const MerchContainer = ({ products }) => {
  return <Merch products={products} />;
};

const mapStateToProps = ({ productPage }) => ({
  products: productPage.products
});

export default compose(
  connect(mapStateToProps, {})
)(MerchContainer);

MerchContainer.defaultProps = {
  products: []
};

MerchContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};
