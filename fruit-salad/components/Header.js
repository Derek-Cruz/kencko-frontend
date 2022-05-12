import { useEffect, useState } from "react";
import Modal from "./Modal";
import classes from '../styles/Header.module.css';
import { useSelector } from 'react-redux';
import newFruitList from "./ModalItem";



function Header(props) {
  const fruits = useSelector((state) => state.fruit);
  const [showModal, setShowModal] = useState(false);

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
            {fruits.map((fruit) => (
              <newFruitList
                name={fruit.name}
                family={fruit.family}
                calories={fruit.calories}
                carbohydrates={fruit.carbohydrates}
                protein={fruit.protein}
                fat={fruit.fat}
                sugar={fruit.sugar}
              />
            ))}

          </ul>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
