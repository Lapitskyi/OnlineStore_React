import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Registration from './Registration';
import Reset from './Reset';
import './scss/Auth.scss';
import constant from '../../assets/constants/constant';

const AuthContainer = () => {
  const { t } = useTranslation();
  return (
    <Switch>
      <Route exact path="/auth/login" render={() => <Login login={constant.auth.login} t={t} />} />
      <Route
        path="/auth/registration"
        render={() => (
          <Registration 
            registration={constant.auth.registration}
            t={t}
          />
        )}
      />
      <Route path="/auth/reset" render={() => <Reset reset={constant.auth.reset} t={t} />} />
      <Redirect to="/" />
    </Switch>
  );
};

const mapStateToProps = () => ({
});

export default compose(
  connect(mapStateToProps, {})
)(AuthContainer);

AuthContainer.defaultProps = {
};
AuthContainer.propTypes = {
};
