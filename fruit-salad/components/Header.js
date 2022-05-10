import { useState } from "react";
import Modal from "./Modal";
import classes from '../styles/Header.module.css';

// import { useFruitsStore } from './useFruitsStore'
// const { fruits, addFruit } = useFruitsStore()

function Header(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.div}>
      <div>fruit salad</div>
      <div>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <div>testing</div>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
