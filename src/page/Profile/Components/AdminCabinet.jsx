import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminCabinet = ({
  user: {
    id,
    lastName,
    firstName,
    email
  },

}) => (
  <>
    <NavLink className="cabinet__list-item cabinet__user" to="/cabinet">
      <li className="cabinet__list-item" key={id}>
        <h3 className="cabinet__user-name">
          {firstName}
          {lastName}
        </h3>
        <div className="cabinet__user-email">{email}</div>
      </li>
    </NavLink>
    <NavLink className="cabinet__list-link" to="/cabinet">
      <li className="cabinet__list-item" key="dashboard">
        Dashboard
      </li>
    </NavLink>
    <NavLink className="cabinet__list-link" to="/cabinet">
      <li className="cabinet__list-item" key="dashboard">
        Письма
      </li>
    </NavLink>
    <NavLink className="cabinet__list-link" to="/cabinet">
      <li className="cabinet__list-item" key="dashboard">
        Отзывы
      </li>
    </NavLink>
  </>
);

AdminCabinet.defaultProps = {
  user: {
    id: 1,
    lastName: 'LastName',
    firstName: 'firstName',
    email: 'mail@.com.ua',
    role: 'user'
  }
};
AdminCabinet.propTypes = {

  user: PropTypes.shape({
    id: PropTypes.number,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  })
};
export default AdminCabinet;
