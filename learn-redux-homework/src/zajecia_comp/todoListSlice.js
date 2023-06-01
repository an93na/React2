import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  pharse: "",
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    resetState: (state) => {
      // state = initialState
      return initialState;
      // resetuje stan
    },
    setPharse: (state, action) => {
      state.pharse = action.payload;
    },
  },
});

export const selectTodo = (state) =>
  state.todoList.todos.filter((todo) => todo.includes(state.todoList.pharse));

export const selectTotalNumberofTodos = (state) => state.todoList.todos.length;

export const selectTotalNumberMarksofTodos = (state) =>
  state.todoList.todos.join("").length;

export const selectTotalNumberLessOf5MarksTodos = (state) =>
  state.todoList.todos.filter((todo) => todo.length <= 5).length;

export const selectorSearchPharse = (state) => state.todoList.pharse;

export const { addTodo, resetState, setPharse } = todoListSlice.actions;

export default todoListSlice.reducer;
