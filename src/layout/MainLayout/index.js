import React from "react";
import { TopBar, SideBar } from "../../components";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles({
  root: {
    backgroundColor: '#202020',
    width: '100vw',
    height: '100vh'
  },
  contentPage: {
    height: '90%',
    width: '100%'
  },
  component: {
    width: '82%', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  }
});

export default function MainLayout({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <Box className={`${classes.contentPage} flex justify-content-start align-item-start`}>
        <SideBar />
        <Box className={classes.component}>
          {children}
        </Box>
      </Box>
    </div>
  )
}