import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    flexWrap: 'wrap', 
    margin: '10px 0 10px 25px', 
    paddingRight: '25px'
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <Box>
      <Box className={`flex justify-content-start align-item-center ${classes.container}`}>
        <Typography variant="content">Tentang</Typography>
        <Typography variant="content">Pers</Typography>
        <Typography variant="content">Hak cipta</Typography>
        <Typography variant="content">Hubungi kami</Typography>
        <Typography variant="content">Kreator</Typography>
        <Typography variant="content">Beriklan</Typography>
        <Typography variant="content">Developer</Typography>
      </Box>

      <Box className={`flex justify-content-start align-item-center ${classes.container}`}>
        <Typography variant="content">Persyaratan</Typography>
        <Typography variant="content">Privasi</Typography>
        <Typography variant="content">Kebijakan & Keamanan</Typography>
        <Typography variant="content">Cara kerja YouTube</Typography>
        <Typography variant="content">Uji fitur baru</Typography>
      </Box>
    </Box>
  )
}