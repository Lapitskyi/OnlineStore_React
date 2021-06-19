import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({
  modal,
  closeModals,
  keyPress,
  children,
}) => (
  <div
    className={modal ? 'modal active' : 'modal'}
    role="presentation"
    tabIndex={-1}
    onClick={closeModals}
    onKeyDown={keyPress}
  >
    <div
      className={modal ? 'modal__inner active' : 'modal__inner'}
      role="presentation"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>

  </div>
);

Modal.defaultProps = {
  modal: false,
  closeModals: () => {
  },
  keyPress: () => {
  },
  children: null,
};
Modal.propTypes = {
  modal: PropTypes.bool,
  closeModals: PropTypes.func,
  keyPress: PropTypes.func,
  children: PropTypes.node,
};
export default Modal;
