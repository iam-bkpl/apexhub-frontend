import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setProducts, setProduct, setCategorys } from "../reducers/ashop";

const API_URL = "http://localhost:8000/api/ashop";

export const fetchProducts = createAsyncThunk(
  "ashop/fetchProducts",
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`,
        },
      };

      try {
        const response = await axios.get(`${API_URL}/products/`, config);
        console.log("Fetching products");
        thunkAPI.dispatch(setProducts(response.data));
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  }
);

export const fetchProduct = createAsyncThunk(
  "acs/fetchProduct",
  async (id, thunkAPI) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`,
        },
      };
      try {
        const response = await axios.get(`${API_URL}/products/${id}/`, config);
        thunkAPI.dispatch(setProduct(response.data));
        return response.data;
      } catch (error) {
        console.log("Error while fetching product with id ", id);
      }
    } else {
      console.log("User not authorized to view single post ");
    }
  }
);

export const postProduct = createAsyncThunk(
  "ashop/postProduct",
  async (productData, thunkAPI) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`,
        },
      };
      try {
        const response = await axios.post(
          `${API_URL}/products/`,
          productData,
          config
        );
        return response.data;
      } catch (error) {
        console.log("Error while posting a product: " + error.message);
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    } else {
      return thunkAPI.rejectWithValue("User not authorized ");
    }
  }
);

export const updateProduct = createAsyncThunk(
  "ashop/updateProduct",
  async ({ id, productData }) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          Authorization: `JWT ${accessToken}`,
        },
      };
      try {
        const response = await axios.put(
          `${API_URL}/products/${id}/`,
          productData,
          config
        );
        console.log("updateproduct actions : ", response);
        return response.data;
      } catch (err) {
        console.log("Error while updating product");
        return thunkAPI.rejectWithValue(err.response.data.message);
      }
    } else {
      return thunkAPI.rejectWithValue("User not authorized ");
    }
  }
);

export const fetchCategorys = createAsyncThunk(
  "ashop/fetchCategorys",
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`,
        },
      };

      try {
        const response = await axios.get(`${API_URL}/categorys/`, config);
        thunkAPI.dispatch(setCategorys(response.data));
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  }
);
