import FruitItem from './FruitItem';
import classes from '../styles/FruitList.module.css';

function FruitList(props) {
  return (
    <ul className={classes.ul}>
      {props.fruits.map(fruit => (
        <FruitItem
          key={fruit.id}
          name={fruit.name}
          family={fruit.family}
          calories={fruit.nutritions.calories}
          carbohydrates={fruit.nutritions.carbohydrates}
          protein={fruit.nutritions.protein}
          fat={fruit.nutritions.fat}
          sugar={fruit.nutritions.sugar}
        />
      ))}
    </ul>
  );
}

export default FruitList;
