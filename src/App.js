import React, { useState } from "react";
import AppBar from "./components/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles"
import Marquee from "./components/Marquee";
import primaryColor from "@mui/material/colors/pink";
import About from "./components/About";
import Projects from "./containers/Projects";
import Portfolio from "./containers/Portoflio";
import Contact from "./containers/Contact";
import Resume from "./components/Resume";
import Hidden from "@mui/material/Hidden";
import Box from "@mui/material/Box";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(true);
  let theme = createTheme({
    palette: {
      mode: useDarkTheme ? "dark" : "light",
      primary: primaryColor,
      secondary: {
        main: useDarkTheme ? "#000" : "#fff",
        contrastText: useDarkTheme ? "#fff" : "#000",
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppBar isDarkTheme={useDarkTheme} setUseDarkTheme={setUseDarkTheme} />
        <Marquee isDarkTheme={useDarkTheme}/>
        <Box name="about">
          <About />
        </Box>
        <Hidden smDown>
          <Box name="resume">
            <Resume />
          </Box>
        </Hidden>
        <Box name="timeline">
          <Projects useDarkTheme={useDarkTheme} />
        </Box>
        <Box name="portfolio">
          <Portfolio useDarkTheme={useDarkTheme} />
        </Box>
        <Box name="contact">
          <Contact />
        </Box>
      </Box>
   </ThemeProvider>

  );
}

export default App;
