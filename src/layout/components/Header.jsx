import React from 'react';
import '../scss/Header.scss';
import Logo from '../../components/Logo';
import Menu from './Menu';
import NavAction from './NavAction';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Menu />
          <NavAction />
        </div>
      </div>
    </div>
  );
};

export default Header;
