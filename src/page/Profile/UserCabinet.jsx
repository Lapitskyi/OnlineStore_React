import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './scss/UseCabinet.scss';

const UserCabinet = ({
  user: {
    // eslint-disable-next-line no-unused-vars
    id,
    lastName,
    firstName,
    email,
    role
  },
  cabinetNav

}) => {
  return (
    <>
      <div className="cabinet">
        <div className="container">
          <div className="cabinet__inner">
            <div className="cabinet__sideBar">
              <div className="cabinet__sideBar-header">
                <NavLink className="cabinet__list-link" to="/cabinet/user">
                  <div className="cabinet__user">
                    <h3 className="cabinet__user-name">
                      {firstName}
                      {lastName}
                    </h3>
                    <div className="cabinet__user-email">{email}</div>
                  </div>
                </NavLink>
              </div>
              <ul className="cabinet__list">
                {role === 'ADMIN'
                && (
                  <NavLink className="cabinet__list-link" to="/cabinet">
                    <li className="cabinet__list-item" key="dashboard">
                      Dashboard
                    </li>
                  </NavLink>
                )}
                {cabinetNav.map((ItemNav) => (
                  <NavLink className="cabinet__list-link" to={ItemNav.path} key={ItemNav.id}>
                    <li className="cabinet__list-item">
                      <img className="cabinet__list-icon" src={ItemNav.icon} alt="" />
                      <div className="cabinet__list-name">{ItemNav.name}</div>
                      <div className="cabinet__list-count">9</div>
                    </li>
                  </NavLink>
                ))}
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

UserCabinet.defaultProps = {
  user: {
    id: 1,
    lastName: 'LastName',
    firstName: 'firstName',
    email: 'mail@.com.ua',
    role: 'user'
  },
  cabinetNav: [
    {
      id: '1', name: 'Мои заказы', icon: '', path: '/cabinet/order'
    },
    {
      id: '2', name: 'Список желаний', icon: '', path: '/cabinet/withlist'
    },
    {
      id: '3', name: 'Просмотренные товары', icon: '', path: '/cabinet/recently-viewed'
    },
    {
      id: '4', name: 'Розсылка', icon: '', path: '/cabinet/subscribes'
    },
    {
      id: '5', name: 'Мои отзывы', icon: '', path: '/cabinet/reviews'
    },
    {
      id: '6', name: 'Мои письма', icon: '', path: '/cabinet/message'
    },
  ]
};
UserCabinet.propTypes = {
  cabinetNav: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.shape({
    id: PropTypes.number,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  })
};

export default UserCabinet;
