import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counterSlice";
import counterInpReducer from "../components/CounterWithInputSlice";
import todoReducer from "../zajecia_comp/todoListSlice";
import usersReducer from '../zajecia_comp/zad1/usersSlice'

export const store = configureStore({
  reducer: {
    counterHomework: counterReducer,
    counterInpt: counterInpReducer,
    todoList: todoReducer,
    usersList: usersReducer,
  },
});
