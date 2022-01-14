import React from "react";
import {Box, Typography} from '@mui/material'; 
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    color: 'white', 
    margin: '20px 0 20px 25px'
  }
})

export default function SideMenu({icon, title}) {
  const classes = useStyles();

  return (
    <Box className={`flex justify-content-start align-item-center ${classes.root}`}>
      <Box className="flex justify-content-center align-item-center" sx={{marginRight: '10px'}}>
        {icon}
      </Box>
      <Typography variant="title">
        {title}
      </Typography>
    </Box>
  )
}