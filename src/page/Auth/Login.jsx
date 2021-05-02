import React from 'react';

import './scss/Login.scss';
import Logo from '../../components/Logo';

const Login = () => {
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__inner">
          <Logo />
          <h2 className="auth__title">Sign in</h2>
          <form className="auth__form">
            <label className="auth__form-label" htmlFor="id">
              email
              <input className="auth__form-input" type="text" id="id" />
            </label>
            <label className="auth__form-label" htmlFor="id1">
              password
              <input className="auth__form-input" type="text" id="id1" />
            </label>
          </form>
          <button type="button" className="auth__form-btn">clik</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
