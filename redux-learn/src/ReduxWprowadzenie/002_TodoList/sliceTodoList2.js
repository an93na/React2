import { createSlice } from "@reduxjs/toolkit";

const sliceTodoList2 = createSlice({
  name: "todo2",
  initialState: {
    todos2: [],
    searchPhrase: "",
  },
  reducers: {
    addTodo2: (state, action) => {
      state.todos2.push(action.payload);
    },
    setSearchPhase: (state, action) => {
        state.searchPhrase = action.payload
    }
  },
});

export const selectTodos2 = (state) => state.todoRedu2.todos2.filter((todo) => todo.includes(state.todoRedu2.searchPhrase));

export const { addTodo2 } = sliceTodoList2.actions;

export default sliceTodoList2.reducer;
