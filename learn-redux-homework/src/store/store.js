import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counterSlice";
import counterInpReducer from "../components/CounterWithInputSlice";
import todoReducer from "../zajecia_comp/todoListSlice";

export const store = configureStore({
  reducer: {
    counterHomework: counterReducer,
    counterInpt: counterInpReducer,
    todoList: todoReducer,
  },
});
