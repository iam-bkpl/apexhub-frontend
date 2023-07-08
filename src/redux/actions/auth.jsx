import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginSuccess,
  loginFail,
  userLoadSuccess,
  userLoadFail,
  authenticationSuccess,
  authenticationFail,
  logoutSuccess,
  passwordResetSuccess,
  resetPasswordConfirmSuccess,
  registerSuccess,
} from "../reducers/auth";

const apiUrl = "http://localhost:8000/api";

export const checkAuthenticated = createAsyncThunk(
  "auth/checkAuthenticated",
  async (_, thunkAPI) => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({
        token: localStorage.getItem("access"),
      });

      try {
        const response = await axios.post(
          `${apiUrl}/auth/jwt/verify/`,
          body,
          config
        );
        if (response.data.code !== "token_not_valid") {
          thunkAPI.dispatch(authenticationSuccess());
        } else {
          throw new Error("Auth Fail");
        }
      } catch (error) {
        thunkAPI.dispatch(authenticationFail());
      }
    } else {
      thunkAPI.dispatch(authenticationFail());
    }
  }
);

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, thunkAPI) => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      };
      try {
        const response = await axios.get(`${apiUrl}/auth/users/me/`, config);
        thunkAPI.dispatch(userLoadSuccess(response.data));
        return response.data;
      } catch (error) {
        // thunkAPI.dispatch(userLoadFail(response.data));
        // throw error.response.data.message;
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    } else {
      throw new Error("Access token not found");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });

    try {
      const response = await axios.post(
        `${apiUrl}/auth/jwt/create/`,
        body,
        config
      );
      thunkAPI.dispatch(loginSuccess(response.data));
      thunkAPI.dispatch(loadUser(response.data));
    } catch (error) {
      // thunkAPI.dispatch(loginFail(response.data));
      console.log(error.message);

      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, user_type }, thunkAPI) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password, user_type });
    try {
      const response = await axios.post(`${apiUrl}/auth/users/`, body, config);
      thunkAPI.dispatch(registerSuccess(response.data));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (email, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email });
    try {
      await axios.post(`${apiUrl}/auth/users/reset_password/`, body, config);
      thunkAPI.dispatch(passwordResetSuccess());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const resetPasswordConfirm = createAsyncThunk(
  "auth/resetPasswordConfirm",
  async ({ uid, token, new_password, re_new_password }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
      await axios.post(
        `${apiUrl}/auth/users/reset_password_confirm/`,
        body,
        config
      );
      thunkAPI.dispatch(resetPasswordConfirmSuccess());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  // thunkAPI.dispatch(logout());
  thunkAPI.dispatch(logoutSuccess());
});