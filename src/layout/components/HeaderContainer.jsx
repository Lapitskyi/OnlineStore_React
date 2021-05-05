import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';

const HeaderContainer = ({ menu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const onShowMenu = () => {
    setShowMenu(!!showMenu === false);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return <Header showMenu={showMenu} onShowMenu={onShowMenu} closeMenu={closeMenu} menu={menu.en} />;
};

const mapStateToProps = ({ lang }) => ({
  menu: lang.menu
});

export default compose(
  connect(mapStateToProps, {})
)(HeaderContainer);

HeaderContainer.defaultProps = {
  menu: []
};

HeaderContainer.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object)
};
