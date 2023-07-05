import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setJobPosts } from "../reducers/acs";

const API_URL = "http://localhost:8000/api/acs";

export const fetchJobPosts = createAsyncThunk(
  "acs/fetchJobPosts",
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
        const response = await axios.get(`${API_URL}/jobpost/`, config);
        thunkAPI.dispatch(setJobPosts(response.data));
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    } else {
      console.log("User is not authorized");
    }
  }
);
