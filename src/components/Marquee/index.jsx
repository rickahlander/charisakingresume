import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BusinessImage from "../../assets/images/charisa-business-photo.jpeg";

export default function PaperSheet() {
  return (
    <Grid container direction="row" sx={{ bgcolor: 'primary.main' }}>
      <Grid xs={12} sm={10} sx={{ bgcolor: 'primary.main' }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Typography sx={{ color: "white" }} variant="h1">
            Charisa King, PMHNP
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "white" }} variant="h4">
          Psychiatric Mental Health Nurse Practitioner
          </Typography>
        </Grid>
{/*         <Grid item spacing="10">
          <Typography sx={{ color: "white" }} variant="h6">
            Seeking PMHNP Clinical Preceptorship
          </Typography>
        </Grid>
        <Grid item spacing="10">
          <Typography sx={{ color: "white" }} variant="h6">
            Beginning Late October 2022
          </Typography>
        </Grid>
 */}      </Grid>
      <Grid xs={12} sm={2} sx={{
        background: `url(${BusinessImage}) no-repeat;`,
        height: "300px",
        maxHeight: "40vh",
        backgroundPosition: "left top",
        backgroundSize: "100%"
      }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
      </Grid>
    </Grid>
  );
}
