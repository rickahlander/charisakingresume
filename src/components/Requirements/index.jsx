import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

// Icons
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PersonIcon from '@mui/icons-material/Person';
import ElderlyIcon from '@mui/icons-material/Elderly';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupsIcon from '@mui/icons-material/Groups';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Requirements = () => (
  <Grid sx={{
    backgroundColor: "secondary.main",
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingRight: "16px",
    paddingLeft: "16px"
  }}
    container
    direction="row"
    alignItems="flex-start"
    justifyContent="flex-start"
  >
    <Grid item xs={12} sm={12} md={12} sx={{
      paddingBottom: "16px",

    }}>
      <Typography align="center" sx={{ color: "white" }} variant="h4">
        <FormatListBulletedIcon/> Experience Summary
      </Typography>
    </Grid>
    <Grid item xs={12} sm={12} md={12}>
      <Grid item xs={12} sm={12} md={12}>
        <Paper>
          <Grid sx={{
            backgroundColor: "white",
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingRight: "16px",
            paddingLeft: "16px"
          }}
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={6} md={6}>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PsychologyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Proven expertise in providing comprehensive care to diverse patient populations, with particular emphasis on mental and behavioral health" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <GroupsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Demonstrated ability to collaborate effectively with interdisciplinary teams, leading to successful treatment planning and care coordination" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <HealthAndSafetyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Significant leadership experience, having overseen nursing teams and ensured compliance with healthcare regulations" />
                </ListItem>
               
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SchoolIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Solid academic background in nursing with both MSN and BSN degrees, coupled with continuous professional development" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmojiEventsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Distinguished for academic excellence with both BSN and MSN Summa Cum Laude honors" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <VolunteerActivismIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Engaged in global health initiatives through volunteering with International Medical Relief" />
                </ListItem>
               
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </Grid>
);

export default Requirements;
