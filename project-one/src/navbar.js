import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Logo from './img1.PNG';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'dark',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80ch',
    },
  },
}));

export default function PrimarySearchAppBar() {



 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#feee00", color:"black"}}>
        <Toolbar>
          
          <Typography>
            <img src={Logo}/>
          </Typography>
          <Search sx={{height:'35px'}}>
            <StyledInputBase
              placeholder="What are you looking for?"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
          variant='p'
          sx={{fontWeight:'600',borderLeft:'1px solid black',padding:'0px 12px 0px 12px'}}>
            Sign In 
            <PersonOutlinedIcon
            fontSize='medium'
            sx={{position:'relative',top:'',paddingLeft:'7px'}}/>
          </Typography>
          <Typography
          variant='p'
          sx={{fontWeight:'600',borderLeft:'1px solid black',padding:'0px 12px 0px 12px'}}>
            Cart
            <ShoppingCartOutlinedIcon
            fontSize='medium'
            sx={{position:'relative',top:'',paddingLeft:'8px'}}/>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}