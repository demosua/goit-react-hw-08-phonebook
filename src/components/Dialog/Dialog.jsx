import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled, createTheme, ThemeProvider  } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialog({ onClose, credentials }) {

  const { id, name, number } = credentials;
  const [openDialog, setOpenDialog] = React.useState(true);
  const [contactName, setContactName] = React.useState(name);
  const [contactNumber, setContactNumber] = React.useState(number);

  let title;
  name.length > 1 ? title = "Edit contact" : title = "Add contact";

  const handleChange = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'name':
        setContactName(event.currentTarget.value)
        break;
      case 'number':
        setContactNumber(event.currentTarget.value)
        break;
      default:
        return;
    }
  }; 

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {name: contactName, number: contactNumber}
    onClose(formData);
    setOpenDialog(false);
  }

  const handleClose = () => {
    setOpenDialog(false);
  };

  const defaultTheme = createTheme();

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Contact name"
                    name="name"
                    value = {contactName}
                    onChange={handleChange}
                    autoComplete="name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="number"
                    value = {contactNumber}
                    onChange={handleChange}
                    label="Rhone number"
                    type="text"
                    id="number"
                    autoComplete="current-contact"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleClose}
                  >
                    Add/Edit contact
                  </Button>
                </Box>
            </Container>
          </ThemeProvider>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}