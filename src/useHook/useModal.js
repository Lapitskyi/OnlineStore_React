import { useState } from 'react';

const useModal = ({ initial }) => {
  const [modal, setModal] = useState(initial);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const keyPress = (e) => {
    if (e.key === 'Escape' && modal) {
      setModal(false);
    }
  };

  return {
    modal, closeModal, openModal, keyPress
  };
};
export default useModal;
