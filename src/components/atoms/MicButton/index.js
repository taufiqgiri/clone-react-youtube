import React from 'react';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton } from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black', 
    margin: '0 5px'
  }
})

export default function MicButton() {
  const classes = useStyles();

  return (
    <IconButton className={classes.root}>
      <MicIcon sx={{color: 'white'}} />
    </IconButton>
  )
}