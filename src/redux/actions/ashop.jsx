import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setJobPosts } from "../reducers/acs";

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
        thunkAPI.dispatch(setJobPosts(response.data));
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  }
);
