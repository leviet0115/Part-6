import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

export const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    voting(state, action) {
      const id = action.payload;
      const anec = state.find((anec) => anec.id === id);
      const changedAnec = { ...anec, votes: anec.votes + 1 };
      return state.map((anec) => (anec.id === id ? changedAnec : anec));
    },

    addNewAnec(state, action) {
      const newAnec = asObject(action.payload);
      return state.concat(newAnec);
    },

    addAnecs(state, action) {
      return action.payload;
    },
  },
});

export const { voting, addNewAnec, addAnecs } = anecdoteSlice.actions;
