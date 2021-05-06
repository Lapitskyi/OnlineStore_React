import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './Login';
import Registration from './Registration';
import Reset from './Reset';
import './scss/Auth.scss';

const AuthContainer = ({ auth }) => {
  return (
    <>
      <Switch>
        <Route exact path="/auth/login" render={() => <Login auth={auth.en} />} />
        <Route path="/auth/registration" render={() => <Registration auth={auth.en} />} />
        <Route path="/auth/reset" render={() => <Reset auth={auth.en} />} />
        <Redirect to="/" />
      </Switch>
    </>

  );
};

const mapStateToProps = ({ showAction }) => ({
  auth: showAction.auth
});

export default compose(
  connect(mapStateToProps, {})
)(AuthContainer);

AuthContainer.defaultProps = {
  auth: {}
};
AuthContainer.propTypes = {
  auth: PropTypes.objectOf(PropTypes.object)
};
