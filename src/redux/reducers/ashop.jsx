import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: "",
  categorys: [],
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
  },
});

export const { setProducts, setProduct, updateProduct, setCategorys } =
  ashopSlice.actions;
export default ashopSlice.reducer;
