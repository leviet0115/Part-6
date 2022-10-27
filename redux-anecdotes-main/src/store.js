import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./reducers/filterReducer";
import { notiSlice } from "./reducers/notificationReducer";
import { addAnecs, anecdoteSlice } from "./reducers/anecdoteReducer";
import { getAll } from "./services/anecdote";

const store = configureStore({
  reducer: {
    anecdote: anecdoteSlice.reducer,
    notification: notiSlice.reducer,
    filter: filterSlice.reducer,
  },
});

getAll().then((data) => {
  console.log("from store", data);
  store.dispatch(addAnecs(data));
});

export default store;
