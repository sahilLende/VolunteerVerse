import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
const TaskFilter = ({ statusForList, setStatusForList }) => {
  const tabs = ["All", "Completed", "Pending", "Approved"];
  const handleChange = (event, newValue) => {
    setStatusForList(newValue);
  };
  //add filters according to  data only
  return (
    <div
      style={{
        padding: "0.4rem",
        maxHeight: "30px",
        marginBottom: "50px",
      }}
    >
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={statusForList}
        onChange={handleChange}
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
      >
        {tabs.map((item) => (
          <Tab
            sx={{
              borderRadius: "20%",

              mr: 1,
            }}
            key={item}
            value={item}
            label={item}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TaskFilter;
