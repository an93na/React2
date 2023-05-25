import { createSlice } from "@reduxjs/toolkit";

const counterSlice2 = createSlice({
  name: "counter2",
  initialState: {
    value: 0,
  },
  reducers: {
    increment2: (state) => {
      state.value = state.value + 5;
    },
    decrement2: (state) => {
      state.value = state.value - 5;
    },
    reserButton2: (state) => {
      state.value = 0;
    },
    add: (state) => {
      state.value = state.value + state.value;
    },
  },
});

export const selecValue = (state) => state.counter2.value;

export const { increment2, decrement2, reserButton2, add } =
  counterSlice2.actions;

export default counterSlice2.reducer;
