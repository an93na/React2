import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../ReduxWprowadzenie/001_setup/counterSlice";
// torzenie stora - obiektu trzymającego stan
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
