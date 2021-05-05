import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import NavAction from './NavAction';
import Menu from './Menu';
import '../scss/Header.scss';

const Header = ({
  showMenu, 
  onShowMenu,
  closeMenu, 
  menu 
}) => {
  return (
    <section className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Menu showMenu={showMenu} onShowMenu={onShowMenu} closeMenu={closeMenu} menu={menu} />
          <NavAction />
        </div>
      </div>
    </section>
  );
};
Header.defaultProps = {
  menu: [],
  showMenu: false,
  onShowMenu: () => {
  },
  closeMenu: () => {
  }
};
Header.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
  showMenu: PropTypes.bool,
  onShowMenu: PropTypes.func,
  closeMenu: PropTypes.func
};

export default Header;
