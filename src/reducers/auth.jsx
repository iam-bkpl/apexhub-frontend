import { createSlice } from "@reduxjs/toolkit";
import { checkAuthenticated, loadUser } from "../actions/auth";

const initialState = {
  access: localStorage.getItem("access") || null,
  refresh: localStorage.getItem("refresh") || null,
  isAuthenticated: false,
  user: null,
  loading: false,
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
    passwordResetSuccess: () => {},
    registerSuccess: () => {},
    resetPasswordConfirm: () => {},
    resetPasswordConfirmSuccess: () => {},
  },
  extraReducers: (builder) => {
    builder;
    // .addCase(checkAuthenticated.fulfilled, (state) => {})
    // .addCase(checkAuthenticated.rejected, (state) => {})
    // .addCase(loadUser.fulfilled, (state) => {})
    // .addCase(loadUser.rejected, (state) => {})
    // .addCase(login.fulfilled, (state) => {})
    // .addCase(login.rejected, (state) => {})
    // .addCase(resetPassword.fulfilled, (state) => {})
    // .addCase(resetPassword.rejected, (state) => {})
    // .addCase(resetPasswordConfirm.fulfilled, (state) => {})
    // .addCase(resetPasswordConfirm.rejected, (state) => {})
    // .addCase(logout.fulfilled, (state) => {})
    // .addCase(passwordResetSuccess.fulfilled, (state) => {
    //   // Handle password reset success
    // })
    // .addCase(resetPasswordConfirmSuccess.fulfilled, (state, action) => {
    //   console.log("Password change success");
    // })
    // .addCase(resetPasswordConfirmSuccess.rejected, (state, action) => {
    //   console.log("Fail to change password");
    // });
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
} = authSlice.actions;

export default authSlice.reducer;
