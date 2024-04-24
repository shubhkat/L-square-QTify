import { Box, Typography } from "@mui/material";
import styles from "./Hero.module.css";
import React from "react";
import heroImg from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <Box className={styles.hero}>
      <Box className={styles.heroGroup}>
        <Typography className={styles.heroText}>
          100 Thousand Songs, ad-free
        </Typography>
        <Typography className={styles.heroText}>
          Over thousands podcast episodes
        </Typography>
      </Box>
      <Box
        component="img"
        src={heroImg}
        alt="qtify-logo"
        className={styles.img}
      ></Box>
    </Box>
  );
}

export default Hero;
