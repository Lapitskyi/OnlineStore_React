import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import MainLayout from './layout/MainLayuot';

const App = ({
  theme, lang, toggleLang, toggleTheme,
}) => (
  <MainLayout
    theme={theme}
    lang={lang}
    toggleTheme={toggleTheme}
    toggleLang={toggleLang}
  />
);

App.defaultProps = {
  theme: false,
  lang: [],
  toggleTheme: () => {
  },
  toggleLang: () => {
  },
};

App.propTypes = {
  theme: PropTypes.bool,
  lang: PropTypes.arrayOf(PropTypes.object),
  toggleTheme: PropTypes.func,
  toggleLang: PropTypes.func,
};

export default App;
