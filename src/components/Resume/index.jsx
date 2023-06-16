import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import ResumePDF from "../../assets/Charisa Resume pmhnp 2023.pdf"

const resume = () => (
  <Box>
    <Stack direction = "row" spacing = {2}>
    <Button variant="outlined">
      <Link href={ResumePDF} underline="none" type = "application/pdf" target="_blank">Click to Download PDF Resume</Link>
      </Button>
    </Stack>
  </Box>
);

export default resume;