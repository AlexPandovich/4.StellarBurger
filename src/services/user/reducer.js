import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./actions";

const initialState = {
  userName: null,
  email: null,
  accessToken: null,
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: {
      reducer: (state, action) => {
        state.userName = null;
        state.email = null;
        state.accessToken = null;
      },
    },
    clearError: {
      reducer: (state, action) => {
        state.error = null;
        state.status = "idle";
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userName = action.payload.userName;
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      //-----------------------------------------
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userName = action.payload.userName;
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addUser, deleteUser, clearError } = userSlice.actions;
export default userSlice.reducer;
