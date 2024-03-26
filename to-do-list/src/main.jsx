import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';

import backgroundImage from './assets/violet-watercolor-texture-background.jpg';


const rootStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh'
};

ReactDOM.render(
  <div style={rootStyle}>
        <CssBaseline />

    <App />

  </div>,
  document.getElementById('root')
);