import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storage, setStorage] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return !storedValue ? initialValue : JSON.parse(storedValue);
  });

  const setValueInLocalStorage = (newValue) => {
    setStorage((currentValue) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [storage, setValueInLocalStorage];
};
export default useLocalStorage;
