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
          style={{ color: "red", width: "30px", height: "30px" }}
        />
        <img src={img} alt="admin" className="card-admin" />
      </div>
      <div className="card-content">
        <h1 className="card-title">{projectTitle}</h1>
        <h3 className="card-Org ">{OrgName}</h3>
        {status ? <h4> status: Open</h4> : <h4>Status: Closed</h4>}
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Opportunity;
