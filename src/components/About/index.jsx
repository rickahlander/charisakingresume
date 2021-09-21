import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const aboutText =
  "I am a registered nurse specializing in psychiatric, home-care, and hospice.";

const About = () => (
  <Grid sx={{
    backgroundColor: "#607d8b",
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
    <Grid item xs={12} sm={4} md={4}>
      <Typography align="left" sx={{ color: "white" }}>
        ABOUT
      </Typography>
    </Grid>
    <Grid item xs={12} sm={8} md={8}>
      <Typography align="left" sx={{ color: "white" }}>
        {aboutText}
      </Typography>
    </Grid>
  </Grid>
);

export default About;
