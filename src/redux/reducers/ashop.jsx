import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: "",
  categorys: [],
  sortedProducts: [],
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
    setCategorys: (state, action) => {
      state.categorys = action.payload;
    },
    setSortedProducts: (state, action) => {
      state.sortedProducts = action.payload;
    },
  },
});

export const {
  setProducts,
  setProduct,
  updateProduct,
  setCategorys,
  setSortedProducts,
} = ashopSlice.actions;
export default ashopSlice.reducer;
