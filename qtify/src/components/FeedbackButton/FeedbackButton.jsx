import React from "react";
import Button from "@mui/material/Button";
import styles from "./FeedbackButton.module.css";
import { Typography } from "@mui/material";

function FeedbackButton() {
  return (
    <Button
      variant="contained"
      color="inherit"
      className={styles.feedbackButton}
    >
      <Typography className={styles.buttonName}>Give Feedback</Typography>
    </Button>
  );
}

export default FeedbackButton;
