import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./index.scss";
import NotificationCard from "./NotificationCard";
const Notification = () => {
  const customer = useSelector((state) => state.customerinfo.value);
  console.log(customer.user_id);
  const [Notificationi, setNotificationi] = useState([]);
  useEffect(() => {
    const Notification = async () => {
      await axios
        .post(
          `http://89.40.2.219/api/v1/retrieve_notifications?user_id=${customer.user_id}`
        )
        .then((res) => {
          const { data } = res;
          setNotificationi(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    Notification();
  }, []);
  console.log(Notificationi);
  return (
    <div className="Notification">
      <div className="NoticationWrapper">
        {Notificationi.map((items,idx) => {
          return <NotificationCard data={items} key={idx} />;
        })}
  
      </div>
    </div>
  );
};

export default Notification;
