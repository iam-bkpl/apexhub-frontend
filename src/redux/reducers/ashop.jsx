import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ashopSlice = createSlice({
  name: "ashop",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = ashopSlice.actions;
export default ashopSlice.reducer;
