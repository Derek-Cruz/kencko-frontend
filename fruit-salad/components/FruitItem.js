import Card from './Card';
import classes from '../styles/FruitItem.module.css';
import { useDispatch } from 'react-redux'
import { addFruit } from '../slices/fruitSlice'

function FruitItem(props) {

  const dispatch = useDispatch();

  function handleClick() {
    console.log('i was clicked')
    dispatch(
      addFruit({
        name: props.name,
        family: props.family,
        calories: props.calories,
        carbohydrates: props.carbohydrates,
        protein: props.protein,
        fat: props.fat,
        sugar: props.sugar
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
          <p className={classes.para}>{props.calories} calories</p>
          <p className={classes.para}>{props.carbohydrates} carbohydrates</p>
          <p className={classes.para}>{props.protein} protein</p>
          <p className={classes.para}>{props.fat} fat</p>
          <p className={classes.para}>{props.sugar} sugar</p>
        </div>
        <div className={classes.divTag}>
          <button onClick={() => handleClick()} className={classes.button}>ADD ME!</button>
        </div>
      </Card>
    </li>
  );
}

export default FruitItem;
