import React from "react";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";

const palette = {
  primary: {
    "main": "#34C94B",
    "Primary 900": "#006A08",
    "Primary 800": "#00890D",
    "Primary 700": "#009B13",
    "Primary 600": "#01AD21",
    "Primary 500": "#00BD2B",
    "Primary 400": "#35C94B",
    "Primary 300": "#64D36E",
    "Primary 200": "#95DF9A",
    "Primary 100": "#C1ECC2",
    "Primary 50": "#E5F7E6",
  },
  secondary: {
    "main": "#121212",
  },
  "main": "#ffffff",
}

const theme = createTheme({
  palette,
  typography: {
    fontFamily: [
      "Poppins"
    ].join(','),
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Outlet context={{  }}/>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
