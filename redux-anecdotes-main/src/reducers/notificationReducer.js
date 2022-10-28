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

export const setNotification = (msg, time) => {
  return async (dispatch) => {
    console.log("setting noti with", msg, "in ", time);
    dispatch(turnOn(msg));
    console.log("noti on");
    setTimeout(() => {
      dispatch(turnOff());
    }, time * 1000);

    console.log("noti off");
  };
};

export const { turnOff, turnOn } = notiSlice.actions;
