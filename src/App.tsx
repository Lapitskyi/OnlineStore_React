import React, { FC } from 'react';
import './App.scss';
import MainLayout from './layout/MainLayuot';

interface AppProps {
  theme: boolean,
  lang: any [],
  toggleLang: () => void,
  toggleTheme: () => void,
}
const App: FC <AppProps> = ({
  theme, lang, toggleLang, toggleTheme,
}) => (
  <MainLayout
    theme={theme}
    lang={lang}
    toggleTheme={toggleTheme}
    toggleLang={toggleLang}
  />
);

export default App;
