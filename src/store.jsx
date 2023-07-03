import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;

// const initialState = {};
// const middleware = [thunk];
// const store = configureStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// export default store;

// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// import { configureStore } from "@reduxjs/toolkit";
