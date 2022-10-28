import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOn: false,
  msg: "",
  timeoutId: undefined,
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

    setTimeoutId(state, action) {
      return { ...state, timeoutId: action.payload };
    },
  },
});

export const setNotification = (msg, time) => {
  return async (dispatch, getState) => {
    const currentId = getState().notification.timeoutId;

    if (typeof currentId === "number") {
      clearTimeout(currentId);
    }

    dispatch(turnOn(msg));

    const timeoutId = setTimeout(() => {
      dispatch(turnOff());
      dispatch(setTimeoutId(undefined));
    }, time * 1000);

    dispatch(setTimeoutId(timeoutId));

    console.log("noti off");
  };
};

export const { turnOff, turnOn, setTimeoutId } = notiSlice.actions;
