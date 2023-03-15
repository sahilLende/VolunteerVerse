import React from "react";
import "./taskRequestCard.css";

const TaskRequestCard = ({ projectTitle, status, admin, desc }) => (
  <div className="task-card">
    <div className="task-header">
      <h1 className="task-title">{projectTitle}</h1>
      <img
        className="task-admin-img"
        src="https://picsum.photos/50/50"
        alt="admin"
      ></img>
    </div>
    <div className="task-main">
      <p>{desc}</p>
      <button variant="contained" className="btn btn-contact">
        Contact admin
      </button>
      <button variant="contained" className=" btn btn-accept">
        Accept Task
      </button>
    </div>
  </div>
);

export default TaskRequestCard;
