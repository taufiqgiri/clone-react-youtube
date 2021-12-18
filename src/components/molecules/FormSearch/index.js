import React from 'react';
import {Paper, IconButton, Box} from '@mui/material';
import {TextInput} from '../../../components';
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    width: 400,
    height: 35,
    borderRadius: '2px'
  }
});

export default function FormSearch() {
  const classes = useStyles();
  
  return (
    <Paper
      component="form"
      className={`${classes.root} flex align-item-center`}
      variant="transparent"
    >
      <TextInput />
      <Box>
        <SearchIcon />
      </Box>
    </Paper>
  )
}