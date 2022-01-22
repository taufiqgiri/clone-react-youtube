import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  img: {
    width: '300px'
  },
  contLength: {
    marginTop: '-25px'
  },
  length: {
    backgroundColor: 'black', 
    marginRight: '5px', 
    padding: '0 3px', 
  }
});

export default function ImageCard(props) {
  const classes = useStyles();
  const { video } = props;

  return (
    <Box sx={{height: '170px'}}>
      <img src={video.thumbnail} alt={video.title} className={classes.img} />
      <Box className={`${classes.contLength} flex justify-content-end`}>
        <Box className={`${classes.length} flex justify-content-center align-item-center`}>
          <Typography variant='title' fontSize={'12px'}>
            {video.length}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}