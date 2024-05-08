import React, { useState } from "react";
import CustomGrid from "../CustomGrid/CustomGrid";
import {
  Box,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
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
      {data.length === 0 ? (
        <Stack direction="row" justifyContent="center" marginBlock={25}>
          <CircularProgress
            size={75}
            sx={{ color: theme.palette.primary["Primary 400"] }}
          />
        </Stack>
      ) : (
        <CustomGrid data={data} collapsed={collapsed} />
      )}
    </Box>
  );
}

export default React.memo(Section);
