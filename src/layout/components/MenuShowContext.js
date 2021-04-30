import React from 'react';

const MenuShowContext = React.createContext({
  showMenu: false,
  onShowMenu: () => {
  },
  closeMenu: () => {
  }
});

export default MenuShowContext;
