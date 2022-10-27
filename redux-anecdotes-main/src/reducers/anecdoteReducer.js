import { createSlice } from "@reduxjs/toolkit";
import { anecServices } from "../services/anecdote";

//const getId = () => (100000 * Math.random()).toFixed(0);

/*
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};
*/

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
      return state.concat(action.payload);
    },

    addAnecs(state, action) {
      return action.payload;
    },
  },
});

export const initializeAnec = () => {
  return async (dispatch) => {
    const anecdotes = await anecServices.getAll();
    dispatch(addAnecs(anecdotes));
  };
};

export const createAnec = (anec) => {
  return async (dispatch) => {
    const newAnec = await anecServices.saveAnec(anec);
    console.log(newAnec);
    dispatch(addNewAnec(newAnec));
  };
};

export const { voting, addNewAnec, addAnecs } = anecdoteSlice.actions;
