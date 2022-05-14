import Card from './Card';
import { useState } from 'react';
import classes from '../styles/FruitItem.module.css';
import { useDispatch } from 'react-redux'
import { addFruit } from '../slices/fruitSlice'

function FruitItem(props) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(true);
  };

  const dispatch = useDispatch();

  function someFunc() {
    handleClick()
    toggleClass()
  }

  function handleClick() {
    dispatch(
      addFruit({
        name: props.name,
        family: props.family,
        calories: props.calories,
        carbohydrates: props.carbohydrates,
        protein: props.protein,
        fat: props.fat,
        sugar: props.sugar,
        key: props.id
      })
    );
  };

  return (
    <li className={classes.list}>
      <Card>
        <div key={props.id}>
          <div className={classes.div}>
            <img src="/image.jpg" alt="me" className={classes.img} />
          </div>
          <h3 className={classes.head3}>{props.name}</h3>
          <h4 className={classes.head4}>{props.family}</h4>
          <p className={classes.para}><span className={classes.span}>{props.calories.toFixed(1)}</span> calories</p>
          <p className={classes.para}><span className={classes.span}>{props.carbohydrates.toFixed(1)}</span> carbohydrates</p>
          <p className={classes.para}><span className={classes.span}>{props.protein.toFixed(1)}</span> protein</p>
          <p className={classes.para}><span className={classes.span}>{props.fat.toFixed(1)}</span> fat</p>
          <p className={classes.para}><span className={classes.span}>{props.sugar.toFixed(1)}</span> sugar</p>
        </div>
        <div className={classes.divTag}>
          <button onClick={() => someFunc()} className={`FruitItem_${isActive ? 'buttonOpp__uSLgm' : 'button__GNAcC'}`}>{isActive ? 'ADDED' : 'ADD ME!'}</button>
        </div>
      </Card>
    </li>
  );
}

export default FruitItem;
