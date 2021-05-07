import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import './scss/Login.scss';
import LinkAuth from './components/LinkAuth';
import Logo from '../../components/Logo';

const Login = ({
  auth: {
    login: {
      input,
      name,
      link
    }
  }
}) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters long.')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),

  });
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__inner">
          <Logo />
          <h2 className="auth__title">{name}</h2>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty
            }) => (

              <form className="auth__form">
                {input.map((inputItem) => (
                  <label className="auth__form-label" htmlFor={inputItem.id} key={inputItem.id}>
                    {inputItem.label}
                    <input
                      className="auth__form-input"
                      type={inputItem.type}
                      name={inputItem.id}
                      id={inputItem.id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[`${inputItem.id}`]}
                      placeholder={inputItem.placeholder}
                    />
                    {touched[`${inputItem.id}`] && errors[`${inputItem.id}`]
                    && <div className="error">{errors[`${inputItem.id}`]}</div>}
                  </label>
                ))}

                <button
                  className="auth__form-btn btn btn__size-medium btn--color"
                  type="submit"
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                >
                  {name}
                </button>
              </form>
            )}
          </Formik>
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
