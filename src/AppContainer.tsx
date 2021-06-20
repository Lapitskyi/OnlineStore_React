import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import App from './App';
import useToggleTheme from './useHook/useToggleTheme';
import useToggleLang from './useHook/useToggleLang';

const AppContainer = () => {
  const { theme, toggleTheme } = useToggleTheme(false);
  const { lang, toggleLang } = useToggleLang();
  return (
    <App
      theme={theme}
      lang={lang}
      toggleTheme={toggleTheme}
      toggleLang={toggleLang}
    />
  );
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps, {}),
)(AppContainer);
