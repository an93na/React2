import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterHomework",
  initialState: {
    value: 0,
  },
  reducers: {
    decrease: (state) => {
      state.value = state.value - 1;
    },
    increase: (state) => {
      state.value = state.value + 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const useCounterHomework = (state) => state.counterHomework.value

export const { increase, decrease, reset } = counterSlice.actions;

export default counterSlice.reducer;
