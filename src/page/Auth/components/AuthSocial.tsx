import React from 'react';
import sprite from '../../../assets/spriteSvg/sprite.svg';
import '../scss/AuthSocial.scss';

const AuthSocial = () => (
  <div className="auth-social">
    <h3 className="auth-social__title">Войти как пользователь</h3>
    <ul className="auth-social__list">
      <li className="auth-social__list-item">
        <button type="button" className="auth-social__list-btn btn">
          <svg className="auth-social__list-icon">
            <use href={`${sprite}#facebook`} />
          </svg>
          <h3 className="auth-social__list-text">facebook</h3>
        </button>
      </li>
      <li className="auth-social__list-item">
        <button type="button" className="auth-social__list-btn btn">
          <svg className="auth-social__list-icon">
            <use href={`${sprite}#google`} />
          </svg>
          <h3 className="auth-social__list-text">google</h3>
        </button>
      </li>
    </ul>
  </div>
);
export default AuthSocial;
