import React from 'react';
import PropTypes from 'prop-types';

import './scss/Login.scss';
import Logo from '../../components/Logo';
import LinkAuth from './components/LinkAuth';

const Login = ({
  auth: {
    login: {
      input,
      btnText,
      link
    }
  }
}) => {
  console.log(input, btnText, link);
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
            <button type="button" className="auth__form-btn">{btnText}</button>
          </form>
          <LinkAuth link={link} />
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {
  auth: {
    login: {
      input: [],
      btnText: '',
      link: []
    }
  }
};
Login.propTypes = {
  auth: PropTypes.shape({
    login: PropTypes.shape({
      input: PropTypes.arrayOf(PropTypes.object),
      btnText: PropTypes.string,
      link: PropTypes.arrayOf(PropTypes.object)
    })
  })
};

export default Login;
