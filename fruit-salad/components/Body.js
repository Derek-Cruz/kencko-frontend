import classes from '../styles/Body.module.css';

function Body(props) {

  function handleClick() {
    alert("i was clicked!!");
  }

  return (
    <div>
      <div className={classes.div}>
        <h2 className={classes.h2}>Let's make a fruit salad!</h2>
      </div>
      <div className={classes.divTwo}>
        <h3 className={classes.h3}>Pick a minimum of 3 fruits and make a delicious fruit salad!</h3>
        <button onClick={handleClick} className={classes.button}>RANDOM GENERATOR</button>
      </div>
    </div>
  );
}

export default Body;


// if (fruit.family === 'rosaceae') {
//   fruit[Math.floor((Math.random() * fruit.length))]
// }
