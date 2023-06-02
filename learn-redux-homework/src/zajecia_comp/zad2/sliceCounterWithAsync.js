import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCounter = createAsyncThunk(
  "counter/getCounter",
  async (params, thunkAPI) => {
    const response = await fetch("http://localhost:3010/counter");
    const data = await response.json();

    //poinformujemy slice o danych które przyszły z backendu
    return thunkAPI.fulfillWithValue(data);
  }
);

const sliceCounterWithAsync = createSlice({
  name: "asyncSlice",
  initialState: {
    value: 0,
    errorState: "",
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCounter.fulfilled, (state, action) => {
        state.value = action.payload.value;
        state.isLoading = false;
      })
      .addCase(getCounter.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const selectIsLoading = (state) => state.asyncCounter.isLoading;
export const selectCounterValue = (state) => state.asyncCounter.value;

export default sliceCounterWithAsync.reducer;
