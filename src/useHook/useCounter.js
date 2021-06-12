import { useState } from 'react';

const useCounter = (initial) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    return setCount(count - 1);
  };

  const changeValue = (e) => {
    setCount(+e.target.value);
  };

  return {
    count, increment, decrement, changeValue
  };
};

export default useCounter;
