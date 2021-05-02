import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Login from './Login';
import './scss/Auth.scss';

const AuthConteiner = () => {
  return (
    <Login />
  );
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps, {})
)(AuthConteiner);
