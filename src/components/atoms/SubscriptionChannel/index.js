import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    margin: '20px 0 20px 25px'
  },
  textContainer: {
    whiteSpace: 'nowrap',
    width: 150,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'white',
    textAlign: 'left'
  },
  avatar: {
    marginRight: '10px'
  }
});

export default function SubscriptionChannel({source, alt, title}) {
  const classes = useStyles();

  return (
    <Box className={`flex justify-content-start align-item-center ${classes.root}`}>
      <Avatar 
        src={source} 
        alt={alt}
        className={classes.avatar}
        sx={{height: '22px', width: '22px'}}
      />
      <Box className={classes.textContainer}>
        <Typography variant="title">{title}</Typography>
      </Box>
    </Box>
  )
}