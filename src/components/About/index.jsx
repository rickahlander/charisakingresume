import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PersonIcon from '@mui/icons-material/Person';


const aboutText = (
  <>
<p>Charisa is a Board-Certified Psychiatric Mental Health Nurse Practitioner who provides mental health services to children, adolescents, and adults. She obtained her Master’s in Nursing, summa cum laude from Frontier Nursing University and undergraduate degree from Weber State University in Utah. Prior to her certification as a PMHNP, she spent 13-years as a registered nurse in mental health field supporting patients struggling with symptoms of depression, anxiety, ADHD, bipolar disorder and substance use.</p> 
<p>Charisa is driven to deliver compassionate, evidence-based, and patient-centered mental health care where clients are partners in the treatment planning process. She believes in the power of combining medication management with other therapeutic and holistic modalities inclusive of nutrition, movement, healthy relationships, social connection and creativity. She values the collaboration between medication management, primary care and counseling services to inform care.</p>
<p>Outside of work, Charisa enjoys spending time outdoors climbing to the highest peaks and submerging in water. She is grateful to live in the Pacific Northwest that provides such an abundance of nature’s beauty from the forests to the beaches.</p>
</>
)

const About = () => (
  
  <Grid sx={{
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingRight: "16px",
    paddingLeft: "16px"
  }}
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
  >
  <Paper elevation = {10}>  
    <Grid item xs={12} sm={12} md={12}>
      <Typography align="center" variant="h4">
        <PersonIcon/> About Me
      </Typography>
    </Grid>
    <Grid item xs={12} sm={12} md={12}>
      <Typography align="left" sx={{
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingRight: "16px",
    paddingLeft: "16px"
  }}>
        {aboutText}
      </Typography>
    </Grid>
    </Paper>
  </Grid>
  
);

export default About;
