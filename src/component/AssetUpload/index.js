import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { allassets } from "../../redux/slice/AssetSice";
var FormData = require("form-data");

const Asset = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userid = useSelector((state) => state.customerinfo.value);
  const assetData = useSelector((state) => state.assetSlice.value);
  const [file, setfile] = useState([null]);
  const [status, setstatus] = useState("");
  const [notify, setnotify] = useState("no");
  const [unitId, setunitId] = useState("");
  const [remarks, setremarks] = useState("");
  const [building, setbuilding] = useState("");
  const [Floor, setFloor] = useState("");
  const [customerImage, setCustomerImage] = useState([]);
  useEffect(() => {
    const AllData = async () => {
      await axios
        .post(
          `http://89.40.2.219/api/v1/details?user_id=${userid.user_id}&order_id=${id}`
        )
        .then((res) => {
          const { data } = res;
          console.log(data);
          dispatch(allassets(data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    AllData();
  }, []);

  // transfer Data
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(unitId);
    const data = new FormData();
    data.append("unit_id", unitId);
    data.append("user_id", userid.user_id);
    data.append("status", status);
    data.append("remarks", remarks);
    data.append("notify", notify);
    // console.log(file);
    [...file].forEach((e) => {
      data.append("image[]", e);
    });
    await axios
      .post("http://89.40.2.219/api/v1/send_remarks", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    assetData.forEach((Data) => {
      if (Data.unit_number === unitId) {
        setunitId(Data.unit_id);
      }
    });
  }, [unitId]);
  useEffect(() => {
    assetData.forEach((Data) => {
      if (Data.unit_id === unitId) {
        setCustomerImage(Data.customer_images);
      }
    });
  }, [unitId]);
  // Transfer Data
  // Redux Data
  const unique = [...new Set(assetData.map((item) => item.building))];
  const uniqueFloor = [
    ...new Set(
      assetData.map((Floor) => {
        return building === Floor.building ? Floor.floor : "";
      })
    ),
  ];
  const uniqueunitId = [
    ...new Set(
      assetData.map((unitId) => {
        return building === unitId.building && Floor === unitId.floor
          ? unitId.unit_number
          : "";
      })
    ),
  ];

  // uniqueunitId.forEach((unitId) => {
  //   console.log(unitId);
  // });
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
            {unique.map((ele) => {
              return <option value={ele}>{ele}</option>;
            })}
          </select>
          <select
            className="AssetSelect"
            style={{ textTransform: "uppercase" }}
            onChange={(e) => setFloor(e.target.value)}
          >
            <option>
              <h3>Select Floor</h3>
            </option>
            {uniqueFloor.map((floor) => {
              return floor !== "" ? <option value={floor}>{floor}</option> : "";
            })}
          </select>
          <select
            className="AssetSelect"
            style={{ textTransform: "uppercase" }}
            onChange={(e) => setunitId(e.target.value)}
          >
            <option>
              <h3>Select Unit Number</h3>
            </option>
            {uniqueunitId.map((unitId) => {
              return unitId !== "" ? (
                <option value={unitId}>Unit Number {unitId}</option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div className="buttongroup">
          <div className="div1">
            Building
            <span
              style={{
                color: "royalblue",
                fontWeight: "bold",
                marginLeft: "3px",
              }}
            >
              {building}
            </span>
          </div>
          <div className="div2">
            Floor{" "}
            <span
              style={{
                color: "#a09df5",
                fontWeight: "bold",
                marginLeft: "3px",
              }}
            >
              {Floor}
            </span>
          </div>
          <div className="div1">
            Unit Id
            <span
              style={{
                color: "royalblue",
                fontWeight: "bold",
                marginLeft: "3px",
              }}
            >
              {unitId}
            </span>
          </div>
        </div>
        {/* image upload starting  */}
        <div className="Assets_image">
          {customerImage.map((img) => {
            return <img src={img} alt="Asset Image" />;
          })}
        </div>
        {/* Image upload Tab */}
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
          <select
            className="AssetSelect"
            style={{ textTransform: "uppercase" }}
            onChange={(e) => setstatus(e.target.value)}
          >
            <option>
              <h3>Select Status</h3>
            </option>
            <option value={"in progress"}>In Progress</option>
            <option value={"completed"}>completed</option>
          </select>
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
        <button
          type="submit"
          className="Submit"
          onClick={(e) => setnotify("yes")}
        >
          Send with Notification
        </button>
      </form>
    </div>
  );
};

export default Asset;
