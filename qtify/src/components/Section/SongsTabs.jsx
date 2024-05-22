/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Tabs, Tab, useTheme, styled } from "@mui/material";
import PropTypes from "prop-types";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  //   console.log("SongsTabs.jsx CustomTabPanel debug props::", props);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`songs-tabpanel-${index}`}
      aria-labelledby={`songs-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `songs-tab-${index}`,
    "aria-controls": `songs-tabpanel-${index}`,
  };
}

const SongsTabs = ({ data, tabData }) => {
  //   console.log("SongsTabs.jsx SongsTabs debug tabData::", tabData);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const [genre, setGenre] = React.useState("All");

  const handleChange = (event, newValue) => {
    // console.log("SongsTabs.jsx SongsTabs handleChange debug event", event);
    setValue(newValue);
  };

  const filter = (data, item) => {
    return data.filter((songs) => songs.genre.key === item.key);
  };

  const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      "&.Mui-selected": {
        color: theme.palette.main,
      },
    })
  );

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="songs tabs"
          sx={{ pb: "10px" }}
        >
          <CustomTab
            label={genre}
            {...a11yProps(0)}
            sx={{
              color: theme.palette.main,
              fontFamily: theme.typography.fontFamily,
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              textAlign: "left",
              textTransform: "none",
            }}
            className={styles.label}
            key={genre}
          />
          {tabData.map((item, index) => (
            <CustomTab
              label={item.label}
              {...a11yProps(index + 1)}
              sx={{
                color: theme.palette.main,
                fontFamily: theme.typography.fontFamily,
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                textAlign: "left",
                textTransform: "none",
              }}
              className={styles.label}
              key={item.key}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} key={genre}>
        <Carousel data={data} tabData={tabData} />
      </CustomTabPanel>
      {tabData.map((item, index) => (
        <CustomTabPanel value={value} index={index + 1} key={item.key}>
          <Carousel data={filter(data, item)} tabData={tabData} />
        </CustomTabPanel>
      ))}
    </>
  );
};

export default React.memo(SongsTabs);
