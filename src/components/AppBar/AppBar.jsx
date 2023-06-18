import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
import UserMenu from '../UserMenu';
import { Button } from '@mui/material';
import { Link as LinkTo} from 'react-router-dom';
import { useSelector } from 'react-redux';

const styles = {
  flex: {
    flex: 1,
  },
};

const Navbar = () => {
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
              ? <UserMenu />
              : <LinkTo to="/login" ><Button  variant='text' sx={{color: 'white'}} >Login</Button></LinkTo>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;