import React from 'react';
import Home from './Home';
import useTypeSelector from '../../useHook/useTypeSelector';

const HomeContainer = () => {
  const { promotions, newProduct, popular } = useTypeSelector(({ home }) => (home));
  const addPopular = () => {
  };
  return (
    <Home
      popular={popular}
      promotions={promotions}
      newProduct={newProduct}
      addPopular={addPopular}
    />
  );
};

export default HomeContainer;
