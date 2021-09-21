import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const portfolio = ({ useDarkTheme }) => {
  return (
    <Box sx={{ marginTop: "10px", marginBottom: "28px" }}>
      <Paper elevation={0} sx={{ padding: "20px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={10} md={8} lg={6}>
                <Paper elevation={3}
                  sx={{
                    padding: "16px",
                    backgroundColor: useDarkTheme ? "#616161" : "#eee",
                  }}
                >
                  <Typography>LICENSURE</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10} md={8} lg={6}>
                <Paper elevation={3}
                  sx={{
                    padding: "16px",
                    backgroundColor: useDarkTheme ? "#616161" : "#eee",
                  }}
                >
                  <Typography>Registered Nurse, Utah	 - Exp. 01/31/2023</Typography>
                  <Typography>Registered Nurse, Oregon	 - Exp. 11/5/2023</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default portfolio;