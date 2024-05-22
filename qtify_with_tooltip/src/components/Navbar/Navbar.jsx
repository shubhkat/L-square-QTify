import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "@mui/material";
import styles from "./Navbar.module.css"
import ReusableButton from "../ReusableButton/ReusableButton";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar"

function Navbar() {
  const buttonName = "Give Feedback"; 
  return (
    <Box className={styles.navbar}>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <Link to="/">
            <Logo />
          </Link>
          <SearchBar />
          <ReusableButton buttonName={buttonName}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default React.memo(Navbar);
