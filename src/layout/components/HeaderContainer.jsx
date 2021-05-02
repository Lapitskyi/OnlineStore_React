import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';

const HeaderContainer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onShowMenu = () => {
    setShowMenu(!!showMenu === false);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return <Header showMenu={showMenu} onShowMenu={onShowMenu} closeMenu={closeMenu} />;
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps, {})
)(HeaderContainer);

HeaderContainer.defaultProps = {
};

HeaderContainer.propTypes = {
};
