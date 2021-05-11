import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Goods from './Goods';
import { addProductOrder } from '../../redux/basket-reducer';

const GoodsContainer = ({
  goods
}) => {
  return (
    <Goods goods={goods} />
  );
};

const mapStateToProps = ({ goods }) => ({
  goods: goods.goods
});

export default compose(
  connect(mapStateToProps, { addProductOrder }),
  withRouter
)(GoodsContainer);

GoodsContainer.defaultProps = {
  goods: [],
};

GoodsContainer.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object),
};
