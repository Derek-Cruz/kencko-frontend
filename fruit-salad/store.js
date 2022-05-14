import { configureStore } from "@reduxjs/toolkit"
import fruitReducer from "./slices/fruitSlice";

export const store = configureStore({
  reducer: { fruit: fruitReducer },
});
