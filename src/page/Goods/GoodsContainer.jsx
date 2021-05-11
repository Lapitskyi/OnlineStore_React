import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Goods from './Goods';
import { getGoods } from '../../redux/goods-reducer';

const GoodsContainer = ({
  goods
}) => {
  getGoods();
  return (
    <Goods goods={goods} />
  );
};

const mapStateToProps = ({ goods }) => ({
  goods: goods.goods
});

export default compose(
  connect(mapStateToProps, { getGoods }),
  withRouter
)(GoodsContainer);

GoodsContainer.defaultProps = {
  goods: [],
};

GoodsContainer.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object),
};
