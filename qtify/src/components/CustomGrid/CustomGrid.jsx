import React from "react";
import Grid from "@mui/material/Grid";
import Cards from "../Cards/Cards";
import styles from "./CustomGrid.module.css";

const CustomGrid = ({ data }) => {
  console.log("CustomGrid.jsx CustomGrid debug data: ", data);
  return (
    <>
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
      </Grid>
    </>
  );
};

export default React.memo(CustomGrid);
