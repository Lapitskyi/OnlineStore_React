import React from 'react';
import loader from '../../assets/images/loader.gif';
import './Preloader.scss';

const Preloader = () => (
  <div className="preloader">
    <img className="preloader__img" src={loader} alt="loader" />
  </div>
);
export default Preloader;
