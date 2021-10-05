import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import listProjects from "./projects";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

const renderProjectCard = (
  { header, subheader, title, date }
) => (
  <TimelineItem>
    <TimelineContent><Typography variant="h6" component="span">
      {subheader}
    </Typography>
      <Typography>{header}</Typography>
      <Typography>{date}</Typography>
    </TimelineContent>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineOppositeContent color="text.secondary" sx={{ py: '12px', px: 2 }}>
      <Typography align="left" >{title}</Typography>
    </TimelineOppositeContent>
  </TimelineItem>
);

const projects = () => (
  <Grid container justifyContent="center">
    <Grid item xs={12} sm={10} md={8} sx={{ paddingTop: "16px" }}>
      <Typography align="center" variant="h4">
        WORK EXPERIENCE</Typography>
    </Grid>
    <Grid item xs={12} sm={10} md={8}>
      <Timeline >
        {listProjects.map((e) => renderProjectCard(e))}
      </Timeline>
    </Grid>
  </Grid>
);

export default projects;