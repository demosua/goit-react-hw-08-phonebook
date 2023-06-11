import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import SharedLayout from '../SharedLayout'

const App = () => {
  return (
    <>
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