/* eslint react/prop-types: 0 */
import React from 'react';
import './scss/Login.scss';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import InputAuth from './components/InputAuth';
import CheckboxAuth from './components/CheckboxAuth';

const Login = () => (
  <div className="login">
    <div className="login__inner">
      <h2 className="login__title">Sign in</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          remembeMe: false,
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required')
        })}
      >
        <Form>
          <InputAuth
            label="Email Address"
            name="email"
            type="email"
            placeholder="Введите емеил"
          />

          <InputAuth
            label="Email Address"
            name="password"
            type="password"
            placeholder="Введите пароль"
          />
          <CheckboxAuth name="remembeMe">
            Запомнить меня
          </CheckboxAuth>

          <button type="submit">SingIn</button>
        </Form>
      </Formik>
    </div>
  </div>
);

export default Login;
