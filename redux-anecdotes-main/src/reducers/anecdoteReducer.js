import { createSlice } from "@reduxjs/toolkit";
import { anecServices } from "../services/anecdote";

//const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0,
  };
};

export const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    addNewAnec(state, action) {
      return state.concat(action.payload);
    },

    addAnecs(state, action) {
      return action.payload;
    },

    replaceAnec(state, action) {
      const newAnec = action.payload;
      return state.map((anec) => (anec.id === newAnec.id ? newAnec : anec));
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
    const newAnec = await anecServices.saveAnec(asObject(anec));
    //console.log(newAnec);
    dispatch(addNewAnec(newAnec));
  };
};

export const saveVote = (id) => {
  return async (dispatch, getState) => {
    const anecdotes = getState().anecdote;
    const anec = anecdotes.find((anec) => anec.id === id);
    const changedAnec = { ...anec, votes: anec.votes + 1 };
    const res = await anecServices.saveVote(id, changedAnec);
    dispatch(replaceAnec(res));
  };
};

export const { voting, addNewAnec, addAnecs, replaceAnec } =
  anecdoteSlice.actions;
