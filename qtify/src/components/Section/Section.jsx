import React, { useState } from "react";
import CustomGrid from "../CustomGrid/CustomGrid";
import { Box, Stack, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import styles from "./Section.module.css";
import { useTheme } from "@emotion/react";

function Section({ name, data }) {
  console.log("Section.jsx Section debug [name, data]: ", [name, data]);
  const theme = useTheme();
  const [collapsedTopAlbums, setCollapsedTopAlbums] = useState(false);

  const handleCollapsedTopAlbums = () => {
    setCollapsedTopAlbums(!collapsedTopAlbums);
  };

  return (
    <Box className={styles.section}>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          color={theme.palette.main}
          variant="h6"
          className={styles.sectionName}
        >
          {name}
        </Typography>
        <Typography
          onClick={handleCollapsedTopAlbums}
          color={theme.palette.primary["Primary 400"]}
          variant="h6"
          className={styles.collapseBar}
        >
          {!collapsedTopAlbums ? "Collapse" : "Show all"}
        </Typography>
      </Stack>
      <Collapse in={!collapsedTopAlbums} timeout="auto" unmountOnExit>
        <CustomGrid data={data} />
      </Collapse>
    </Box>
  );
}

export default React.memo(Section);
