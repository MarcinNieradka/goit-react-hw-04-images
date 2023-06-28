import React, { useEffect } from 'react';
import clsx from 'clsx';

const Modal = ({ image, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleCloseClick = () => {
    onCloseModal();
  };

  return (
    <div className={clsx('Overlay')} onClick={handleCloseClick}>
      <div className={clsx('Modal')}>
        <img src={image} alt="pic of smth" />
      </div>
    </div>
  );
};

export default Modal;
