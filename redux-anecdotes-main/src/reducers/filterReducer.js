import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterBy(state, action) {
      return action.payload;
    },
  },
});

export const { filterBy } = filterSlice.actions;
