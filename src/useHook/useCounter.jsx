import { useState } from 'react';

const useCounter = (initial) => {
  const [count, setCount] = useState(initial);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    return setCount(count - 1);
  };

  const changeValue = (e) => {
    setCount(+e.target.value);
  };

  return {
    count, Increment, Decrement, changeValue
  };
};

export default useCounter;
