import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo/Logo';
import NavAction from './NavAction';
import Menu from './Menu';

import '../scss/Header.scss';

const Header = ({
  showMenu,
  onShowMenu,
  closeMenu,
  theme,
  lang,
  toggleLang,
  toggleTheme,
  products,
}) => {
  return (
    <section className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Menu showMenu={showMenu} onShowMenu={onShowMenu} closeMenu={closeMenu} />

          <NavAction
            theme={theme}
            lang={lang}
            toggleTheme={toggleTheme}
            toggleLang={toggleLang}
            products={products}
          />

        </div>
      </div>
    </section>
  );
};
Header.defaultProps = {
  products: [],
  showMenu: false,
  onShowMenu: () => {
  },
  closeMenu: () => {
  },
  theme: false,
  lang: [],
  toggleTheme: () => {
  },
  toggleLang: () => {
  },
};
Header.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  showMenu: PropTypes.bool,

  onShowMenu: PropTypes.func,
  closeMenu: PropTypes.func,
  theme: PropTypes.bool,
  lang: PropTypes.arrayOf(PropTypes.object),
  toggleTheme: PropTypes.func,
  toggleLang: PropTypes.func,
};

export default Header;
