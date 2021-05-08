import React from 'react';
import '../scss/NavAction.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';
import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';
import userPhoto from '../../assets/images/userPhoto.svg';

const NavAction = ({
  langT,
  langToggle,
  themeT,
  toggleTheme,
  isAuth
}) => (
  <ul className="action__list">
    <li className="action__list-item">
      <ThemeToggle toggleTheme={toggleTheme} themeT={themeT} />
    </li>
    <li className="action__list-item">
      <LangToggle langT={langT} langToggle={langToggle} />
    </li>

    <li className="action__list-item">
      <NavLink to="/auth/login" className="action__list-link">
        {isAuth
          ? (
            <NavLink to="/cabinet">
              <div className="profile__menu">
                <img className="action__list-icon" src={userPhoto} alt="" />
              </div>
            </NavLink>
          )
          : (
            <svg className="action__list-icon">
              <use href={`${sprite}#user`} />
            </svg>
          )}

      </NavLink>
    </li>
    <li className="action__list-item ">
      <NavLink to="/cart" className="action__list-link cart">
        <svg className="action__list-icon ">
          <use href={`${sprite}#cart`} />
        </svg>
        <div className="cart__badge">0</div>
      </NavLink>
    </li>
  </ul>
);
NavAction.defaultProps = {
  langT: [],
  themeT: false,
  langToggle: () => {
  },
  toggleTheme: () => {
  },
  isAuth: true
};
NavAction.propTypes = {
  themeT: PropTypes.bool,
  langT: PropTypes.arrayOf(PropTypes.object),
  langToggle: PropTypes.func,
  toggleTheme: PropTypes.func,
  isAuth: PropTypes.bool,
};

export default NavAction;
