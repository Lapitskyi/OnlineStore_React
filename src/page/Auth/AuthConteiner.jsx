import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './Login';
import './scss/Auth.scss';
import Registration from './Registration';

const AuthConteiner = ({ auth }) => {
  return (
    <>
      <Registration auth={auth.en} />
      <Login auth={auth.en} />
    </>

  );
};

const mapStateToProps = ({ lang }) => ({
  auth: lang.auth
});

export default compose(
  connect(mapStateToProps, {})
)(AuthConteiner);

AuthConteiner.defaultProps = {
  auth: {}
};
AuthConteiner.propTypes = {
  auth: PropTypes.objectOf(PropTypes.object)
};
