import { createSlice } from "@reduxjs/toolkit";

const CounterWithInputSlice = createSlice({
  name: "counterInput",
  initialState: {
    num: 0,
  },
  reducers: {
    add: (state, action) => {
      state.num = state.num + action.payload;
    },
    odd: (state, action) => {
      state.num = state.num - action.payload;
    },
  },
});

export const selectCountInput = (state) => state.counterInpt.num

export const {add, odd} = CounterWithInputSlice.actions

export default CounterWithInputSlice.reducer