import { useSelector } from "react-redux";

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

export default Notification;
