import { useSelector } from "react-redux";
import { notifyMsg, turnOn, turnOff } from "../reducers/notificationReducer";

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

export const notify = (msg, dispatch) => {
  dispatch(notifyMsg(msg));
  dispatch(turnOn());
  setTimeout(() => {
    dispatch(turnOff());
  }, 5000);
};

export default Notification;
