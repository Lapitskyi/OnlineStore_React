import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import NavAction from './NavAction';
import Menu from './Menu';
import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';

import '../scss/Header.scss';

const Header = ({
  showMenu,
  onShowMenu,
  closeMenu,
  menu,
  langT,
  langToggle,
  themeT,
  toggleTheme

}) => {
  return (
    <section className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Menu showMenu={showMenu} onShowMenu={onShowMenu} closeMenu={closeMenu} menu={menu} />
          <div className="header__toggle">
            <LangToggle langT={langT} langToggle={langToggle} />
            <ThemeToggle toggleTheme={toggleTheme} themeT={themeT} />
          </div>
          <NavAction />
        </div>
      </div>
    </section>
  );
};
Header.defaultProps = {
  menu: [],
  langT: [],
  themeT: false,
  showMenu: false,
  langToggle: () => {},
  onShowMenu: () => {},
  closeMenu: () => {},
  toggleTheme: () => {}
};
Header.propTypes = {
  themeT: PropTypes.bool,
  showMenu: PropTypes.bool,

  menu: PropTypes.arrayOf(PropTypes.object),
  langT: PropTypes.arrayOf(PropTypes.object),

  langToggle: PropTypes.func,
  onShowMenu: PropTypes.func,
  closeMenu: PropTypes.func,
  toggleTheme: PropTypes.func
};

export default Header;
