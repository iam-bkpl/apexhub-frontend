import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: "",
  categorys: [],
  sortedProducts: [],
  comments: [],
  comment: "",
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
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export const {
  setProducts,
  setProduct,
  updateProduct,
  setCategorys,
  setSortedProducts,
  setComment,
  setComments,
} = ashopSlice.actions;
export default ashopSlice.reducer;
