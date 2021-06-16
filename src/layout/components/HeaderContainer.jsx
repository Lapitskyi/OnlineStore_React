import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Header from './Header';
import useShowMenu from '../../useHook/useShowMenu';
import { getBasketProduct } from '../../redux/selector';

const HeaderContainer = ({
  theme, lang, toggleLang, toggleTheme
}) => {
  const { showMenu, onShowMenu, closeMenu } = useShowMenu(false);
  const products = useSelector(({ basket: { goodsOrder } }) => getBasketProduct(goodsOrder));
  
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

export default HeaderContainer;

HeaderContainer.defaultProps = {
  theme: false,
  lang: [],
  toggleTheme: () => {
  },
  toggleLang: () => {
  }
};

HeaderContainer.propTypes = {
  theme: PropTypes.bool,
  lang: PropTypes.arrayOf(PropTypes.object),
  toggleTheme: PropTypes.func,
  toggleLang: PropTypes.func
};
