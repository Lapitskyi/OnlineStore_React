import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import MainLayout from './layout/MainLayuot';

const App = ({ themeT }) => {
  return (
    <MainLayout themeT={themeT} />
  );
};

App.defaultProps = {
  themeT: false,
};

App.propTypes = {
  themeT: PropTypes.bool,
};

export default App;
