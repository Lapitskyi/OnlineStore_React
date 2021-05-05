import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  Redirect, Route, Switch, withRouter
} from 'react-router-dom';
import Goods from './Goods';
import Product from './components/Product';

const GoodsContainer = ({
  goods,
  match: {
    params: {
      productId
    }
  }
}) => {
  console.log(productId);
  return (
    <Switch>
      <Route exact path="/goods" render={() => <Goods goods={goods} />} />
      <Route path="/goods/:productId" render={() => <Product goods={goods} />} />
      <Redirect to="/goods" />
    </Switch>
  );
};

const mapStateToProps = ({ goods }) => ({
  goods: goods.goods
});

export default compose(
  connect(mapStateToProps, {}),
  withRouter
)(GoodsContainer);

GoodsContainer.defaultProps = {
  match: {
    params: {
      productId: 0
    }
  },
  goods: [],
};

GoodsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.number
    })
  }),
  goods: PropTypes.arrayOf(PropTypes.object),
};
