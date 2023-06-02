import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  filters: {
    ageFilter: "",
    searchPhrase: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    resetState: () => initialState,
  },
});

export const selectUser = (state) => state.usersList.users;

export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
