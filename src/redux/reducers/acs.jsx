import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobPosts: [],
};

const acsSlice = createSlice({
  name: "acs",
  initialState,
  reducers: {
    setJobPosts: (state, action) => {
      state.jobPosts = action.payload;
    },
  },
});

export const { setJobPosts } = acsSlice.actions;
export default acsSlice.reducer;
