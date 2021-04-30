import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { closeShowMenu, showMenu } from '../../redux/menu-reducer';
import Header from './Header';

const HeaderContainer = ({ isMenuShow, ...props }) => {
  const onShowMenu = () => {
    props.showMenu(isMenuShow);
  };
  const closeMenu = () => {
    props.closeShowMenu();
  };

  return <Header isMenuShow={isMenuShow} onShowMenu={onShowMenu} closeMenu={closeMenu} />;
};

const mapStateToProps = ({ menu }) => ({
  isMenuShow: menu.isMenuShow
});

export default compose(
  connect(mapStateToProps, { showMenu, closeShowMenu })
)(HeaderContainer);

HeaderContainer.defaultProps = {
  isMenuShow: false,
  showMenu: () => {
  },
  closeShowMenu: () => {
  },
};

HeaderContainer.propTypes = {
  isMenuShow: PropTypes.bool,
  showMenu: PropTypes.func,
  closeShowMenu: PropTypes.func,
};
