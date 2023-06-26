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
import { useCreateContactMutation, useUpdateContactMutation } from 'redux/backend/api';

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

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(true);
  const [update, setUpdate] = React.useState(true);
  const [updateContact] = useUpdateContactMutation();
  const [createContact] = useCreateContactMutation();

  let title;
  let contactId;

  switch (props.type) {
    case 'update':
      setUpdate(true);
      contactId = props.id;
      title = "Edit contact";
      break;
    default:
      title = "Add new contact";
    break;
  }
  // const handleAddClick = async (event, contactId) => {
  //   try {
  //     await createContact({});
  //     //TODO: popup window with confirmation deleting contact
  //     console.log('Contact was deleted from your phonebook');
  //   } catch (error) {
  //     console.log('Oops.. Please, try again');
  //   }
  // }

  const handleSubmit = event => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // const name = data.get('name')
    // const number = data.get('number')
    

    // console.log(name + ' ' + number)

    // switch (props.type) {
    //   case 'update':
    //     try {
    //           await updateContact(contactId, name, number);
    //           console.log('Contact in your phonebook has been updated');
    //         } catch (error) {
    //           console.log('Oops.. Please, try again');
    //         }
    //     break;
    //   default:
    //     // try {
    //     //   await ();
    //     //   //TODO: popup window to edit contact
    //     // } catch (error) {
    //     //   console.log('Oops.. Please, try again');
    //     // }
    //   break;
    // }

    // const data = new FormData(event.currentTarget);
    //   const credentials = {
    //     email: data.get('name'),
    //     password: data.get('number'),
    // }
    

    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const defaultTheme = createTheme();

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
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
                    name="text"
                    value = {update ? contactId : ''}
                    autoComplete="name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="number"
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