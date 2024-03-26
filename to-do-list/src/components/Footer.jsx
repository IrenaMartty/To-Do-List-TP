import { Box, Typography } from '@mui/material';


export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#800080', textAlign: 'center', position: 'fixed',
    bottom: 0,
    width: '100%' }}>
      <Typography variant="h3" sx={{ color: '#fff', p: 2, fontSize: '16px' }}>
        Made with ♥ by IrenaMartty
      </Typography>
    </Box>
  );
}