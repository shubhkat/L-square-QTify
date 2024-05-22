import React from "react";
import { ReactComponent as LeftArrowIcon } from "../../assets/LeftArrow.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/RightArrow.svg";
import { useSwiper } from "swiper/react";
// import { Box } from "@mui/material";

const CarouselNavigation = ({ prevArrow }) => {

  const swiper = useSwiper();

  const handleLeftSlide = () => {
    swiper.slidePrev();
  }

  const handleRightSlide = () => {
    swiper.slideNext();
  }

  if(prevArrow) {
    return (
    <LeftArrowIcon onClick={handleLeftSlide}/>
    )
  }
  return <RightArrowIcon onClick={handleRightSlide}/>
};

export default React.memo(CarouselNavigation);
