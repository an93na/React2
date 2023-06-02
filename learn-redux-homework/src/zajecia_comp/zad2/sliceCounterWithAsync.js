import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCounter = createAsyncThunk(
  "counter/getCounter",
  async (params, thunkAPI) => {
    const response = await fetch("http://localhost:3010/counter");
    const data = await response.json();

    //poinformujemy slice o danych które przyszły z backendu
    thunkAPI.fulfillWithValue(data);
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
  extraReducers: (builder) => {},
});
