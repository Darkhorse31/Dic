import React from 'react'
import { FaKey, FaUserAlt } from "react-icons/fa";
import { BsFillEyeSlashFill } from "react-icons/bs";
const Lcomponent= () => {
  return (
    <div className="Login_wrapper">
          <div className="Login_top">
            <h2>welcome back!</h2>
            <span>Hey! Good to see you again.</span>
          </div>

          {/* <div className="Login_radio">
            <div>
              <input type="radio" id="html" name="fav_language" value="HTML" /> 
              {"       "}
              <label for="html">customer</label>
            </div>
            <div>
                <input type="radio" id="css" name="fav_language" value="CSS" /> 
              <label for="css">installer</label>
            </div>
          </div> */}
          <div className="form">
            <h1 className="sgn_in">Sign in</h1>
            <form>
              <ul>
                <li>
                  <span>
                    <FaUserAlt className="svgicon" />
                  </span>
                  <input
                    type="text"
                    placeholder="installer/customer"
                    className="input text1"
                  />
                </li>
                <li>
                  <span>
                    <FaKey className="svgicon" />
                  </span>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input text2"
                  />{" "}
                  <span>
                    <BsFillEyeSlashFill className="svgicon" />
                  </span>
                </li>
              </ul>
              <button type="submit" className="btn-sb">
                Sign In
              </button>
            </form>
            <button className="ForgetPassword">Forget Password?</button>
          </div>
        </div>
  )
}

export default Lcomponent;