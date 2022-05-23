import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";
import PImage from "../../assets/profile.png";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="Landingpage_wrapper">
        <div className="left">
          <img src={PImage} alt="img" className="new" />
          <h3>
            <span>David </span>
            Clerisseau
          </h3>
        </div>
        <div className="right">
          <ul className="LandingPage_list">
            
            <li className="link_list">
              <Link to="orderlist">Order List</Link>
            </li>
            <li className="link_list">
              <Link to="issue">Issue</Link>
            </li>
            <li className="link_list">
              <Link to="notification">Notifications</Link>
            </li>
            <li className="link_list">
              <Link to="logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
