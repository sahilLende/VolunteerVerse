import React, { useState } from "react";
import TaskFilter from "./TaskFilter";
import UserTasksContainer from "./UserTasks";
import "./userTaskCatalouge.css";

function UserTaskCatalouge() {
  const [statusForList, setStatusForList] = useState("All");

  return (
    <div className="userTaskCatalouge">
      <TaskFilter
        statusForList={statusForList}
        setStatusForList={setStatusForList}
      />
      <UserTasksContainer status={statusForList} />
    </div>
  );
}

export default UserTaskCatalouge;
