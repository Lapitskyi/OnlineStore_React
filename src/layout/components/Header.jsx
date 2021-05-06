import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import NavAction from './NavAction';
import Menu from './Menu';
import '../scss/Header.scss';
import Lang from './Lang';

const Header = ({
  showMenu, 
  onShowMenu,
  closeMenu, 
  menu,
  langT,
  langToggle
}) => {
  return (
    <section className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Menu showMenu={showMenu} onShowMenu={onShowMenu} closeMenu={closeMenu} menu={menu} />
          <Lang langT={langT} langToggle={langToggle} />
          <NavAction />
        </div>
      </div>
    </section>
  );
};
Header.defaultProps = {
  menu: [],
  langT: [],
  showMenu: false,
  langToggle: () => {},
  onShowMenu: () => {
  },
  closeMenu: () => {
  }
};
Header.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
  langT: PropTypes.arrayOf(PropTypes.object),
  showMenu: PropTypes.bool,
  langToggle: PropTypes.func,
  onShowMenu: PropTypes.func,
  closeMenu: PropTypes.func
};

export default Header;
