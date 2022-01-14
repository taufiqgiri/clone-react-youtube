import React from "react";
import { Box, Typography } from "@mui/material";
import { SubscriptionChannel } from '../../';
import { subscriptionChannels } from '../../../sample-data/subscription-channel';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  textContainer: {
    width: '100%', 
    marginLeft: '25px', 
    textAlign: 'left'
  }
});

export default function SubscriptionBar() {
  const classes = useStyles();

  return (
    <Box sx={{margin: '10px 0'}}>
      <Box className={classes.textContainer}>
        <Typography variant="topic">SUBSCRIPTION</Typography>
      </Box>
      {subscriptionChannels.map((channel, index) => {
        return (
          <SubscriptionChannel 
            key={index} 
            source={channel.source} 
            alt={channel.alt} 
            title={channel.title} 
          />
        )
      })}
    </Box>
  )
}