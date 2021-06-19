import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../scss/Auth.scss';

const LinkAuth = ({ link, t }) => {
  return (
    <ul className="auth-link__list">
      {
        link.map((item) => (
          <li className="auth-link__list-item" key={item.id}>
            <NavLink className="auth-link__list-link" to={item.path}>{t(`${item.title}`)}</NavLink>
          </li>
        ))
      }
    </ul>
  );
};

LinkAuth.defaultProps = {
  link: [],
  t: () => {},
};
LinkAuth.propTypes = {
  link: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func,
};

export default LinkAuth;
