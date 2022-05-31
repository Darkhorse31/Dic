import React, { useState, useEffect } from "react";
import AssetImage from "../../assets/room.png";
import { useSelector } from "react-redux";
import "./index.scss";
import { B1Floor, B2Floor } from "../Floor";
import axios from "axios";
import { useParams } from "react-router-dom";
var FormData = require("form-data");
const Asset = () => {
  const { id } = useParams();
  const userid = useSelector((state) => state.customerinfo.value);
  // console.log(id);
  // // send data throw js
  // console.log(userid.user_id);

  const [file, setfile] = useState([null]);
  const [status, setstatus] = useState("completed");
  const [notify, setnotify] = useState("yes");
  const [unitId, setunitId] = useState("");
  const [remarks, setremarks] = useState("");
  const [building, setbuilding] = useState("");
  const [Floor, setFloor] = useState("");
  useEffect(() => {
    const AllData = async () => {
      await axios
        .post(
          `http://89.40.2.219/api/v1/details?user_id=${userid.user_id}&order_id=${id}`
        )
        .then((res) => {
          const { data } = res;
          setunitId(data[0].unit_id);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    AllData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    // console.log(status,notify,unitId,remarks,userid.user_id)
    data.append("unit_id", unitId);
    data.append("user_id", userid.user_id);
    data.append("status", status);
    data.append("remarks", remarks);
    data.append("notify", notify);
    // console.log(file);
    [...file].forEach((e) => {
      data.append("image[]", e);
    });
    console.log(data);
    await axios
      .post("http://89.40.2.219/api/v1/send_remarks", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Asset">
      <h3 className="heading">Upload Image</h3>
      <form onSubmit={handleSubmit}>
        <div className="Select">
          <select
            className="AssetSelect"
            style={{ textTransform: "uppercase" }}
            onChange={(e) => {
              setbuilding(e.target.value);
            }}
          >
            <option value="">
              <h3>Select Building</h3>
            </option>
            <option value="B1">
              <h3>B1</h3>
            </option>
            <option value="B2">
              <h3>B2</h3>
            </option>
          </select>
          <select
            className="AssetSelect"
            style={{ textTransform: "uppercase" }}
            onChange={(e) => setFloor(e.target.value)}
          >
            <option>
              <h3>Select Floor</h3>
            </option>
            {building === "B1"
              ? B1Floor.map((ele) => {
                  return (
                    <option>
                      <h3>Floor {ele}</h3>
                    </option>
                  );
                })
              : building === "B2"
              ? B2Floor.map((ele) => {
                  return (
                    <option value={`Floor ${ele}`}>
                      <h3>Floor {ele}</h3>
                    </option>
                  );
                })
              : null}
          </select>
        </div>
        <div className="buttongroup">
          <div className="div1">3rd Floor</div>
          <div className="div2">Room No.102</div>
        </div>
        <div className="Assets_image" >
         <img src={AssetImage} alt="Asset Image"></img>
         <img src={AssetImage} alt="Asset Image"></img>
         <img src={AssetImage} alt="Asset Image"></img>
         <img src={AssetImage} alt="Asset Image"></img>
        </div>
        <div className="input">
          <label for="upload">Upload</label>
          <input
            type="file"
            id="upload"
            name="upload"
            accept="images/*"
            className="fileInputtype"
            onChange={(e) => setfile([e.target.files])}
            multiple
          />
        </div>
        <div className="Textarea">
          <label>Add Remark</label>
          <textarea
            type="text"
            className="textarea"
            id="remark"
            name="remark"
            value={remarks}
            onChange={(e) => setremarks(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="Submit">
          Send
        </button>
        <button type="submit" className="Submit" disabled={true}>
          Send with Notification
        </button>
      </form>
    </div>
  );
};

export default Asset;
