import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import { themeToggle, toggleLang } from '../../redux/reducer/showAction-reducer';

const HeaderContainer = ({
  products,
  menu,
  langT,
  themeT,
  ...props
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuT, setMenuT] = useState(menu.en);

  const onShowMenu = () => {
    setShowMenu(!!showMenu === false);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  const langToggle = (langId) => {
    props.toggleLang(langId);
    setMenuT(menu[langId]);
  };

  const toggleTheme = () => {
    props.themeToggle();
  };

  return (
    <Header
      products={products}
      showMenu={showMenu}
      onShowMenu={onShowMenu}
      closeMenu={closeMenu}
      menu={menuT}
      langT={langT}
      langToggle={langToggle}
      toggleTheme={toggleTheme}
      themeT={themeT}
    />
  );
};

const mapStateToProps = ({ showAction, basket }) => ({
  menu: showAction.menu,
  langT: showAction.langT,
  themeT: showAction.themeT,
  products: basket.goodsOrder.products
});

export default compose(
  connect(mapStateToProps, { toggleLang, themeToggle })
)(HeaderContainer);

HeaderContainer.defaultProps = {
  products: [],
  menu: {
    en: []
  },
  langT: [],
  themeT: false,
  toggleLang: () => {
  },
  themeToggle: () => {
  }
};

HeaderContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  themeT: PropTypes.bool,
  menu: PropTypes.shape({
    en: PropTypes.arrayOf(PropTypes.object)
  }),
  langT: PropTypes.arrayOf(PropTypes.object),
  toggleLang: PropTypes.func,
  themeToggle: PropTypes.func
};
