import React from 'react';
import './scss/Dashboard.scss';

const Dashboard = () => (
  <div className="dashboard">
    <div className="container">
      <div className="dashboard__inner">
        <ul className="dashboard__list">
          <li className="dashboard__list-item">
            <button
              type="button"
              className="dashboard__list-btn btn"
              onClick=""
            >
              Добавить
              бренд
            </button>
          </li>
          <li className="dashboard__list-item">
            <button
              type="button"
              className="dashboard__list-btn btn"
              onClick=""
            >
              Добавить
              тип товара
            </button>
          </li>
          <li className="dashboard__list-item">
            <button
              type="button"
              className="dashboard__list-btn btn"
              onClick=""
            >
              Добавить
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

Dashboard.defaultProps = {};
Dashboard.propTypes = {};

export default Dashboard;
