import React from 'react';
import 'fontsource-roboto';
import Number from './Components/Number/Number'
import './App.css';
import { Typography, createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core';

let HeadingTheme = createMuiTheme();
HeadingTheme = responsiveFontSizes(HeadingTheme);

function App() {

  return (
    <div className = 'App'> 
    <ThemeProvider theme={HeadingTheme}>
          <Typography
            variant  = "h1">
               Number Facts
          </Typography>
    </ThemeProvider>
    
      <Number />
    </div>
  );
}

export default App;
