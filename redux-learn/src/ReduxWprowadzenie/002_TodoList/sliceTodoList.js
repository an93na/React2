import { createSlice } from "@reduxjs/toolkit";

const sliceTodos = createSlice({
  name: "Todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const {addTodo} = sliceTodos.actions

export default sliceTodos.reducer