import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PersonIcon from '@mui/icons-material/Person';


const aboutText =
  "I am a registered nurse specializing in psychiatric, home-care, and hospice.  " + 
  "I am licensed in both Utah and Oregon.  " + 
  "I am seeking a clinical preceptorship for my Psychiatric Mental Health Nurse Practitioner (PMHNP) program through Frontier Nursing University (FNU).  " + 
  "Below you will find all the details about my experience and what I am looking for in this opportunity.";

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
  <Paper elevation = "10">  
    <Grid item xs={12} sm={12} md={12}>
      <Typography align="center" variant="h4">
        <PersonIcon/> ABOUT ME
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
