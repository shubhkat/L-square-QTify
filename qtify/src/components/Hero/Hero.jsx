import { Box, Typography } from "@mui/material";
import styles from "./Hero.module.css";
import React from "react";
import heroImg from "../../assets/hero_headphones.png";
import Image from "../Image/Image"

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
      <Image src={heroImg} alt="qtify-logo" imageStyle={styles.img}/>
    </Box>
  );
}

export default React.memo(Hero);