import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Opportunity from "./Opportunity";
import { useState, useEffect } from "react";
import opportunityData from "./opportunitis.-slice";
const OpportunititesCatalouge = () => {
  const [data, setData] = useState([]);

  //make opportuntities global

  useEffect(() => {
    setData(opportunityData);
  }, []);

  return (
    <Box sx={{ minWidth: "250px", mb: 1, mt: 1 }}>
      <h1>Opportunites</h1>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 2, sm: 3, md: 3, lg: 3, xl: 3 }}
      >
        {data.map((item) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={2} key={item.id}>
              <Opportunity
                key={item.id + item.projectTitle}
                projectTitle={item.projectTitle}
                OrgName={item.organisationName}
                status={item.status}
                admin={item.admin}
                id={item.id}
                desc={item.desc}
                img={item.img}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default OpportunititesCatalouge;
