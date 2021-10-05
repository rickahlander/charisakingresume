import React from "react";
import Resume from "../../assets/Charisa-Resume-2021.pdf";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Link from "@mui/material/Link";

const resume = () => (
  <Box>
    <Stack direction = "row" spacing = {2}>
    <Button variant="outlined">
      <Link href={Resume} underline="none" target="_blank">Click to Download PDF Resume</Link>
      </Button>
    </Stack>
  </Box>
);

export default resume;