import React from "react";
import "./index.scss";
import Customer_image from "../../assets/detail-pic.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";
const CustomerDetail = () => {
  return (
    <div className="CustomerDetail">
      <div className="CustomerDetail_top">
        <div className="CustomerDetail_information">
          <p>dd/mm/yyyy</p>
          <h3>Project Name Elementum Venenatis</h3>
          <div className="OrderNo">ORDER NO : DIC9874563</div>
        </div>
      </div>
      <div className="CustomerDetail_bottom">
        <div className="customer_info">
          <img src={Customer_image} alt="image" className="cimage" />
          {/* Name  */}
          <div className="infoDiv">
            <h3>Customer Name</h3>
            <p>Customer Number</p>
          </div>
        </div>
        <div className="customer_info_Location">
          {/* Location -icon  */}
          <div className="location_Info">
            <LocationOnIcon classname="location" />
            <h3 className="location1">Location</h3>
          </div>

          {/* Address  */}
          <p>
            43 Bourke Street, Newbridge NSW 837 Raffles Place, Boat Band M83
          </p>
        </div>
        <div className="Total_order">
          {/* Quantitiy  */}
          <h3 className="Qua">Quantitiy</h3>
          <div className="total_asset">
            <div className="asset">
              <div className="setting">
                <SettingsIcon classname="assets_icon" />
              </div>

              <div className="right">
                <h3>Chair</h3>
                <p>3000</p>
              </div>
            </div>
            <div className="asset">
              <div className="setting">
                <SettingsIcon classname="assets_icon" />
              </div>

              <div className="right">
                <h3>Table</h3>
                <p>3000</p>
              </div>
            </div>
            <div className="asset">
              <div className="setting">
                <SettingsIcon classname="assets_icon" />
              </div>

              <div className="right">
                <h3>Sofa</h3>
                <p>5000</p>
              </div>
            </div>
            <div className="asset">
              <div className="setting">
                <SettingsIcon classname="assets_icon" />
              </div>

              <div className="right">
                <h3>Bed</h3>
                <p>4000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Customer_contact_detail">
          <div className="costomer_site">
            <h3>On Site Contact No.</h3>
            <h4>+00 0000 000 000</h4>
          </div>
          <div className="Customer_NO">
            <h3> Customer No.</h3>
            <h4>+00 0000 000 000</h4>
          </div>
        </div>
        <div className="ImageUpload">
          <h3>UPLOAD IMAGES OF THE PRODUCTS INSTALLED</h3>
          <label for="forInput" className="docs">
            Upload Image
            <input type="file" id="forInput" style={{display: "none"}}/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
