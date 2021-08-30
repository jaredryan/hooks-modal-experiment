import React, { useState, useRef, useEffect } from 'react';
import Modal from '../../Components/Modal';
import Page from '../../Components/Page';

const App = () => {
  const buttonRef = useRef();
  const modalRef = useRef();
  const [modalIsOpen, setModalIsOpen] = useState();
  const [buttonToFocus, setButtonToFocus] = useState();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleOpenModal = () => {
    document.body.classList.add('openModal');
    modalRef.current.focus();
  };

  const handleCloseModal = () => {
    document.body.classList.remove('openModal');
    buttonRef.current.focus();
  };

  const onKeyDown = event => {
    if (event.keyCode === 9) {
      if (event.shiftKey) {
        if (modalRef.current.secondaryButton === document.activeElement) {
          setButtonToFocus(modalRef.current.primaryButton)
        }
      } else {
        if (modalRef.current.primaryButton === document.activeElement) {
          setButtonToFocus(modalRef.current.secondaryButton)
        }
      }
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.addEventListener('keydown', onKeyDown);
      handleOpenModal();
    }
    else if (modalIsOpen === false) handleCloseModal();

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [modalIsOpen]);

  useEffect(() => {
    if (buttonToFocus) {
      buttonToFocus.focus()
      setButtonToFocus();
    };
  }, [buttonToFocus]);

  return (
    <>
      <Modal
        onClickOutsideModal={closeModal}
        onPrimaryClick={closeModal}
        open={modalIsOpen}
        ref={modalRef}
      />
      <Page
        openModal={openModal}
        closeModal
        ref={buttonRef}
      />
    </>
  );
}

export default App;
