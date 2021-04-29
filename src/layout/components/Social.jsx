import React from 'react';
import '../scss/Social.scss';
import sprite from '../../assets/spriteSvg/sprite.svg';

const Social = () => (
  <ul className="social__list">
    <li className="social__list-item">
      <a className="social__list-link" href="mailto:ChristoforColumb@gmail.com">
        <svg className="social__list-icon">
          <use href={`${sprite}#email`} />
        </svg>
      </a>
    </li>
    <li className="social__list-item">
      <a className="social__list-link" href="https://www.facebook.com/groups/425331145080676/">
        <svg className="social__list-icon">
          <use href={`${sprite}#facebook`} />
        </svg>
      </a>
    </li>
    <li className="social__list-item">
      <a className="social__list-link" href="instagram.com">
        <svg className="social__list-icon">
          <use href={`${sprite}#instagram`} />
        </svg>
      </a>
    </li>
    <li className="social__list-item">
      <a className="social__list-link" href="https://www.facebook.com/groups/425331145080676/">
        <svg className="social__list-icon">
          <use href={`${sprite}#yuotube`} />
        </svg>
      </a>
    </li>
  </ul>
);
export default Social;
