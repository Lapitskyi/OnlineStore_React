import React from 'react';
import loader from '../assets/images/loader.gif';

const Preloader = () => (
  <div className="preloader">
    <img src={loader} alt="loader" />
  </div>
);
export default Preloader;
