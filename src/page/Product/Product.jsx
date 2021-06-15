import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductNav from './components/ProductNav';
import AboutProduct from './components/AboutProduct';

import './scss/Product.scss';

const Product = ({
  product, addProductBasket, pathname, productNav, t, priceProduct
}) => {
  console.log(product);
  return (
    <>
      <div className="container">
        <BreadCrumbs pathname={pathname} name="nameProduct" />
        <ProductNav productNav={productNav} t={t} />
        <Switch>
          <Route
            path={`${pathname}`}
            exact
            render={() => (
              <AboutProduct
                product={product}
                addProductBasket={addProductBasket}
                priceProduct={priceProduct}
              />
            )}
          />
          <Redirect to={`${pathname}`} />
        </Switch>
      </div>
    </>
  );
};

Product.defaultProps = {
  product: {},
  productNav: [],
  t: {},
  addProductBasket: () => {
  },
  priceProduct: () => {
  },
  pathname: ''
};
Product.propTypes = {
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
  addProductBasket: PropTypes.func,
  pathname: PropTypes.string,
  productNav: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func,
  priceProduct: PropTypes.func,
};

export default Product;
