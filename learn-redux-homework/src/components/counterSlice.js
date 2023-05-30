import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterHomework",
  initialState: {
    value: 0,
  },
  reducers: {
    decrease: (state, action) => {
      state.value = state.value - action.payload;
    },
    increase: (state, action) => {
      state.value = state.value + action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const selectCosTamCosTam = (state) => state.counterHomework.value

export const { increase, decrease, reset } = counterSlice.actions;

export default counterSlice.reducer;
