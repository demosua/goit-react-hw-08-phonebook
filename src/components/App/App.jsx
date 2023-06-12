import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import SharedLayout from '../SharedLayout'
import Login from 'components/Login/Login';
import Register from 'components/Register/Register';


// const SharedLayout = lazy(() => import("../SharedLayout"));
// const Home = lazy(() => import("pages/Home"));


const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
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