import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
import { Box } from "@mui/material";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const props = useOutletContext();
  const { topAlbums, newAlbums } = props.data;
  // console.log("HomePage.jsx HomePage props.data: ", props.data);
  // console.log("HomePage.jsx HomePage { topAlbums, newAlbums }: ", { topAlbums, newAlbums });

  return (
    <>
      <Hero />
      <Box className={styles.wrapper}>
        <Section name="Top Albums" data={topAlbums} />
        <Section name="New Albums" data={newAlbums} />
      </Box>
    </>
  );
};

export default React.memo(HomePage);
