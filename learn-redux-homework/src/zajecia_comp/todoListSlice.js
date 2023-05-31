import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
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
  },
});

export const selectTodo = (state) => state.todoList.todos;

export const selectTotalNumberofTodos = (state) => state.todoList.todos.length;

export const selectTotalNumberMarksofTodos = (state) =>
  state.todoList.todos.join("").length;

export const selectTotalNumberLessOf5MarksTodos = (state) =>
  state.todoList.todos.filter((todo) => todo.length < 5).length;

export const { addTodo, resetState } = todoListSlice.actions;

export default todoListSlice.reducer;
