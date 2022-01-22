import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ImageCard } from '../..';
import { makeStyles } from '@mui/styles';
import CircleIcon from '@mui/icons-material/Circle';
import { generateVideoSeen } from '../../../helpers/generateSeen';
import { truncateText } from '../../../helpers/truncateText';

const useStyles = makeStyles({
  contDescription: {
    marginTop: '5px'
  },
  avatar: {
    marginRight: '10px'
  },
  text: {
    wordWrap: 'break-word',
    textAlign: 'left',
    margin: 0
  },
  contTitle: {
    width: '260px'
  },
  circle: {
    margin: '0 5px', 
    color: '#a3a2a2'
  }
})

export default function VideoCard(props) {
  const classes = useStyles();
  const { video } = props;

  return (
    <Box className={`flex flex-column justify-content-start align-item-start`} sx={{margin: '10px'}}>
      <ImageCard video={video} />
      <Box 
        className={`${classes.contDescription} flex justify-content-start align-item-start`}
      >
        <Avatar src={video.avatar} className={classes.avatar} />
        <Box className={`${classes.contTitle} flex flex-column justify-content-start align-item-start`}>
          <Typography className={classes.text} sx={{marginBottom: '15px'}} variant='title'>
            {truncateText(video.title)}
          </Typography>
          <Typography className={classes.text} variant='content'>
            {video.author}
          </Typography>
          <Box className={`flex justify-content-start align-item-center`}>
            <Typography className={classes.text} variant='content'>
              {generateVideoSeen(video.seen)}
            </Typography>
            <CircleIcon className={classes.circle} sx={{width: '7px'}} />
            <Typography className={classes.text} variant='content'>
              {video.uploaded}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}