import React from 'react';
import {InputBase} from '@mui/material';

export default function TextInput() {
  return (
    <InputBase
      sx={{ ml: 1, flex: 1, color: 'white' }}
      placeholder="Telusuri"
      inputProps={{ 'aria-label': 'search' }}
    />
  )
}