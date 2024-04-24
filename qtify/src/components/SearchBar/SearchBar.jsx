import React from "react";
import { FormControl, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <FormControl className={styles.form}>
      <TextField
        id={styles.searchbar}
        className={styles.searchbar}
        variant="outlined"
        placeholder="Search a album of your choice"
        aria-placeholder="Search a album of your choice"
        size="small"
      />
      <IconButton
        type="submit"
        aria-label="search"
        className={styles.searchButton}
      >
        <SearchIcon className={styles.searchIcon}/>
      </IconButton>
    </FormControl>
  );
}

export default SearchBar;
