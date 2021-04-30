import React from 'react';
import PropTypes from 'prop-types';
import './scss/Burger.scss';

const Burger = ({ showMenu, onShowMenu }) => (
  <button type="button" className={!showMenu ? 'burger' : 'burger active'} onClick={onShowMenu}>
    <span />
  </button>
);

Burger.defaultProps = {
  showMenu: false,
  onShowMenu: () => {
  }
};
Burger.propTypes = {
  showMenu: PropTypes.bool,
  onShowMenu: PropTypes.func
};

export default Burger;
