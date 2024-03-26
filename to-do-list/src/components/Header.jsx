import { Box, Typography } from '@mui/material';
import { FaCheckCircle } from "react-icons/fa";


export default function Header() {
  return (
    <Box sx={{ backgroundColor: '#800080', textAlign: 'center', width: '100%', m: 0 }}>
    <Typography variant="h1" sx={{color: '#fff', fontWeight:'bold', p:3}}>
    <FaCheckCircle /> ToDo List
    </Typography>
    </Box>
  )
}
