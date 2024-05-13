import React from "react";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import { fetchData } from "./services/Services";
import { useState, useEffect } from "react";

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

  const [data, setData] = useState({});

  const getData = async (key, source) => {
    let resource = "";
    if (key === "topAlbums") {
      resource = "albums/top";
    } else if (key === "newAlbums") {
      resource = "albums/new";
    } else if (key === "songs") {
      resource = "songs";
    } else if (key === "genres") {
      resource = "genres";
    }
    const fetchedData = await source(resource);
    // console.log("App.jsx App getData debug fetchedData: ", fetchedData);
    setData((prevState) => { return { ...prevState, [key]: fetchedData }});
  }

  useEffect(() => {
    return () => {
      getData("topAlbums", fetchData);
      getData("newAlbums", fetchData);
      getData("songs", fetchData);
      getData("genres", fetchData);
    }
  }, []);
  
  const {topAlbums = [], newAlbums = [], songs = [], genres = []} = data;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Outlet context={{ data: { topAlbums, newAlbums, songs, genres } }}/>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default React.memo(App);
