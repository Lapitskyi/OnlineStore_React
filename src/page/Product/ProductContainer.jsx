import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  useParams, useLocation
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  addProductOrder, productPrice, requestProduct, updateProduct
} from '../../redux/actions';
import Product from './Product';
import Preloader from '../../components/Preloader/Preloader';
import { getIsFetching, getProduct } from '../../redux/selector';
import constant from '../../assets/constants/constant';

const ProductContainer = () => {
  const { t } = useTranslation();

  const { productId } = useParams();
  const { pathname } = useLocation();

  const product = useSelector(({ goods }) => getProduct(goods));
  const isFetching = useSelector(({ goods }) => getIsFetching(goods));

  const dispatch = useDispatch();

  requestProduct(productId);

  const priceProduct = (count) => {
    dispatch(productPrice(count));
    dispatch(updateProduct(+productId));
  };

  const addProductBasket = (item) => {
    dispatch(addProductOrder(item));
  };

  return (
    <>
      {isFetching
        ? <Preloader />
        : (
          <Product
            t={t}
            product={product}
            productNav={constant.productNav}
            priceProduct={priceProduct}
            addProductBasket={addProductBasket}
            pathname={pathname}
          />
        )}
    </>
  );
};

export default compose(
)(ProductContainer);

ProductContainer.defaultProps = {
  product: {},
};

ProductContainer.propTypes = {
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
};
