import React from 'react';
import '../scss/NavAction.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';
import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';
import userPhoto from '../../assets/images/userPhoto.svg';

const NavAction = ({
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
NavAction.defaultProps = {
  products: [],
  theme: false,
  lang: [],
  toggleTheme: () => {
  },
  toggleLang: () => {
  },
  isAuth: false,
};
NavAction.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  theme: PropTypes.bool,
  lang: PropTypes.arrayOf(PropTypes.object),
  toggleTheme: PropTypes.func,
  toggleLang: PropTypes.func,
  isAuth: PropTypes.bool,
};

export default NavAction;
