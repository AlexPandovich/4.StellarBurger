import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, registerRequest } from "utils/api";
// export const getUser = createAsyncThunk(
//   "user/getUserByToken",
//   async (_, thunkAPI) => {
//     try {
//       const response = await getUserRequest();
//       //   if (!response.success) {
//       //     return thunkAPI.rejectWithValue("Ошибка загрузки ингредиентов");
//       //   }
//       return response;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   },
// );

export const registerUser = createAsyncThunk(
  "user/register",
  async (form, { rejectWithValue }) => {
    try {
      const response = await registerRequest(form);
      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message);
      }
      if (!data.success) {
        return rejectWithValue("incorrect data received from server");
      }
      console.log(data);
      return {
        accessToken: data.accessToken,
        userName: data.user.name,
        email: data.user.email,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (form, { rejectWithValue }) => {
    try {
      console.log("send request ", form);
      const response = await loginRequest(form);
      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message);
      }
      if (!data.success) {
        return rejectWithValue("incorrect data received from server");
      }
      console.log(data);
      return {
        accessToken: data.accessToken,
        userName: data.user.name,
        email: data.user.email,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);
