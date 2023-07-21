import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8000/api";

export const login = createAsyncThunk(
  "core/logUser",
  async (formData, thunkAPI) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await axios.post(
          `${API_URL}/auth/jwt/create/`,
          formData,
          config
        );
        console.log("Loggin user");

        return response.data;
      } catch (error) {
        console.log("Error while fetching job with id ", id);
      }
    } else {
      console.log("User not authorized to view single post ");
    }
  }
);
