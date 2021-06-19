import { useState } from 'react';

const useRating = (initial) => {
  const [ratingCount, setRatingCount] = useState(initial);

  const addRating = () => {
    setRatingCount(ratingCount + 1);
  };
  return {
    ratingCount,
    addRating,
  };
};

export default useRating;
