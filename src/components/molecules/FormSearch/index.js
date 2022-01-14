import React from 'react';
import {Paper, Box} from '@mui/material';
import {TextInput} from '../../../components';
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 35,
    borderRadius: '2px',
    margin: '0 5px'
  },
  ctnBtnSearch: {
    backgroundColor: 'hsla(0, 0%, 53.3%, 0.4)',
    height: '100%', 
    width: '64px'
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
      <Box className={`flex justify-content-center align-item-center ${classes.ctnBtnSearch}`}>
        <SearchIcon sx={{color: 'white'}} />
      </Box>
    </Paper>
  )
}