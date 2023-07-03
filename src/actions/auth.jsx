import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  loginSuccess,
  loginFail,
  userLoadSuccess,
  userLoadFail,
} from "../reducers/auth";

const apiUrl = "http://localhost:8000/api";

export const loadUser = createAsyncThunk("auth/loadUser", async (thunkAPI) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };
    try {
      const response = await axios.get(`${apiUrl}/auth/users/me/`, config);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  } else {
    throw new Error("Access token not found");
  }
});

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
      thunkAPI.dispatch(loadUser());
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
// // old code
// import axios from "axios";

// export const load_user = () => async (dispatch) => {
//   if (localStorage.getItem("access")) {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `JWT ${localStorage.getItem("access")}`,
//         Accept: "application/json",
//       },
//     };
//     try {
//       const response = await axios.get(`${apiUrl}/auth/users/me/`, config);
//       dispatch({
//         type: USER_LOADED_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: USER_LOADED_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   } else {
//     dispatch({
//       type: USER_LOADED_FAIL,
//     });
//   }
// };

// export const login = (email, password) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   const body = JSON.stringify({ email, password });

//   try {
//     const response = await axios.post(
//       `${apiUrl}/auth/jwt/create/`,
//       body,
//       config
//     );
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: response.data,
//     });
//     dispatch(load_user());
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAIL,
//     });
//   }
// };
