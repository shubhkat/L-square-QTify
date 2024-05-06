import React, { useState } from "react";
import CustomGrid from "../CustomGrid/CustomGrid";
import { Box, Stack, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import styles from "./Section.module.css";
import { useTheme } from "@emotion/react";

function Section({ name, data }) {
  // console.log("Section.jsx Section debug [name, data]: ", [name, data]);
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
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
          onClick={handleCollapsed}
          color={theme.palette.primary["Primary 400"]}
          variant="h6"
          className={styles.collapseBar}
        >
          {!collapsed ? "Collapse" : "Show all"}
        </Typography>
      </Stack>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        <CustomGrid data={data} />
      </Collapse>
    </Box>
  );
}

export default React.memo(Section);
