import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { videoCategories } from '../../../sample-data/video-category';
import { Chip } from '@mui/material';
import { NextArrow, PreviousArrow } from '../..';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  chip: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 10px',
    width: '100%'
  }
});

export default function CategorySlider() {
  const classes = useStyles();

  const settings = {
    Infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />
  };

  return (
    <Slider {...settings} className={classes.chip}>
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
  )
}