import React from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function PreviousArrow(props) {
  const { onClick } = props;

  return (
    <IconButton onClick={onClick}>
      <ChevronLeftIcon sx={{color: '#999797'}} />
    </IconButton>
  )
}