import React from 'react';
import PropTypes from 'prop-types';
import './scss/Burger.scss';

const Burger = ({ isMenuShow, onShowMenu }) => (
  <button type="button" className={!isMenuShow ? 'burger' : 'burger active'} onClick={onShowMenu}>
    <span />
  </button>
);

Burger.defaultProps = {
  isMenuShow: false,
  onShowMenu: () => {
  }
};
Burger.propTypes = {
  isMenuShow: PropTypes.bool,
  onShowMenu: PropTypes.func
};

export default Burger;
