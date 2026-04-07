import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  loginRequest,
  refreshTokenRequest,
  registerRequest,
  getUserRequest,
} from "utils/api";

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
        refreshToken: data.refreshToken,
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
        refreshToken: data.refreshToken,
        accessToken: data.accessToken,
        userName: data.user.name,
        email: data.user.email,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const loginByRefreshToken = createAsyncThunk(
  "user/loginByRefreshToken",
  async (refreshToken, thunkAPI) => {
    try {
      if (refreshToken) {
        const updatedTokensResponse = await refreshTokenRequest(refreshToken);
        const responseTokensBody = await updatedTokensResponse.json();
        let tokensUpdated = false;

        if (updatedTokensResponse.ok === true) {
          if (responseTokensBody.success === true) {
            tokensUpdated = true;
          }
        }

        let userReceived = false;
        let userResponseBody = null;
        console.log(responseTokensBody);
        if (tokensUpdated) {
          console.log("request user with token ", responseTokensBody);
          const userRequest = await getUserRequest(
            responseTokensBody.refreshToken,
          );
          userResponseBody = await userRequest.json();
          if (userRequest.ok === true) {
            if (userResponseBody.success === true) {
              console.log("user received");
              userReceived = true;
            }
          }
        }

        if (!userReceived) {
          console.log(userResponseBody);
          return thunkAPI.rejectWithValue(userResponseBody);
        } else if (!tokensUpdated) {
          return thunkAPI.rejectWithValue(responseTokensBody);
        } else {
          const result = {
            refreshToken: responseTokensBody.refreshToken,
            accessToken: responseTokensBody.accessToken,
            userName: userResponseBody.user.name,
            email: userResponseBody.user.email,
          };

          console.log("received user ", result);
          return result;
        }
      } else {
        console.log("token is empty", refreshToken);
        return thunkAPI.rejectWithValue("refresh token is empty");
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
