import { useState } from 'react';

const useToggleTheme = (initial) => {
  const [theme, setTheme] = useState(initial);
  const toggleTheme = () => {
    setTheme(!!theme === false);
  };
  return {
    theme,
    toggleTheme
  };
};

export default useToggleTheme;
