import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setProducts,
  setProduct,
  setCategorys,
  setSortedProducts,
  setComment,
  setComments,
} from "../reducers/ashop";

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
        thunkAPI.dispatch(setProducts(response.data));
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  }
);
export const fetchComments = createAsyncThunk(
  "ashop/fetchComments",
  async (product_id, thunkAPI) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`,
        },
      };

      try {
        const response = await axios.get(
          `${API_URL}/products/${product_id}/comments`,
          config
        );
        thunkAPI.dispatch(setComments(response.data));
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  }
);
export const fetchComment = createAsyncThunk(
  "ashop/fetchComment",
  async ({ product_id, comment_id }, thunkAPI) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`,
        },
      };

      try {
        const response = await axios.get(
          `${API_URL}/products/${product_id}/comments/${comment_id}`,
          config
        );
        thunkAPI.dispatch(setComment(response.data));
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  }
);

export const sortProducts = createAsyncThunk(
  "ashop/sortProducts",
  async (params, thunkAPI) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`,
        },
      };
      try {
        const response = await axios.get(
          `${API_URL}/products/${params}`,
          config
        );
        thunkAPI.dispatch(setSortedProducts(response.data));
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

export const postComment = createAsyncThunk(
  "ashop/postComment",
  async ({ id, formData }, thunkAPI) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          Authorization: `JWT ${accessToken}`,
        },
      };
      try {
        const response = await axios.post(
          `${API_URL}/products/${id}/comments/`,
          formData,
          config
        );

        thunkAPI.dispatch(setComments(response.data));
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
