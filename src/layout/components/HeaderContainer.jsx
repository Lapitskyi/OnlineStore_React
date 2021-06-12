import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import useShowMenu from '../../useHook/useShowMenu';

const HeaderContainer = ({
  products,
  theme, lang, toggleLang, toggleTheme
}) => {
  const { showMenu, onShowMenu, closeMenu } = useShowMenu(false);

  return (
    <Header
      products={products}
      showMenu={showMenu}
      onShowMenu={onShowMenu}
      closeMenu={closeMenu}
      theme={theme}
      lang={lang}
      toggleTheme={toggleTheme}
      toggleLang={toggleLang}
    />
  );
};

const mapStateToProps = ({ basket }) => ({
  products: basket.goodsOrder.products
});

export default compose(
  connect(mapStateToProps, {})
)(HeaderContainer);

HeaderContainer.defaultProps = {
  products: [],
  theme: false,
  lang: [],
  toggleTheme: () => {
  },
  toggleLang: () => {
  }
};

HeaderContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),

  theme: PropTypes.bool,
  lang: PropTypes.arrayOf(PropTypes.object),
  toggleTheme: PropTypes.func,
  toggleLang: PropTypes.func
};
