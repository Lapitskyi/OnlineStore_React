import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  useParams, useLocation
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { addProductOrder, requestProduct } from '../../redux/actions';
import Product from './Product';
import Preloader from '../../components/Preloader/Preloader';
import { getIsFetching, getProduct } from '../../redux/selector';
import constant from '../../assets/constants/constant';

const ProductContainer = ({
  isFetching,
  product,
  ...props
}) => {
  const { productId } = useParams();
  const { pathname } = useLocation();

  const { t } = useTranslation();
  requestProduct(productId);
  const addProductBasket = (item) => {
    props.addProductOrder(item);
  };

  return (
    <>
      {isFetching
        ? <Preloader />
        : (
          <Product
            product={product}
            productNav={constant.productNav}
            t={t}
            addProductBasket={addProductBasket}
            pathname={pathname}
          />
        )}
    </>
  );
};

const mapStateToProps = ({ goods }) => ({
  product: getProduct(goods),
  isFetching: getIsFetching(goods),
});

export default compose(
  connect(mapStateToProps, { addProductOrder, requestProduct, }),
)(ProductContainer);

ProductContainer.defaultProps = {
  isFetching: false,
  product: {},
  addProductOrder: () => {
  },
  productPrice: () => {
  }
};

ProductContainer.propTypes = {
  isFetching: PropTypes.bool,

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
  productPrice: PropTypes.func,
};
