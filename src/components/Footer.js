import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const Footer = () =>{

    return(
        <>
        <CssBaseline />
      <Container maxWidth="xxl" sx={{bottom:0, position:'sticky'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '40px' }}>
        <Typography
            variant="h7"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: 'Helvetica Neue',
              color: '#0063c3',
              textDecoration: 'none',
            }}>
            Made by Sushant Nandwani
          </Typography>
        
        </Box>
      </Container>
        </>
    )
}
export default Footer;

