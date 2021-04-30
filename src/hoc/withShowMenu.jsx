import React, { useContext } from 'react';
import MenuShowContext from '../layout/components/MenuShowContext';

const withShowMenu = (Component) => {
  return () => {
    const {
      showMenu,
      onShowMenu,
      closeMenu
    } = useContext(MenuShowContext);
    return (
      <>
        <Component
          showMenu={showMenu}
          onShowMenu={onShowMenu}
          closeMenu={closeMenu}
        />
      </>
    );
  };
};

export default withShowMenu;
