import React from "react";
import "./index.scss";
import CustomerImage from "../../assets/img-1.png"
const CustomerCard = () => {
  return (
    <main className="MainList">
      <div className="ListComp_wrapper">
        {/* img */}
        <img src={CustomerImage} alt="Customerimage" className="CustomerImage"/>
        <div className="right">
          <h3 className="nameofCustomer">Customer name</h3>
          <h4 className="Pro_name">Project Name Elementum Venenatis</h4> 
          <h5 className="Date">dd/mm/yyyy</h5>
        </div>
      </div>
    </main>
  );
};

export default CustomerCard;
