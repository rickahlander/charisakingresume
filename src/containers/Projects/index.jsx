import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import Grid from "@mui/material/Grid";
import listProjects from "./projects";
// import MediaCard from "../../components/MediaCard";
import AboutIcon from "@mui/icons-material/LocalHospitalOutlined";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const renderProjectCard = (
  { header, subheader, title, date, key }
) => (
  <VerticalTimelineElement
    key={key}
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "#607d8b",
      color: "#000",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #607d8b" }}
    date={<p style={{ color: "#fff" }}>{date}</p>}
    iconStyle={{ background: "#607d8b", color: "#fff" }}
    icon={<AboutIcon />}
  >
    <Typography variant="h5" align="left" sx={{ color: "#fff" }}>
      {header}
    </Typography>
    <Typography variant="subtitle1" align="left" sx={{ color: "#fff" }}>
      {subheader}
    </Typography>
    <Typography variant="body2" align="left" sx={{ color: "#fff" }}>
      {title}
    </Typography>
  </VerticalTimelineElement>
);

const projects = () => (
  <Grid container justifyContent="center">
    <Grid item xs={12} sm={10} md={8} sx={{paddingTop: "16px"}}>
    <Typography align="center" variant="h4">
      WORK EXPERIENCE</Typography>
      </Grid>
    <Grid item xs={12} sm={10} md={8}>
      <VerticalTimeline>
        {listProjects.map((e) => renderProjectCard(e))}
      </VerticalTimeline>
    </Grid>
  </Grid>
);

export default projects;