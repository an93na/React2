import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counterSlice";
import counterInpReducer from "../components/CounterWithInputSlice";

export const store = configureStore({
  reducer: {
    counterHomework: counterReducer,
    counterInpt: counterInpReducer,
  },
});
