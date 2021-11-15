import React from "react";
import AppBar from "./components/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles"
import Marquee from "./components/Marquee";
import About from "./components/About";
import Requirements from "./components/Requirements"
import Projects from "./containers/Projects";
import Portfolio from "./containers/Portoflio";
import Contact from "./containers/Contact";
import Box from "@mui/material/Box";

function App() {
  let theme = createTheme({
    palette: {
      primary: {
        light: '#344955',
        main: '#232F34',
        dark: '#232F34',
        contrastText: '#fff',
      },
      secondary: {
        main: '#7fcbdc',
        contrastText: '#000',
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
