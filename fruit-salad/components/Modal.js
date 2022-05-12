import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import classes from '../styles/Modal.module.css';

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={classes.StyledModalOverlay}>
      <div className={classes.StyledModal}>
        <div className={classes.StyledModalHeader}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        <div className={classes.StyledModalBody}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
