import { Box } from "@mui/material";
import React from "react";
import styles from "./Carousel.module.css";
import Cards from "../Cards/Cards";
import CarouselNavigation from "../CarouselNavigation/CarouselNavigation";

// import Swiper core and required modulesmodules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";

const Carousel = ({ data, tabData }) => {
  //   console.log("Carousel.jsx Carousel debug data:: ", data);

  return (
    // <Box className={styles.wrapper} component="h1">Carousel</Box>
    <Swiper
      spaceBetween={10}
      modules={[Navigation]}
      slidesPerView={"auto"}
      initialSlide={0}
      breakpoints={{
        600: { slidesPerView: 3 },
        900: { slidesPerView: 4 },
        1200: { slidesPerView: 6 },
        1536: { slidesPerView: 8 },
      }}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      //   onSlideChange={() => console.log("slide change")}
      //   className={styles.carouselWrapper}
    >
      {/* <Box className={styles.navWrapper} component="span"> */}
        <Box className={styles.prevNav} component="span">
          <CarouselNavigation prevArrow={true} />
        </Box>
        <Box className={styles.nextNav} component="span">
          <CarouselNavigation prevArrow={false} />
        </Box>
      {/* </Box> */}
      {/* <Box className={styles.cardWrapper}> */}
        {data?.map((album) => (
          <SwiperSlide key={album.id}>
            <Cards data={album} tabData={tabData} />
          </SwiperSlide>
        ))}
      {/* </Box> */}
    </Swiper>
  );
};

export default React.memo(Carousel);
