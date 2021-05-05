import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Goods from './Goods';

const GoodsContainer = ({ goods }) => {
  return <Goods goods={goods} />;
};

const mapStateToProps = ({ goods }) => ({
  goods: goods.goods
});

export default compose(
  connect(mapStateToProps, {}),
  withRouter
)(GoodsContainer);

GoodsContainer.defaultProps = {
  goods: [],
};

GoodsContainer.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object),
};
