import React from 'react';
import PropTypes from 'prop-types';
import './scss/Pagination.scss';

const Pagination = ({
  pageSize,
  totalCount,
  currentPage,
  onPageChanged
}) => {
  const pageCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <ul className="pagination__list">
        {
          pages.map((page) => (
            <li className="pagination__item" key={page.id}>
              <button
                type="button"
                className={(currentPage === page && 'pagination__link btn pagination__link-active')
                || 'pagination__link btn'}
                onClick={() => onPageChanged(page)}
              >
                {page}
              </button>
            </li>

          ))
        }

      </ul>
    </div>
  );
};

Pagination.defaultProps = {
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  onPageChanged: () => {}
};
Pagination.propTypes = {
  pageSize: PropTypes.number,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;
