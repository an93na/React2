import { createSlice } from "@reduxjs/toolkit";

const complexCounterSlice = createSlice({
  name: "counter3",
  initialState: {
    value: 0,
  },
  reducers: {
    increaseComplex: (state, action) => {
      state.value = state.value + action.payload;
    },
    decreaseComplex: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

export const complexSelectVal = (state) => state.counter3.value;
export const {increaseComplex, decreaseComplex} = complexCounterSlice.actions
export default complexCounterSlice.reducer;
