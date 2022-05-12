import React from 'react';

const newFruitList = ({ name, family, calories, carbohydrates, protein, fat, sugar }) => {
  return (
    <li>
      <div>
        name: {name},
        family: {family},
        calories: {calories},
        carbohydrates: {carbohydrates},
        protein: {protein},
        fat: {fat},
        sugar: {sugar}
      </div>
    </li>
  );
};

export default newFruitList;
