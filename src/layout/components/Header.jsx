import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import NavAction from './NavAction';
import Menu from './Menu';
import '../scss/Header.scss';

const Header = ({ showMenu, onShowMenu, closeMenu }) => {
  return (
    <section className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Menu showMenu={showMenu} onShowMenu={onShowMenu} closeMenu={closeMenu} />
          <NavAction />
        </div>
      </div>
    </section>
  );
};
Header.defaultProps = {
  showMenu: false,
  onShowMenu: () => {
  },
  closeMenu: () => {
  }
};
Header.propTypes = {
  showMenu: PropTypes.bool,
  onShowMenu: PropTypes.func,
  closeMenu: PropTypes.func
};

export default Header;
