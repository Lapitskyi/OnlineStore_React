import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import LinkAuth from './components/LinkAuth';
import './scss/Registration.scss';

const Registration = ({
  auth: {
    registration: {
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
            <button type="button" className="auth__form-btn btn btn__size-medium btn--color">{name}</button>
          </form>
          <LinkAuth link={link} />
        </div>
      </div>
    </div>
  );
};

Registration.defaultProps = {
  auth: {
    registration: {
      input: [],
      name: '',
      link: []
    }
  }
};
Registration.propTypes = {
  auth: PropTypes.shape({
    registration: PropTypes.shape({
      input: PropTypes.arrayOf(PropTypes.object),
      name: PropTypes.string,
      link: PropTypes.arrayOf(PropTypes.object)
    })
  })
};
export default Registration;
