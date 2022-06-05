import React from "react";
import Sidebar from "../SideBar";
import { Outlet} from "react-router-dom";
import "./index.scss";
const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="Home_wrapper">
          <div className="Home_left">
            <Sidebar />
          </div>
          <div className="Home_right">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
