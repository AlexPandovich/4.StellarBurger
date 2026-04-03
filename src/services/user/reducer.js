import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.userName = action.payload.userName;
        state.email = action.payload.email;
      },
    },
    deleteUser: {
      reducer: (state, action) => {
        state.userName = null;
        state.email = null;
      },
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
