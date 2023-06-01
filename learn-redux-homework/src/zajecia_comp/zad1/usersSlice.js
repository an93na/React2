import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
        state.users.push(action.payload)
    },
  },
});

export const selectUser = (state) => state.usersList.users

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
