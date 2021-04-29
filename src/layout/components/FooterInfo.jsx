import React from 'react';
import '../scss/Info.scss';
import { NavLink } from 'react-router-dom';

const FooterInfo = () => (
  <ul className="footerInfo__list">
    <li className="footerInfo__list-item">
      <NavLink to="/politik">
        Политика конфиденсальности
      </NavLink>
    </li>
    <li className="footerInfo__list-item">
      <NavLink to="/dilivery">
        Доставка и оплата
      </NavLink>
    </li>
  </ul>
);
export default FooterInfo;
