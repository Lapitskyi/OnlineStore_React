import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Basket from './Basket';

const BasketContainer = () => {
  const [count, setCount] = useState(0);

  const deleteProduct = () => {

  };
  const orderProduct = () => {

  };
  const continueShopping = () => {

  };

  const quantityProduct = () => {

  };

  return (
    <Basket
      products={undefined}
      deleteProduct={deleteProduct}
      orderProduct={orderProduct}
      continueShopping={continueShopping}
      count={count}
      setCount={setCount}
      quantityProduct={quantityProduct}
    />
  );
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps, {})
)(BasketContainer);
