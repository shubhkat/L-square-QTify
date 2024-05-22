import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
import { Box } from "@mui/material";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const props = useOutletContext();
  const { topAlbums, newAlbums, songs, genres } = props.data;
  // console.log("HomePage.jsx HomePage props.data: ", props.data);
  // console.log("HomePage.jsx HomePage { topAlbums, newAlbums, songs, genres }: ", { topAlbums, newAlbums, songs, genres });

  return (
    <>
      <Hero />
      <Box className={styles.wrapper}>
        <Section name="Top Albums" data={topAlbums} />
        <Section name="New Albums" data={newAlbums} />
        <Section name="Songs" data={songs} tabData={genres} />
      </Box>
    </>
  );
};

export default React.memo(HomePage);
