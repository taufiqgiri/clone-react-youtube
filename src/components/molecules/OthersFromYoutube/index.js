import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SideMenu } from "../..";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import WifiIcon from '@mui/icons-material/Wifi';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const useStyles = makeStyles({
  textContainer: {
    width: '100%', 
    marginLeft: '25px', 
    textAlign: 'left'
  }
});

export default function OthersFromYoutube() {
  const classes = useStyles();

  return (
    <Box sx={{margin: '10px 0'}}>
      <Box className={classes.textContainer}>
        <Typography variant="topic">LAINNYA DARI YOUTUBE</Typography>
      </Box>
      <SideMenu icon={<YouTubeIcon />} title={'YouTube Premium'} />
      <SideMenu icon={<TheatersOutlinedIcon />} title={'Film'} />
      <SideMenu icon={<SportsEsportsOutlinedIcon />} title={'Game'} />
      <SideMenu icon={<WifiIcon />} title={'Live'} />
      <SideMenu icon={<EmojiEventsOutlinedIcon />} title={'Olahraga'} />
    </Box>
  )
}