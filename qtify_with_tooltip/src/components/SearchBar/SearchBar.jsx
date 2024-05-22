import React from "react";
import { FormControl, IconButton, TextField } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg"
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <FormControl className={styles.form}>
      <TextField
        id={styles.searchbar}
        className={styles.searchbar}
        variant="outlined"
        placeholder="Search a song of your choice"
        aria-placeholder="Search a song of your choice"
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

export default React.memo(SearchBar);
