import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PersonIcon from '@mui/icons-material/Person';


const aboutText =
"Seeking a PMHNP position where I can utilize my clinical skills to provide " +
"comprehensive mental health care to individuals across the lifespan. I am dedicated to " +
"promoting mental wellness in the community, using evidence-based practices, and providing " +
"compassionate patient-centered care.";

const About = () => (
  
  <Grid sx={{
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingRight: "16px",
    paddingLeft: "16px"
  }}
    container
    direction="row"
    alignItems="flex-start"
    justifyContent="flex-start"
  >
  <Paper elevation = {10}>  
    <Grid item xs={12} sm={12} md={12}>
      <Typography align="center" variant="h4">
        <PersonIcon/> OBJECTIVE
      </Typography>
    </Grid>
    <Grid item xs={12} sm={12} md={12}>
      <Typography align="left" sx={{
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingRight: "16px",
    paddingLeft: "16px"
  }}>
        {aboutText}
      </Typography>
    </Grid>
    </Paper>
  </Grid>
  
);

export default About;
