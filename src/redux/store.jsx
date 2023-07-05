import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/reducers";

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
