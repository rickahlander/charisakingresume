import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import openInNewTab from "../../utils/openInNewTab";
import Box from "@mui/material/Box"
import { UTF8ArrToStr, base64DecToArr } from "../../utils/Obfuscate"


const email = "Y2hhcmlzYWtpbmcxQGdtYWlsLmNvbQ==";
const phone = "KzEgKDQzNSkgODUwLTk1MzU=";
const resultEmail = UTF8ArrToStr(base64DecToArr(email));

const contact = () => (
  <Box sx={{ marginTop: "32px" }}>
    <Paper sx={{ padding: "30px 20px" }}>
      <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={4}>
        <Grid item xs={4} sm={3}>
          <Typography align="right">CONTACT</Typography>
        </Grid>
        <Grid item xs={8} sm={3}>
          <Typography sx={{ fontWeight: 900 }}>Email: {resultEmail}
          </Typography>
          <Typography sx={{ fontWeight: 900, marginTop: "16px" }}>
            Phone: {UTF8ArrToStr(base64DecToArr(phone))}
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Typography align="right">SOCIAL</Typography>
        </Grid>
        <Grid item xs={8} sm={3}>
          <Button
            sx={{ display: "block" }}
            variant="outlined"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/charisa-king-494b38219/")
            }
          >
            LinkedIn
          </Button>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default contact;