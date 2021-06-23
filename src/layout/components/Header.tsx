import React, { FC } from 'react';
import Logo from '../../components/Logo/Logo';
import NavAction from './NavAction';
import Menu from './Menu';

import '../scss/Header.scss';

interface HeaderProps {
  showMenu: boolean,
  theme: boolean,
  products: any [],
  lang: any [],

  onShowMenu: () => void,
  closeMenu: () => void,
  toggleLang: (id: string) => void,
  toggleTheme: (theme: boolean) => void,
}
const Header: FC<HeaderProps> = ({
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

export default Header;
