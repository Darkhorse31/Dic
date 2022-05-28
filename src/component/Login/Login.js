import React, { useState, useEffect } from "react";
import "../Main/index.scss";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import KeyIcon from "@mui/icons-material/Key";
import LandingPage from "../LandingPage/LandingPage";
import { useDispatch, useSelector } from "react-redux";
import { customerinfo } from "../../redux/slice/CustomerSlice";
const Lcomponent = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [passwordvisble, setpasswordvisble] = useState();
  const handleSubmit = async (e) => {
    try {
      const Data = await axios.post("http://89.40.2.219/api/v1/login", login);
      const CustomerInfo = Data.data;
      dispatch(customerinfo(CustomerInfo));
    } catch (error) {
      console.log("Error");
    }
    e.preventDefault();
  };

  return (
    <div className="Login_wrapper">
      <div className="Login_top">
        <h2>welcome back!</h2>
        <span>Hey! Good to see you again.</span>
      </div>
      <div className="form">
        <h1 className="sgn_in">Sign in</h1>
        <form method="POST" onClick={handleSubmit}>
          <ul>
            <li>
              <span>
                <PersonIcon style={{ fontSize: "25px", marginInline: "5px" }} />
              </span>
              <input
                type="text"
                placeholder="installer/customer"
                className="input text1"
                value={login.email}
                onChange={(e) => {
                  setLogin({ ...login, email: e.target.value });
                }}
              />
            </li>
            <li>
              <span>
                <KeyIcon style={{ fontSize: "21px", marginInline: "5px" }} />
              </span>
              <input
                type="password"
                placeholder="Enter Password"
                className="input text2"
                value={login.password}
                onChange={(e) => {
                  setLogin({ ...login, password: e.target.value });
                }}
              />
              <span>
                <VisibilityIcon
                  style={{ fontSize: "21px", marginInline: "5px" }}
                />
              </span>
            </li>
          </ul>
          <button
            type="submit"
            className="btn-sb"
            onClick={() => {
              Navigate(`/home`);
            }}
          >
            Sign In
          </button>
        </form>
        <button className="ForgetPassword">Forget Password?</button>
      </div>
    </div>
  );
};

export default Lcomponent;
