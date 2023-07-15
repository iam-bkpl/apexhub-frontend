import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: "",
};

const ashopSlice = createSlice({
  name: "ashop",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    updateProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProducts, setProduct, updateProduct } = ashopSlice.actions;
export default ashopSlice.reducer;
