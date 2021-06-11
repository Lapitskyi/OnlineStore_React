import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const useModals = ({
  modal,
  closeModal,
  keyPress,
  children
}) => {
  return (
    <div
      className={modal ? 'modal active' : 'modal'}
      onClick={closeModal || keyPress}
      role="presentation"
    >
      <div
        className={modal ? 'modal__inner active' : 'modal__inner'}
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        {children}
      </div>
    </div>
  );
};
useModals.defaultProps = {
  modal: false,
  closeModal: () => {
  },
  keyPress: () => {},
  children: null
};
useModals.propTypes = {
  modal: PropTypes.bool,
  closeModal: PropTypes.func,
  keyPress: PropTypes.func,
  children: PropTypes.node
};
export default useModals;
