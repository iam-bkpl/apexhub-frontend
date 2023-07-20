import { createSlice } from "@reduxjs/toolkit";
import { checkAuthenticated, loadUser } from "../actions/auth";

const initialState = {
  access: localStorage.getItem("access") || null,
  refresh: localStorage.getItem("refresh") || null,
  isAuthenticated: false,
  user: null,
  loading: false,
  userList: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },

    userLoadSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    loginFail: (state, action) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = false;
      state.user = null;
    },

    userLoadFail: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },

    logoutSuccess: (state, action) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = false;
      state.user = null;
    },

    authenticationSuccess: (state) => {
      state.isAuthenticated = true;
    },
    authenticationFail: (state) => {
      state.isAuthenticated = false;
    },
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    passwordResetSuccess: () => {},
    registerSuccess: () => {},
    resetPasswordConfirm: () => {},
    resetPasswordConfirmSuccess: () => {},
  },
});

export const {
  loginSuccess,
  loginFail,
  userLoadSuccess,
  userLoadFail,
  authenticationFail,
  authenticationSuccess,
  logoutSuccess,
  passwordResetSuccess,
  resetPasswordConfirm,
  resetPasswordConfirmSuccess,
  registerSuccess,
  setUserList,
} = authSlice.actions;

export default authSlice.reducer;
