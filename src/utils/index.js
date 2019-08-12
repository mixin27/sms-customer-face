import { notification } from "antd";

const noti = (type, msg, des) => {
  if (type === "close") {
    notification.close({ key: "noti" });
  } else {
    notification[type]({
      top: 500,
      message: msg,
      description: des,
      duration: 5,
      key: "noti",
      style: { marginTop: "10%" }
    });
  }
};

export { noti };
