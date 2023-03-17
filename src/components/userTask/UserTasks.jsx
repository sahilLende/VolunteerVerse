import React, { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import userTaskData from "./userTaskData"; // take data directly from redux slice== usertaskOverview

const UserTasksContainer = ({ status }) => {
  //send request to api to get task data(history, selected task, pending task) accordin to user
  const [isLoading, setIsLoading] = useState(true);
  const [userTaskList, setUserTaskList] = useState();

  useEffect(() => {
    setUserTaskList(userTaskData);
    setIsLoading(false);
  }, []);

  const filteredTasks =
    userTaskList &&
    userTaskList.filter((task) => {
      return task.status === status;
    });

  const tasksToRender =
    status === "All"
      ? userTaskList
      : filteredTasks.length > 0
      ? filteredTasks
      : [];

  return (
    <>
      {isLoading ? (
        <h1>isLoading</h1>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {tasksToRender.length > 0 ? (
            tasksToRender.map((task) => {
              return (
                <li
                  key={task.id}
                  style={{
                    borderRadius: "19px 19px 19px 19px ",
                    border: "1px solid #30004f",
                    display: "flex",
                    margin: "1rem 0",
                    padding: "1rem",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "white",
                  }}
                >
                  {`${task.projectTitle} ${task.status}`}
                  <NavigateNextIcon />
                </li>
              );
            })
          ) : (
            <h1>No {status === "All" ? " " : `${status}`} tasks found</h1>
          )}
        </ul>
      )}
    </>
  );
};

export default UserTasksContainer;
