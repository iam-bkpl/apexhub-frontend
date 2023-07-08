import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setJobPosts, setJobPost, updateJobPost } from "../reducers/acs";

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

export const fetchJobPost = createAsyncThunk(
  "acs/fetchJobPost",
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
        const response = await axios.get(`${API_URL}/jobpost/${id}/`, config);
        thunkAPI.dispatch(setJobPost(response.data));
        return response.data;
      } catch (error) {
        console.log("Error while fetching job with id ", id);
      }
    } else {
      console.log("User not authorized to view single post ");
    }
  }
);

export const postJob = createAsyncThunk(
  "acs/postJob",
  async (jobData, thunkAPI) => {
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
          `${API_URL}/jobpost/`,
          jobData,
          config
        );
      } catch (error) {
        console.log("Error while posting a job");
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    } else {
      return thunkAPI.rejectWithValue("User not authorized ");
    }
  }
);

export const updateJob = createAsyncThunk(
  "acs/updateJob",
  async ({ id, jobData }, thunkAPI) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      const config = {
        headers: {
          Authorization: `JWT ${accessToken}`,
        },
      };
      try {
        const response = await axios.put(
          `${API_URL}/jobpost/${id}/`,
          jobData,
          config
        );
        return response.data;
      } catch (error) {
        console.log("Error while updating job post");

        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    } else {
      return thunkAPI.rejectWithValue("User not authorized");
    }
  }
);
