import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination = ({
  pageSize,
  totalCount,
  currentPage,
  onPageChanged,
  portionSize,
}) => {
  const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));

  const pageCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pageCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="pagination">
      <ul className="pagination__list">

        {portionNumber > 1 && (
          <li className="pagination__item">
            <button
              type="button"
              className="pagination__link controlArrows"
              onClick={() => setPortionNumber(portionNumber - 1)}
            >
              Prev
            </button>
          </li>
        )}

        {pages
          .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map((page) => (
            <li className="pagination__item" key={page}>
              <button
                type="button"
                className={(currentPage === page && 'pagination__link pagination__link-active')
                || 'pagination__link '}
                onClick={() => onPageChanged(page)}
              >
                {page}
              </button>
            </li>

          ))}
        {portionCount > portionNumber && (
          <li className="pagination__item">
            <button
              type="button"
              className="pagination__link controlArrows"
              onClick={() => setPortionNumber(portionNumber + 1)}
            >
              Next
            </button>
          </li>
        )}

      </ul>
    </div>
  );
};

Pagination.defaultProps = {
  pageSize: 0,
  totalCount: 0,
  currentPage: 0,
  portionSize: 0,
  onPageChanged: () => {
  },
};
Pagination.propTypes = {
  pageSize: PropTypes.number,
  portionSize: PropTypes.number,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.func,
};

export default Pagination;
