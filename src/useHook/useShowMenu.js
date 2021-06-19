import { useState } from 'react';

const useShowMenu = (initial) => {
  const [showMenu, setShowMenu] = useState(initial);

  const onShowMenu = () => {
    setShowMenu(!!showMenu === false);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return {
    showMenu,
    onShowMenu,
    closeMenu,
  };
};

export default useShowMenu;
