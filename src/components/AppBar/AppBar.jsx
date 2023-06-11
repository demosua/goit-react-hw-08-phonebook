import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

const styles = {
  flex: {
    flex: 1,
  },
};

const Navbar = () => {
  return (
    <>
      <Box sx={styles.flex}>
        <AppBar position='sticky' disablegutters='true'>
          <Toolbar>
            <IconButton color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' sx={styles.flex}>
              CONTACTS
            </Typography>
            <Button color="inherit">Login</Button>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt='user profile'
              src="https://i.pravatar.cc/100"
            />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;