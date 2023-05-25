import { createSlice } from "@reduxjs/toolkit";

// createSlice "odpowiednik" reactowego useState z pewnym ale

const counterSice = createSlice({
  name: "counter", //nazwa slice, ja je wybieram
  initialState: {
    value: 0, //stan początkowy tak jak w useState(0)
  },
  //funkcje które mówią w jaki sposób możemy zaktualizować nasz stan
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const {decrement, increment} = counterSice.actions

export default counterSice.reducer;
