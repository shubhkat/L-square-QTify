import React from "react";
import Button from "@mui/material/Button";
import styles from "./ReusableButton.module.css";
import { Typography } from "@mui/material";

function ReusableButton(props) {
  // console.log("ReusableButton debug props::", props)
  return (
    <Button
      variant="contained"
      color="inherit"
      className={styles.button}
    >
      <Typography className={styles.buttonName}>{props.buttonName}</Typography>
    </Button>
  );
}

export default React.memo(ReusableButton);
