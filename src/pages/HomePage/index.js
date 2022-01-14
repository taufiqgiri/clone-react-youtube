import React from "react";
import { MainLayout } from "../../layout";
import { Box, Chip } from "@mui/material";
import { videoCategories } from '../../sample-data/video-category';
import { makeStyles } from "@mui/styles";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({
  chip: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px'
  }
})

export default function HomePage() {
  const classes = useStyles();

  const settings = {
    Infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1
  };

  return (
    <MainLayout>
      <Box sx={{width: '90%', backgroundColor: 'transparent'}}>
        <Slider {...settings}>
          {videoCategories.map((category, index) => {
            return (
              <Chip 
                key={index} 
                label={category.title} 
                variant="inactive"
                sx={{
                  backgroundColor: '#373737'
                }}
              />
            )
          })}
        </Slider>
      </Box>
    </MainLayout>
  )
}