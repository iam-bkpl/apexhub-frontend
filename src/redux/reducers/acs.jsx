import { createSlice } from "@reduxjs/toolkit";

import { postJobVote } from "../actions/acs";

const initialState = {
  jobPosts: [],
  jobPost: "",
  filteredPost: [],
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
    setFilteredPost: (state, action) => {
      state.filteredPost = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(postJobVote.fulfilled, (state, action) => {});
    builder.addCase(postJobVote.rejected, (state, action) => {});
  },
});

export const { setJobPosts, setJobPost, updateJobPost, setFilteredPost } =
  acsSlice.actions;
export default acsSlice.reducer;
