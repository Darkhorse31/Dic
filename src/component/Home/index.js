import React from "react";
import Asset from "../AssetUpload";
import CustomerDetail from "../CustomerDetail";
import ListWrapper from "../Listwrapper";
import Sidebar from "../SideBar";
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
       <Asset/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
