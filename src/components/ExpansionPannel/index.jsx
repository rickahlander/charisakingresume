import React from "react";
import Box from "@mui/material/Box";
import ExpansionPanel from "@mui/material/Accordion";
import ExpansionPanelSummary from "@mui/material/AccordionSummary";
import ExpansionPanelDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleExpansionPanel({ heading, body }) {

  return (
    <Box
      sx={{ width: "100%" }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 'regular'
            }}>{heading}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{body}</ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
  );
}
