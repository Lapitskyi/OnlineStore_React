import React, { FC } from 'react';
import './Modal.scss';

interface ModalProps {
  modal: boolean,
  closeModals: () => void,
  keyPress: () => void,
  children: React.ReactNode,
}
const Modal: FC<ModalProps> = ({
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

export default Modal;
