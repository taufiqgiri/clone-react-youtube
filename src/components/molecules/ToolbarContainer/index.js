import React from 'react';
import { Box, IconButton, Avatar } from '@mui/material';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  btn: {
    margin: '0 10px'
  }
})

export default function ToolbarContainer() {
  const classes = useStyles();

  return (
    <Box className="flex justify-content-center align-item-center">
      <IconButton size="large" color="inherit" className={classes.btn}>
        <PhotoCameraFrontIcon />
      </IconButton>
      <IconButton size="large" color="inherit" className={classes.btn}>
        <AppsIcon />
      </IconButton>
      <IconButton size="large" color="inherit" className={classes.btn}>
        <NotificationsNoneOutlinedIcon />
      </IconButton>
      <Avatar 
        alt="Profile Picture" 
        src="https://yt3.ggpht.com/yti/APfAmoFbh2BINllNQiL92pTQGBD8mo2pwM_c5JsH-g=s88-c-k-c0x00ffffff-no-rj-mo"
        sx={{width: '35px', height: '35px'}}
        className={classes.btn}
      />
    </Box>
  )
}