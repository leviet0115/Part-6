import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOn: false,
  msg: "",
};
export const notiSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    notifyMsg(state, action) {
      return { ...state, msg: action.payload };
    },

    turnOn(state, action) {
      return { ...state, isOn: true };
    },

    turnOff(state, action) {
      return initialState;
    },
  },
});

export const { notifyMsg, turnOff, turnOn } = notiSlice.actions;
