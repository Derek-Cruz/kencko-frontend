import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import classes from '../styles/Modal.module.css';
import { useSelector } from 'react-redux';


const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const fruits = useSelector((state) => state.fruit);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <a href="#" onClick={handleCloseClick} className={classes.a}>
            x
          </a>
        </div>
        <div className={classes.body}>{children}</div>
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
