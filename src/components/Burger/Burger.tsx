import React, { FC } from 'react';
import cn from 'classnames';
import './Burger.scss';

interface BurgerProps {
  showMenu: boolean,
  onShowMenu: () => void
}

const Burger: FC<BurgerProps> = ({ showMenu, onShowMenu }) => (
  <button type="button" className={cn('burger', { active: showMenu })} onClick={onShowMenu}>
    <span />
  </button>
);

export default Burger;
