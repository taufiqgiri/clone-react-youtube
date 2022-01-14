import React from "react";
import {Box, AppBar, Toolbar} from '@mui/material';
import { HamburgerMenu, FormSearch, MicButton, ToolbarContainer } from "../../";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1, height: '10%' }}>
      <AppBar position="static" variant="navbar">
        <Toolbar className="flex justify-content-between align-item-center">
          <Box className="flex justify-content-center align-item-center">
            <HamburgerMenu />
            <img 
              src='/assets/images/youtube-dark.PNG' 
              alt="Youtube Logo" 
              height="40" 
              width="90" 
            />
          </Box>
          <Box className="flex justify-content-center align-item-center">
            <FormSearch />
            <MicButton />
          </Box>
          <ToolbarContainer />
        </Toolbar>
      </AppBar>
    </Box>
  )
}