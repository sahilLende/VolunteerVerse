import React from "react";
import "./opportunity.css";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const Opportunity = ({
  projectTitle,
  OrgName,
  status,
  admin,
  id,
  desc,
  img,
}) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <VolunteerActivismIcon
          className="card-admin"
          style={{ color: "white" }}
        />
        <img src={img} alt="admin" className="card-admin" />
      </div>
      <div className="card-content">
        <h1 className="card-title">{projectTitle}</h1>
        <h3 className="card-Org ">{OrgName}</h3>
        <h6>{`status: ${status ? "Open" : " Closed"}`}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Opportunity;
