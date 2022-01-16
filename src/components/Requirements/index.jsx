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
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

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
        <FormatListBulletedIcon/> PRECEPTORSHIP REQUIREMENTS
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
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccessTimeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Min. 675 Clinical Hours" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ChildCareIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="50 Child or Adolescent Visits" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="50 Adult Visits" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <MoodBadIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="50 Substance Use Disorder Management Visits" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocalHospitalIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="20 Acute/Crisis Care Management Visits" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ElderlyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="20 Geriatric Visits" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PsychologyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="20 Psychotherapy Sessions" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="* 470 hours may be completed via telehealth" />
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
