import { useSelector } from "react-redux";
import { turnOn, turnOff } from "../reducers/notificationReducer";
import store from "../store";

const Notification = () => {
  const noti = useSelector((state) => state.notification);
  //console.log(noti);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    display: noti.isOn === true ? "block" : "none",
  };
  return <div style={style}>{noti.msg}</div>;
};

export const notify = (msg) => {
  const dispatch = store.dispatch;
  dispatch(turnOn(msg));
  setTimeout(() => {
    dispatch(turnOff());
  }, 5000);
};

export default Notification;
