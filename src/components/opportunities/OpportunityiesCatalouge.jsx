import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Opportunity from "./Opportunity";
import { useState, useEffect } from "react";
const OpportunititesCatalouge = () => {
  const [data, setData] = useState([]);

  //make opportuntities global

  useEffect(() => {
    const data = [
      {
        id: 1,
        organisationName: "Org name 1",
        projectTitle: "Title 1",
        admin: "Admin Name 1",
        status: true,
        img: "https://picsum.photos/30/30",
        desc: "Description 1",
      },
      {
        id: 2,
        organisationName: "Org name 2",
        projectTitle: "Title 2",
        admin: "Admin Name 2",
        status: false,
        img: "https://picsum.photos/30/30",
        desc: "Description 2",
      },
      {
        id: 3,
        organisationName: "Org name 3",
        projectTitle: "Title 3",
        admin: "Admin Name 3",
        status: true,
        img: "https://picsum.photos/30/30",
        desc: "Description 3",
      },
      {
        id: 4,
        organisationName: "Org name 4",
        projectTitle: "Title 4",
        admin: "Admin Name 4",
        status: false,
        img: "https://picsum.photos/30/30",
        desc: "Description 4",
      },
      {
        id: 5,
        organisationName: "Org name 5",
        projectTitle: "Title 5",
        admin: "Admin Name 5",
        status: true,
        img: "https://picsum.photos/30/30",
        desc: "Description 5",
      },
      {
        id: 6,
        organisationName: "Org name 6",
        projectTitle: "Title 6",
        admin: "Admin Name 6",
        status: false,
        img: "https://picsum.photos/30/30",
        desc: "Description 6",
      },
      {
        id: 7,
        organisationName: "Org name 7",
        projectTitle: "Title 7",
        admin: "Admin Name 7",
        status: true,
        img: "https://picsum.photos/30/30",
        desc: "Description 7",
      },
      {
        id: 8,
        organisationName: "Org name 8",
        projectTitle: "Title 8",
        admin: "Admin Name 8",
        status: false,
        img: "https://picsum.photos/30/30",
        desc: "Description 8",
      },
      {
        id: 9,
        organisationName: "Org name 9",
        projectTitle: "Title 9",
        admin: "Admin Name 9",
        status: true,
        img: "https://picsum.photos/30/30",
        desc: "Description 9",
      },
      {
        id: 10,
        organisationName: "Org name 10",
        projectTitle: "Title 10",
        admin: "Admin Name 10",
        status: false,
        img: "https://picsum.photos/30/30",
        desc: "Description 10",
      },
    ];
    setData(data);
  }, []);

  return (
    <Box sx={{ minWidth: "250px", mr: 5, ml: 5, mb: 2 }}>
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
