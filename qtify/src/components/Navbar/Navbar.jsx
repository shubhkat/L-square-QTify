import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.navbar}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            {/* <Logo /> */}
          </Link>
          <IconButton color="inherit" aria-label="search">
            {/* <Search /> */}
          </IconButton>
          <Button color="inherit" aria-label="feedback">
            {/* <Feedback /> */}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
