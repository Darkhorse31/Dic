import React from "react";
import "./index.scss";
import CardComponent from "../ListComponent/ListComponet"
const ListWrapper = () => {
  return <div className="listWrapper">
      <h3>
          Order List
      </h3>
      <div className="component_div">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>

      </div>
  </div>;
};

export default ListWrapper;
