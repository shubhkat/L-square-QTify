import * as React from "react";
import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Chip,
} from "@mui/material";
import styles from "./Cards.module.css";

function Cards({ data }) {
  return (
    <Card className={styles.card}>
      <Box className={styles.innerCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={data.image?data.image:require("../../assets/cardImage.png")}
            alt="Card Image Not Found"
            className={styles.img}
          />
        </CardActionArea>
        <CardActions className={styles.chipContainer}>
          <Chip label={`${data.follows?data.follows:100} Follows`} className={styles.chips}/>
        </CardActions>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className={styles.name}>
          {data.title?data.title:"New English Songs"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default React.memo(Cards);
