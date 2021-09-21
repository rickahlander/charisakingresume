import React from "react";
import Grid from "@mui/material/Grid";
import ExpansionPannel from "../ExpansionPannel";
import Resume from "../../assets/Charisa-Resume-2021.pdf";

const resume = () => (
  <Grid container justifyContent="center" sx={{ margin: "24px 0" }}>
    <Grid item xs={12} sm={10} md={8}>
      <ExpansionPannel
        heading="Resume (Click to view and download)"
        body={
          <div style={{ height: "66vh", width: "100%" }}>
            <embed src={Resume} width="100%" height="100%"></embed>
          </div>
        }
      />
    </Grid>
  </Grid>
);

export default resume;