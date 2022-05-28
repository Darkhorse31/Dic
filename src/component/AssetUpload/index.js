import React from "react";
import AssetImage from "../../assets/room.png";
import "./index.scss";
const Asset = () => {
  const handleclick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Asset">
      <h3 className="heading">Upload Image</h3>
      <form onSubmit={handleclick}>
        <div className="Select">
          <select className="AssetSelect">
            <option>
              <h3>Select Floor</h3>
            </option>
          </select>
          <select className="AssetSelect">
            <option>
              <h3>Select Floor</h3>
            </option>
          </select>
        </div>
        <div className="buttongroup">
          <div className="div1">3rd Floor</div>
          <div className="div2">Room No.102</div>
        </div>
        <div className="Assets_image">
          <img src={AssetImage} alt={"Asset"} />
          <img src={AssetImage} alt={"Asset"} />
          <img src={AssetImage} alt={"Asset"} />
          <img src={AssetImage} alt={"Asset"} />
          <img src={AssetImage} alt={"Asset"} />
        </div>
        <div className="input">
          <label for="upload">Upload</label>
          <input type="file" id="upload" name="upload" />
        </div>
        <div className="Textarea">
          <label>Add Remark</label>
          <textarea
            type="text"
            className="textarea"
            id="remark"
            name="remark"
          ></textarea>
        </div>
        <button type="submit" className="Submit">
          Send
        </button>
        <button type="submit" className="Submit">
          Send with Notification
        </button>
      </form>
    </div>
  );
};

export default Asset;
