import { createSlice } from "@reduxjs/toolkit"

export const fruitSlice = createSlice({
  name: 'fruitHolder',
  initialState: [],
  reducers: {
    addFruit: (state, action) => {
      const newFruit = {
        name: action.payload.name,
        family: action.payload.family,
        calories: action.payload.calories,
        carbohydrates: action.payload.carbohydrates,
        protein: action.payload.protein,
        fat: action.payload.fat,
        sugar: action.payload.sugar,
      };
      state.push(newFruit);
    }
  }
});

export const { addFruit } = fruitSlice.actions;
export default fruitSlice.reducer;
