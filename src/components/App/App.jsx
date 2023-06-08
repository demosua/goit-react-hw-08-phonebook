import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
// import AppBar from '../../components/AppBar'
import SharedLayout from '../SharedLayout'

const App = () => {
  return (
    <>
    <CssBaseline /> 
      <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
          </Route>
      </Routes>
      </>
  );
};

export default App;

    // <React.Fragment>
    //   <CssBaseline />
    //   React homework template
    // </React.Fragment>