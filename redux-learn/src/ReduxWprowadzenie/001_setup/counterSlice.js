import { createSlice } from "@reduxjs/toolkit";

// createSlice "odpowiednik" reactowego useState z pewnym ale

const counterSice = createSlice({
  name: "counter", //nazwa slice, ja je wybieram
  initialState: {
    value: 0, //stan początkowy tak jak w useState(0)
    poweredValue: 0,
    showPoweredValue: false,
  },
  //funkcje które mówią w jaki sposób możemy zaktualizować nasz stan
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
      state.poweredValue = state.value * state.value;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    resetCounter: (state) => {
      state.value = 0;
    },
    toodleShowPoweredValue: (state) => {
        state.showPoweredValue = !state.showPoweredValue
    }
  },
});

export const { decrement, increment, resetCounter, toodleShowPoweredValue } = counterSice.actions;

export default counterSice.reducer;
