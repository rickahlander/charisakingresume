import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Link from "@mui/material/Link";

const resume = () => (
  <Box>
    <Stack direction = "row" spacing = {2}>
    <Button variant="outlined">
      <Link href={process.env.PUBLIC_URL + "/Charisa-Resume-2021.pdf"} underline="none" type = "application/pdf" target="_blank">Click to Download PDF Resume</Link>
      </Button>
    </Stack>
  </Box>
);

export default resume;