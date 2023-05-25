import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../ReduxWprowadzenie/001_setup/counterSlice";
import counterReducer2 from "../ReduxWprowadzenie/001_setup/counterSlice2";
// torzenie stora - obiektu trzymającego stan
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
  },
});
