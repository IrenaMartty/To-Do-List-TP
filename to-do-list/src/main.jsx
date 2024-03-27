import { createRoot } from 'react-dom/client'; 

import App from './App';
import CssBaseline from '@mui/material/CssBaseline';

import backgroundImage from './assets/violet-watercolor-texture-background.jpg';

const rootStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  width: '100%',
  minHeight: '100vh'
};

createRoot(document.getElementById('root')).render(
  <div style={rootStyle}>
    <CssBaseline />
    <App /> 
  </div>
);