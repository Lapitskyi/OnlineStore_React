import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import MenuShowContext from './MenuShowContext';

const HeaderContainer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onShowMenu = () => {
    setShowMenu(!!showMenu === false);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <MenuShowContext.Provider value={{
      showMenu,
      onShowMenu,
      closeMenu
    }}
    >
      <Header />
    </MenuShowContext.Provider>

  );
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps, {})
)(HeaderContainer);

HeaderContainer.defaultProps = {};

HeaderContainer.propTypes = {};
