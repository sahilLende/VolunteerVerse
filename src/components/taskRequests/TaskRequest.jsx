import React from "react";
import "./taskRequest.css";
import Button from "@mui/material/Button";

const TaskRequest = ({ projectTitle, status, admin, desc }) => (
  <div className="task-container">
    <div className="task-detail">
      <div className="task-header">
        <h3>{projectTitle}</h3>
        <img
          className="task-admin-img"
          src="https://picsum.photos/50/50"
          alt="admin"
        ></img>
      </div>
      <div className="task-body">
        <p>{desc}</p>
        <Button size="small" variant="contained">
          Contact admin
        </Button>
        <Button size="small" variant="contained">
          Accept Task
        </Button>
      </div>
    </div>
  </div>
);

export default TaskRequest;
