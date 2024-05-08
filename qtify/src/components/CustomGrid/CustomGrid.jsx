import React from "react";
import Grid from "@mui/material/Grid";
import Cards from "../Cards/Cards";
import styles from "./CustomGrid.module.css";
import Carousel from "../Carousel/Carousel";

const CustomGrid = ({ data, collapsed }) => {

  // console.log("CustomGrid.jsx CustomGrid debug data: ", data);
  // console.log("CustomGrid.jsx CustomGrid debug collapsed: ", collapsed);

  return (
    <>
      { !collapsed ? (
      <Grid
        container
        spacing={1}
        className={styles.grid}
      >
      {data?.map((album) => (
        <Grid key={album.id} item xs={12} sm={4} md={3} lg={2} xl={1.5}>
          <Cards data={album} />
        </Grid>
      ))}
      </Grid>) : (
        <Carousel data={data} />
      )}
    </>
  );
};

export default React.memo(CustomGrid);
