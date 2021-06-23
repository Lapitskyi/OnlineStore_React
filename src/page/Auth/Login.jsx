import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import LinkAuth from './components/LinkAuth';
import Logo from '../../components/Logo/Logo';
import AuthSocial from './components/AuthSocial';
import './scss/Login.scss';

const Login = ({
  login: {
    input,
    name,
    link,
  },
}) => {
  const { t } = useTranslation();

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
          <h2 className="auth__title">{t(`${name}`)}</h2>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty,
            }) => (

              <form className="auth__form">
                {input.map((inputItem) => (
                  <label className="auth__form-label" htmlFor={inputItem.id} key={inputItem.id}>
                    {t(`${inputItem.label}`)}
                    <input
                      className="auth__form-input"
                      type={inputItem.type}
                      name={inputItem.id}
                      id={inputItem.id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[`${inputItem.id}`]}
                      placeholder={t(`${inputItem.placeholder}`)}
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
                  {t(`${name}`)}
                </button>
              </form>
            )}
          </Formik>
          <AuthSocial />
          <LinkAuth link={link} />
        </div>
      </div>
    </div>
  );
};

export default Login;
