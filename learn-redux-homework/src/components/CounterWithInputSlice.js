import { createSlice } from "@reduxjs/toolkit";

const CounterWithInputSlice = createSlice({
  name: "counterInput",
  initialState: {
    num: 0,
  },
  reducers: {
    odd: (state, action) => {
      state.num = state.num - action.payload;
    },
    add: (state, action) => {
      state.num = state.num + action.payload;
    },
    resetBtn: (state) => {
      state.num = 0;
    },
  },
});

export const selectCountInput = (state) => state.counterInpt.num;

export const { add, odd, resetBtn } = CounterWithInputSlice.actions;

export default CounterWithInputSlice.reducer;
