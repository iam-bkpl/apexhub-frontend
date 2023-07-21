import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: localStorage.getItem("access") || null,
  refresh: localStorage.getItem("refresh") || null,
  isAuthenticated: false,
  user: null,
  userList: [],
};

// const authCoreSlice = createSlice({ name: "auth" }, initialState: initialState,

//     reducers: {
//         login: (state, action) => {

//         }
//     }
// );
