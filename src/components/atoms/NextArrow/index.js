import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from "@mui/material";

export default function NextArrow(props) {
  const { onClick } = props;

  return (
    <IconButton onClick={onClick}>
      <ChevronRightIcon sx={{color: '#999797'}} />
    </IconButton>
  )
}