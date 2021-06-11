import { useState } from 'react';

const useModal = (initial) => {
  const [modal, setModal] = useState(initial);

  const openModal = () => {
    setModal(true);
  };

  const closeModals = () => {
    setModal(false);
  };
  const keyPress = (e) => {
    e.preventDefault();
    if (e.key === 'Escape' && modal) {
      setModal(false);
    }
  };

  return {
    modal, closeModals, openModal, keyPress
  };
};
export default useModal;
