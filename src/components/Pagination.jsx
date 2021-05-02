import React from 'react';
import { NavLink } from 'react-router-dom';
import './scss/Pagination.scss';

const Pagination = () => {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <NavLink to="" className="pagination__link"> prev </NavLink>
        </li>
        <li className="pagination__item">
          <NavLink to="" className="pagination__link"> 1 </NavLink>
        </li>
        <li className="pagination__item">
          <NavLink to="" className="pagination__link"> 2 </NavLink>
        </li>
        <li className="pagination__item">
          <NavLink to="" className="pagination__link"> next </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
