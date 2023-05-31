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

export const { addTodo, resetState } = todoListSlice.actions;

export default todoListSlice.reducer;
