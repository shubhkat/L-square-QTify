import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styles from "./Navbar.module.css"
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.navbar}>
      <AppBar position="static" className="styles.appBar">
        <Toolbar>
          <Link to="/">
            <Logo />
          </Link>
          <IconButton color="inherit" aria-label="searchBar">
            {/* <SearchBar /> */}
          </IconButton>
          <Button color="inherit" aria-label="feedbackButton">
            <FeedbackButton />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
