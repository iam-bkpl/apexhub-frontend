import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobPosts: [],
  jobPost: "",
};

const acsSlice = createSlice({
  name: "acs",
  initialState,
  reducers: {
    setJobPosts: (state, action) => {
      state.jobPosts = action.payload;
    },
    setJobPost: (state, action) => {
      state.jobPost = action.payload;
    },
    updateJobPost: (state, action) => {
      state.jobPost = action.payload;
    },
  },
});

export const { setJobPosts, setJobPost, updateJobPost } = acsSlice.actions;
export default acsSlice.reducer;
