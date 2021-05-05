import React from 'react';
import PropTypes from 'prop-types';

import './scss/Login.scss';
import Logo from '../../components/Logo';
import LinkAuth from './components/LinkAuth';

const Login = ({
  auth: {
    login: {
      input,
      name,
      link
    }
  }
}) => {
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__inner">
          <Logo />
          <h2 className="auth__title">{name}</h2>
          <form className="auth__form">
            {input.map((inputItem) => (
              <label className="auth__form-label" htmlFor={inputItem.id} key={inputItem.id}>
                {inputItem.label}
                <input
                  className="auth__form-input"
                  type={inputItem.type}
                  id={inputItem.id}
                  placeholder={inputItem.placeholder}
                />
              </label>
            ))}
            <button type="button" className="auth__form-btn">{name}</button>
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
      name: '',
      link: []
    }
  }
};
Login.propTypes = {
  auth: PropTypes.shape({
    login: PropTypes.shape({
      input: PropTypes.arrayOf(PropTypes.object),
      name: PropTypes.string,
      link: PropTypes.arrayOf(PropTypes.object)
    })
  })
};

export default Login;
