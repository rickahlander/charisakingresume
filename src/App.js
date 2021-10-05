import React from "react";
import AppBar from "./components/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles"
import Marquee from "./components/Marquee";
import primaryColor from "@mui/material/colors/pink";
import About from "./components/About";
import Requirements from "./components/Requirements"
import Projects from "./containers/Projects";
import Portfolio from "./containers/Portoflio";
import Contact from "./containers/Contact";
import Resume from "./components/Resume";
import Hidden from "@mui/material/Hidden";
import Box from "@mui/material/Box";

function App() {
  let theme = createTheme({
    palette: {
      mode: "light",
      primary: primaryColor,
      secondary: {
        main: "#fff",
        contrastText: "#000",
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppBar />
        <Marquee />
        <Box name="about me">
          <About />
        </Box>
        <Hidden smDown>
          <Box name="resume">
            <Resume />
          </Box>
        </Hidden>
        <Box name="preceptorship requirements">
          <Requirements />
        </Box>
        <Box name="work experience">
          <Projects />
        </Box>
        <Box name="portfolio">
          <Portfolio />
        </Box>
        <Box name="contact">
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>

  );
}

export default App;
