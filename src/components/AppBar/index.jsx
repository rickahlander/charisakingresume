import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Box from "@mui/material/Box";

//ICONS
import AboutIcon from "@mui/icons-material/LocalHospitalOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import ContactIcon from "@mui/icons-material/ContactMail";

//REACT SCROLL
import {
  Link,
} from "react-scroll";


const buttons = [
  {
    label: "about me",
    Icon: <AboutIcon />,
    key: "key4"
  },
  {
    label: "experience",
    Icon: <TimelineIcon />,
    key: "key5"
  },
  {
    label: "contact",
    Icon: <ContactIcon />,
    key: "key6"
  }
];

const renderButton = ({ label, Icon, key }) => (
  <Link to={label} spy={true} smooth={true} duration={500} key={key}>
    <Button size="small" startIcon={Icon}>
      {label}
    </Button>
  </Link>
);

export default function ButtonAppBar({ isDarkTheme, setUseDarkTheme }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid direction="row" container justifyContent="space-between">
            <Grid item>
              <Grid direction="row" container justifyContent="flex-start">
                <Hidden smDown>
                  <Grid item>
                    {buttons.map(renderButton)}
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
