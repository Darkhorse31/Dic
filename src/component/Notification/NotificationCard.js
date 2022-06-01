import React from "react";
import "./index.scss";
const NotificationCard = ({ data }) => {
  console.log(data);
  return (
    <div className="notifiactionCard">
      <div className="NotificationDataWrapper">
        <div active="true">
          <h3>
            Order:<span>{data.order}</span>
          </h3>
          <h3>
            Raised By:<span>{data.raised_by}</span>
          </h3>
        </div>
        <details>
          <summary>Message</summary>
          <p style={{ textAlign: "center" }}>{data.message}</p>
        </details>
        <h6>{data.created_at}</h6>
      </div>
    </div>
  );
};

export default NotificationCard;
