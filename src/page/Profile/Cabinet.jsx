import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './scss/Cabinet.scss';
import AdminCabinet from './Components/AdminCabinet';
import UserCabinet from './Components/UserCabinet';

const Cabinet = ({
  user: {
    id,
    lastName,
    firstName,
    email,
    role
  }

}) => {
  return (
    <>
      <div className="cabinet">
        <div className="container">
          <div className="cabinet__inner">
            <div className="cabinet__sideBar">
              <ul className="cabinet__list">
                {role === 'ADMIN'
                && (
                <AdminCabinet user={{
                  id, lastName, firstName, email 
                }}
                />
                )}

                {role === 'USER'
                && (
                  <UserCabinet user={{
                    id, lastName, firstName, email
                  }}
                  />
                )}
              </ul>
            </div>
            <div className="cabinet__content">
              <Switch>
                <Route path="/cabinet" exact render={() => <Dashboard />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Cabinet.defaultProps = {
  user: {
    id: 1,
    lastName: 'LastName',
    firstName: 'firstName',
    email: 'mail@.com.ua',
    role: 'USER'
  }
};
Cabinet.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  })
};

export default Cabinet;
