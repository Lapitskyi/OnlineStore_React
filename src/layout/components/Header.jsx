import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import Menu from './Menu';
import NavAction from './NavAction';
import '../scss/Header.scss';

const Header = ({ isMenuShow, onShowMenu, closeMenu }) => {
  return (
    <section className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Menu isMenuShow={isMenuShow} onShowMenu={onShowMenu} closeMenu={closeMenu} />
          <NavAction />
        </div>
      </div>
    </section>
  );
};

Header.defaultProps = {
  isMenuShow: false,
  onShowMenu: () => {
  },
  closeMenu: () => {
  }
};
Header.propTypes = {
  isMenuShow: PropTypes.bool,
  onShowMenu: PropTypes.func,
  closeMenu: PropTypes.func
};

export default Header;
