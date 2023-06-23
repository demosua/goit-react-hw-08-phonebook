import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserMenu from '../UserMenu';
import { Button } from '@mui/material';
import { Link as LinkTo} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {styles, Search, SearchIconWrapper, StyledInputBase} from './AppBar.styled'

const NavBar = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <>
      <Box sx={styles.flex}>
        <AppBar position='sticky' disablegutters='true'>
          <Toolbar>
            <Typography variant='h6' color='inherit' sx={styles.flex}>
              CONTACTS
            </Typography>
            {isLoggedIn
              ? <>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <UserMenu />
              </>
              : <LinkTo to="/login" ><Button  variant='text' sx={{color: 'white'}} >Login</Button></LinkTo>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;