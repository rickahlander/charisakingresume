import React from "react";
import Typography from "@mui/material/Typography";
import img from "../../assets/images/charisa-zions.jpg";
import Grid from "@mui/material/Grid";

export default function PaperSheet({ isDarkTheme }) {
  return (
    <Grid sx={{
      background: `url(${img}) no-repeat center top;`,
      backgroundSize: "cover",
      height: "800px",
      maxHeight: "80vh",
      filter: isDarkTheme ? "grayscale(100%)" : "",
      padding: "16px"
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
      <Grid item xs={8}>
      </Grid>
    </Grid>
  );
}
