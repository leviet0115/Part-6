import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./reducers/filterReducer";
import { notiSlice } from "./reducers/notificationReducer";
import { anecdoteSlice } from "./reducers/anecdoteReducer";

const store = configureStore({
  reducer: {
    anecdote: anecdoteSlice.reducer,
    notification: notiSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
