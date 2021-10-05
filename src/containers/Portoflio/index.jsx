import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';


const portfolio = () => {
  return (
    <Grid sx={{
      backgroundColor: "#607d8b",
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
        <Box>
        
        <Typography align="center" sx={{ color: "white" }} variant="h4">
        <SchoolIcon /> EDUCATION &nbsp;-&nbsp; <MedicalServicesIcon /> CREDENTIALS &nbsp;-&nbsp; <GroupIcon /> ASSOCIATIONS
        </Typography>
        </Box>
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
              <Grid item xs={6} sm={6} md={4}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <SchoolIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="PMHNP Candidate" secondary = "Frontier Nursing University - Current" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <SchoolIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="BS Nursing" secondary = "Weber State University - April 2019" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <SchoolIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="ADN" secondary = "Weber State University - April 2010" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MedicalServicesIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Registered Nurse, Utah" secondary = "Exp. 01/31/2023" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MedicalServicesIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Registered Nurse, Oregon" secondary = "Exp. 11/5/2023" />
                  </ListItem>
                  
                </List>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <GroupIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="American Association of Nurse Practitioners" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <GroupIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Oregon Hospice and Palliative Care Association" />
                  </ListItem>
                 
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );

};

export default portfolio;