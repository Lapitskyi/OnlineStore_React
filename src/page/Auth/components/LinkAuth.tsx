import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import '../scss/Auth.scss';
import { useTranslation } from 'react-i18next';

interface LinkProps {
  link: any[]
}

const LinkAuth: FC<LinkProps> = ({ link }) => {
  const { t } = useTranslation();
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

export default LinkAuth;
