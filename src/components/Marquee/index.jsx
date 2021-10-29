import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BusinessImage from "../../assets/images/charisa-business-photo.JPG";
import Box from "@mui/material/Box";

export default function PaperSheet() {
  return (
    <Grid container direction="row">
    <Grid xs={4} sx={{
      background: `url(${BusinessImage}) no-repeat;`,
      height: "800px",
      maxHeight: "80vh",
      backgroundPosition: "left top",
      backgroundSize: "100%"
    }}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
    </Grid>
    <Grid xs={8} sx={{bgcolor: 'primary.main'}}
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
    </Grid>
  );
}
