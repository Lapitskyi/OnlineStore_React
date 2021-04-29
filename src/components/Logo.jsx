import React from 'react';
import { NavLink } from 'react-router-dom';
import Columb from '../assets/icon/Columb.svg';
import './scss/Logo.scss';

const Logo = () => (
  <NavLink to="/">
    <div className="logo">
      <img className="logo__img" src={Columb} alt="Columb" />
    </div>
  </NavLink>
);

export default Logo;
