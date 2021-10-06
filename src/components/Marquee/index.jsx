import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BackgroundImage from "../../assets/images/charisa-zions.jpeg";

export default function PaperSheet() {
  return (
    <Grid sx={{
      background: `url(${BackgroundImage}) no-repeat;`,
      height: "800px",
      maxHeight: "100vh",
      backgroundSize: "cover",
    }}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Typography sx={{ color: "white" }} variant="h1">
          Charisa King
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ color: "white" }} variant="h4">
          PMHNP Candidate and Registered Nurse
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ color: "white" }} variant="h6">
        Seeking PMHNP Clinical Preceptorship - Fall 2022
        </Typography>
      </Grid>
    </Grid>
  );
}
