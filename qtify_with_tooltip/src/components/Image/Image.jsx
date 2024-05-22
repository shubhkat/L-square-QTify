import { Box } from "@mui/material";
import React from "react";

function Image({ src, alt, imageStyle }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      className={imageStyle}
    ></Box>
  );
}

export default React.memo(Image);
