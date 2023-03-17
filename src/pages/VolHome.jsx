import React from "react";
import TaskRequestSwpier from "../components/taskRequests/TaskRequestSwpier";
import OpportunititesCatalouge from "../components/opportunities/OpportunityiesCatalouge";
import { Button } from "@mui/material";

const VolHome = () => {
  return (
    <>
      <h1 style={{ fontSize: "3rem" }}> Hello User Sahil Lende </h1>
      <Button size="large" variant="contained">
        OverView
      </Button>
      <TaskRequestSwpier />
      <OpportunititesCatalouge />
    </>
  );
};

export default VolHome;
