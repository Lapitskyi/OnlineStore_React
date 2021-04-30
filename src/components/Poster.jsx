import React from 'react';
import './scss/Poster.scss';
import poster from '../assets/images/poster.jpg';

const Poster = () => (
  <div className="poster">
    <img className="poster__img" src={poster} alt="poster" />
  </div>
);
export default Poster;
