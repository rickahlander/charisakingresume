import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Resume from "../Resume";

//ICONS
import AboutIcon from "@mui/icons-material/LocalHospitalOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import ContactIcon from "@mui/icons-material/ContactMail";
import DescriptionIcon from '@mui/icons-material/Description';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

//REACT SCROLL
import {
  Link,
} from "react-scroll";
import { IconButton } from "@mui/material";


const buttons = [
  {
    label: "about me",
    Icon: <AboutIcon />,
    key: "key4"
  },
  {
    label: "preceptorship requirements",
    Icon: <FormatListBulletedIcon />,
    key: "key7"
  },
  {
    label: "work experience",
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

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid container direction="row">
            <Grid item md={10}>
              <Stack direction="row" spacing={2}>
                {buttons.map(renderButton)}
              </Stack>
            </Grid>
            <Grid item md={2}>
              <Resume />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
