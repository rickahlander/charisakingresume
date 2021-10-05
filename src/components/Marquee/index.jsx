import React from "react";
import Typography from "@mui/material/Typography";
import img from "../../assets/images/charisa-zions.jpeg";
import Grid from "@mui/material/Grid";

export default function PaperSheet() {
  return (
    <Grid sx={{
      background: `url(${img}) no-repeat center top;`,
      backgroundSize: "cover",
      height: "800px",
      maxHeight: "80vh",
      padding: "16px",
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
      <Grid item xs={8}>
      </Grid>
    </Grid>
  );
}
