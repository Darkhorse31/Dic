import React, { useEffect, useState } from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";
import PImage from "../../assets/profile.png";
import { useSelector } from "react-redux";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import axios from "axios";
import { BlenderOutlined } from "@mui/icons-material";
const LandingPage = () => {
  const customer = useSelector((state) => state.customerinfo.value);
  console.log(customer.user_id);
   const [Notification, setNotification] = useState([])
  useEffect(() => {
    const Notification = async () => {
      await axios
        .post(
          `http://89.40.2.219/api/v1/retrieve_notifications?user_id=${customer.user_id}`
        )
        .then((res) => {
          const {data}=res;
          setNotification(data);
          
        })
        .catch((err) => {
          console.log(err);
        });
    };
    Notification();
  }, []);
  console.log(Notification);
  return (
    <div className="LandingPage">
      <div className="Landingpage_wrapper">
        <div className="left">
          <img src={PImage} alt="img" className="new" />
          <h3 style={{ textAlign: "center" }}>{customer.name}</h3>
        </div>
        <div className="right">
          <ul className="LandingPage_list">
            <li className="link_list">
              <Link to="/orderlist">Order List</Link>
            </li>

            <li className="link_list">
              <Link to="/notifications">
                Notifications{" "}
                <span
                  style={{
                    marginLeft: "30px",
                    marginRight:"5px",
                    color: "Blue",
                    fontWeight: "bold",
                  }}
                >
                  {Notification.length}
                </span>
               {Notification.length > 0?<NotificationsActiveIcon color="success" fontSize="large"/>:<NotificationsOffIcon color="error" fontSize="large"/> }
              </Link>
            </li>
            <li className="link_list">
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
