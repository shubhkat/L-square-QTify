import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "@mui/material";
import styles from "./Navbar.module.css"
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.navbar}>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <Link to="/">
            <Logo />
          </Link>
          {/* <SearchBar /> */}
          <FeedbackButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
