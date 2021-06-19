import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import '../scss/Cabinet.scss';

const UserCabinet = ({
  user: {
    id,
    lastName,
    firstName,
    email,
  },
  cabinetNav,

}) => (

  <>
    <NavLink className="cabinet__list-link" to="/cabinet">
      <li className="cabinet__list-item cabinet__user" key={id}>
        <h3 className="cabinet__user-name">
          {firstName}
          {lastName}
        </h3>
        <div className="cabinet__user-email">{email}</div>
      </li>
    </NavLink>
    {cabinetNav.map((ItemNav) => (
      <NavLink className="cabinet__list-link" to={ItemNav.path} key={ItemNav.id}>
        <li className="cabinet__list-item">
          <img className="cabinet__list-icon" src={ItemNav.icon} alt="" />
          <div className="cabinet__list-name">{ItemNav.name}</div>
          <div className="cabinet__list-count">9</div>
        </li>
      </NavLink>
    ))}
  </>

);

UserCabinet.defaultProps = {
  user: {
    id: 1,
    lastName: 'LastName',
    firstName: 'firstName',
    email: 'mail@.com.ua',
    role: 'ADMIN',
  },
  cabinetNav: [
    {
      id: '1', name: 'Мои заказы', icon: '', path: '/cabinet/order',
    },
    {
      id: '2', name: 'Список желаний', icon: '', path: '/cabinet/withlist',
    },
    {
      id: '3', name: 'Просмотренные товары', icon: '', path: '/cabinet/recently-viewed',
    },
    {
      id: '4', name: 'Розсылка', icon: '', path: '/cabinet/subscribes',
    },
    {
      id: '5', name: 'Мои отзывы', icon: '', path: '/cabinet/reviews',
    },
    {
      id: '6', name: 'Мои письма', icon: '', path: '/cabinet/message',
    },
  ],
};
UserCabinet.propTypes = {
  cabinetNav: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.shape({
    id: PropTypes.number,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default UserCabinet;
