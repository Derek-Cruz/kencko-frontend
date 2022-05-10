import Card from './Card';
import classes from '../styles/FruitItem.module.css';


function FruitItem(props) {
  return (
    <li className={classes.list}>
      <Card>
        <div key={props.key}>
          <h3 className={classes.head3}>{props.name}</h3>
          <h4 className={classes.head4}>{props.family}</h4>
          <p className={classes.para}>{props.calories} calories</p>
          <p className={classes.para}>{props.protein} protein</p>
          <p className={classes.para}>{props.carbohydrates} carbohydrates</p>
          <p className={classes.para}>{props.fat} fat</p>
          <p className={classes.para}>{props.sugar} sugar</p>
        </div>
        <div className={classes.divTag}>
          <button className={classes.button}>ADD ME!</button>
        </div>
      </Card>
    </li>
  );
}

export default FruitItem;
