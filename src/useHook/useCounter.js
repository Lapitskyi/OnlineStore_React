import { useState } from 'react';

const useCounter = (initial) => {
  const [count, setCount] = useState(initial || 1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 1) {
      return setCount(1);
    }
    return setCount(count - 1);
  };

  const changeValue = (e) => {
    setCount(+e.target.value);
  };

  return {
    count, increment, decrement, changeValue,
  };
};

export default useCounter;
