import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
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
    },

    userLoadSuccess: (state, action) => {
      state.user = action.payload;
    },
    loginFail: (state, action) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = false;
    },
    userLoadFail: (state, action) => {
      state.user = null;
    },
    checkAuthenticated: (state, action) => {},

    logout: (state, action) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = false;
      state.user = null;
    },

    authenticationSuccess: (state, action) => {
      state.isAuthenticated = true;
    },
    authenticationFail: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, loginFail, userLoadSuccess, userLoadFail } =
  authSlice.actions;

export default authSlice.reducer;

// const authReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case LOGIN_SUCCESS:
//       localStorage.setItem("access", payload.access);
//       return {
//         ...state,
//         isAuthenticated: true,
//         access: payload.access,
//         refresh: payload.refresh,
//       };

//     case USER_LOADED_SUCCESS:
//       return {
//         ...state,
//         user: payload,
//       };

//     case USER_LOADED_FAIL:
//       return {
//         ...state,
//         user: null,
//       };

//     case LOGIN_FAIL:
//       localStorage.removeItem("access");
//       localStorage.removeItem("refresh");
//       return {
//         ...state,
//         access: null,
//         refresh: null,
//         isAuthenticated: false,
//       };

//     default:
//       return state;
//   }
// };

// export default authReducer;
