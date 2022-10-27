import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOn: false,
  msg: "",
};
export const notiSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    turnOn(state, action) {
      return {
        isOn: true,
        msg: action.payload,
      };
    },

    turnOff(state, action) {
      return initialState;
    },
  },
});

export const { notifyMsg, turnOff, turnOn } = notiSlice.actions;
