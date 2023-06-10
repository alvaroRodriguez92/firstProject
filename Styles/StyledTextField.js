import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color:"white"},
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderBottomColor: 'white',
      color:"white"
    },
    '&:hover fieldset': {
      borderBottomColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderBottomColor: 'white',
    },
  },
});