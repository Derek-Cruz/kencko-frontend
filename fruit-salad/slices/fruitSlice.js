import { createSlice } from "@reduxjs/toolkit"

export const fruitSlice = createSlice({
  name: 'fruitHolder',
  initialState: [],
  reducers: {
    addFruit: (state, action) => {
      state.push(action.payload)
    }
  }
});

export const { addFruit } = fruitSlice.actions;
export default fruitSlice.reducer;
