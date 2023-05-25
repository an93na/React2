import { createSlice } from "@reduxjs/toolkit";

// createSlice "odpowiednik" reactowego useState z pewnym ale

const counterSice = createSlice({
  name: "counter", //nazwa slice, ja je wybieram
  initialState: {
    value: 0, //stan początkowy tak jak w useState(0)
  },
  reducers: {},
});

export default counterSice.reducer;
