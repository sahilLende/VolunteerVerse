import React from "react";

import Box from "@mui/material/Box";
import TaskRequest from "./TaskRequest";
import { useState, useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./taskRequest.css";
import { useMediaQuery } from "@mui/material";

//container
//-> task details
//only one item will be displayed
// onlclick show next elment
//onClikc baclk show preves element of array
//search array and get array

//task requests array state get from redux or context

const TaskRequestSwpier = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const [taskReqData, setTaskReqData] = useState();
  const [currentTaskRequest, setCurrentTaskRequest] = useState(0);

  useEffect(() => {
    const data = [
      {
        id: 1,
        projectTitle: "Building a community garden",
        admin: "John Doe",
        status: "pending",
        desc: "We need volunteers to help us plant vegetables and flowers in our community garden.",
      },
      {
        id: 2,
        projectTitle: "Teaching coding to kids",
        admin: "Jane Smith",
        status: "approved",
        desc: "We are looking for volunteers to teach coding to kids aged 8-12 at our local community center.",
      },
      {
        id: 3,
        projectTitle: "Cleaning up the beach",
        admin: "Bob Johnson",
        status: "closed",
        desc: "Our annual beach cleanup is coming up and we need volunteers to help pick up trash and debris.",
      },
      {
        id: 4,
        projectTitle: "Building homes for the homeless",
        admin: "Habitat for Humanity",
        status: "pending",
        desc: "We need volunteers to help us build homes for the homeless in our community.",
      },
      {
        id: 5,
        projectTitle: "Mentoring at-risk youth",
        admin: "Big Brothers Big Sisters",
        status: "approved",
        desc: "We are looking for volunteers to mentor at-risk youth in our community.",
      },
      {
        id: 6,
        projectTitle: "Serving meals at a homeless shelter",
        admin: "Salvation Army",
        status: "closed",
        desc: "We need volunteers to help us serve meals to homeless individuals at our local shelter.",
      },
      {
        id: 7,
        projectTitle: "Planting trees in the park",
        admin: "Park District",
        status: "pending",
        desc: "We need volunteers to help us plant trees in the park to improve the environment.",
      },
      {
        id: 8,
        projectTitle: "Assisting elderly with household tasks",
        admin: "Senior Services",
        status: "approved",
        desc: "We are looking for volunteers to help elderly individuals with household tasks such as cleaning and cooking.",
      },
      {
        id: 9,
        projectTitle: "Sorting donations at a food bank",
        admin: "Feeding America",
        status: "closed",
        desc: "We need volunteers to help sort donations at a local food bank to help those in need.",
      },
      {
        id: 10,
        projectTitle: "Running a clothing drive",
        admin: "Goodwill",
        status: "pending",
        desc: "We need volunteers to help run a clothing drive to provide clothes for those in need.",
      },
      {
        id: 11,
        projectTitle: "Building a playground",
        admin: "Parks and Recreation",
        status: "approved",
        desc: "We are looking for volunteers to help build a playground in the local park for children to enjoy.",
      },
    ];
    setTaskReqData(data);
    console.log(taskReqData);
  }, []);

  return (
    <Box
      sx={{
        minWidth: "250px",
        m: 2,
      }}
    >
      <div className="task-container">
        <NavigateBeforeIcon
          onClick={() =>
            currentTaskRequest > 0 && setCurrentTaskRequest((prev) => prev - 1)
          }
        />
        {taskReqData && (
          <TaskRequest
            key={taskReqData[currentTaskRequest].id}
            projectTitle={taskReqData[currentTaskRequest].projectTitle}
            admin={taskReqData[currentTaskRequest].admin}
            desc={taskReqData[currentTaskRequest].desc}
          />
        )}
        <NavigateNextIcon
          onClick={() =>
            currentTaskRequest < taskReqData.length - 1 &&
            setCurrentTaskRequest((prev) => (prev + 1) % taskReqData.length)
          }
        />
      </div>
    </Box>
  );
};
export default TaskRequestSwpier;
