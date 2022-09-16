import { configureStore } from "@reduxjs/toolkit";
import { anecdoteSlice } from "./reducers/anecdoteReducer";
import { filterSlice } from "./reducers/filterReducer";
import { notiSlice } from "./reducers/notificationReducer";

const store = configureStore({
  reducer: {
    anecdote: anecdoteSlice.reducer,
    notification: notiSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
