import React from 'react';
import './Social.scss';
import constant from '../../assets/constants/constant';

const Social = () => (
  <ul className="social__list">
    {constant.social.map((socialItem) => (
      <li className="social__list-item" key={socialItem.id}>
        <a className="social__list-link" href={socialItem.path}>
          <svg className="social__list-icon">
            <use href={socialItem.icon} />
          </svg>
        </a>
      </li>
    ))}
  </ul>
);
export default Social;
