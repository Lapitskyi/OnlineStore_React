import { useState } from 'react';

const useToggleTheme = (initionalTheme) => {
  const [theme, setTheme] = useState(initionalTheme);

  const toggleTheme = () => {
    setTheme({ theme: !!theme === false });
  };
  return {
    theme,
    toggleTheme
  };
};

export default useToggleTheme;
