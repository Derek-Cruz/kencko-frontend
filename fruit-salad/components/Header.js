import { useEffect, useState } from "react";
import Modal from "./Modal";
import classes from '../styles/Header.module.css';
// import { useFruitsStore } from './useFruitsStore'


function Header(props) {
  const [showModal, setShowModal] = useState(false);
  // const { fruits, addFruit } = useFruitsStore()

  return (
    <div className={classes.div}>
      <div className={classes.title}>fruit salad</div>
      <div>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <ul>

          </ul>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
