import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/spriteSvg/sprite.svg';
import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';
import userPhoto from '../../assets/images/userPhoto.svg';

import '../scss/NavAction.scss';

interface NavActionProps {
  theme: boolean,
  isAuth?: boolean,
  products: any [],
  lang: any [],

  toggleLang: (id: string) => void,
  toggleTheme: (theme: boolean) => void,
}

const NavAction: FC<NavActionProps> = ({
  products,
  theme,
  lang,
  toggleLang,
  toggleTheme,
  isAuth,
}) => (
  <ul className="action__list">
    <li className="action__list-item">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </li>
    <li className="action__list-item">
      <LangToggle lang={lang} toggleLang={toggleLang} />
    </li>

    <li className="action__list-item">
      {isAuth
        ? (
          <NavLink to="/cabinet" className="action__list-link">
            <img className="action__list-icon" src={userPhoto} alt="" />
          </NavLink>
        )
        : (
          <NavLink to="/auth/login" className="action__list-link">
            <svg className="action__list-icon">
              <use href={`${sprite}#user`} />
            </svg>
          </NavLink>
        )}
    </li>
    <li className="action__list-item ">
      <NavLink to="/cart" className="action__list-link cart">
        <svg className="action__list-icon ">
          <use href={`${sprite}#cart`} />
        </svg>
        <div className="cart__badge">{products.length}</div>
      </NavLink>
    </li>
  </ul>
);

export default NavAction;
