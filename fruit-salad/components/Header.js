import { useEffect, useState } from "react";
import Modal from "./Modal";
import classes from '../styles/Header.module.css';
import { useSelector } from 'react-redux';




function Header(props) {
  const fruits = useSelector((state) => state.fruit);
  const [showModal, setShowModal] = useState(false);
  const calories = fruits.reduce((total, currentFruit) => total + currentFruit.calories, 0)
  const carbohydrates = fruits.reduce((total, currentFruit) => total + currentFruit.carbohydrates, 0)
  const protein = fruits.reduce((total, currentFruit) => total + currentFruit.protein, 0)
  const fat = fruits.reduce((total, currentFruit) => total + currentFruit.fat, 0)
  const sugar = fruits.reduce((total, currentFruit) => total + currentFruit.sugar, 0)

  return (
    <div className={classes.div}>
      <div className={classes.title}>fruit salad</div>
      <div>
        <button onClick={() => fruits.length >= 3 ? setShowModal(true) : setShowModal(false)}>Open Modal</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <ul className={classes.ul}>
            <h2 className={classes.h2}>Your fruit salad:</h2>
            {fruits.map((fruit, index) =>
              <li key={fruit.id} className={classes.li}>
               {index + 1}. {fruit.name}
            </li>
            )}
          </ul>
          <div>
            <h2 className={classes.h2}>Nutrition info in your salad:</h2>
            <p className={classes.p}>{calories} calories</p>
            <p className={classes.p}>{carbohydrates} carbohydrates</p>
            <p className={classes.p}>{protein} protein</p>
            <p className={classes.p}>{fat} fat</p>
            <p className={classes.p}>{sugar} sugar</p>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
