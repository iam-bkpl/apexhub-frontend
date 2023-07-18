import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobPosts: [],
  jobPost: "",
  filteredPost: "",
  vote: "",
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
    setVote: (state, action) => {
      state.vote = action.payload;
    },
  },
});

export const { setJobPosts, setJobPost, updateJobPost, setVote } =
  acsSlice.actions;
export default acsSlice.reducer;
