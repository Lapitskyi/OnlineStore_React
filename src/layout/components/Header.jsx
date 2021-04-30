import React from 'react';
import Logo from '../../components/Logo';
import NavAction from './NavAction';
import Menu from './Menu';
import '../scss/Header.scss';

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Menu />
          <NavAction />
        </div>
      </div>
    </section>
  );
};

export default Header;
