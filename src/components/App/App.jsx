import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { useAuth } from '../hooks';
// import { useGetCurrentUserQuery } from 'redux/backend/api';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { ToastContainerStyled } from './App.styled';
import { CssBaseline } from '@mui/material';


const SharedLayout = lazy(() => import("../SharedLayout"));
const HomePage = lazy(() => import("pages/HomePage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"));

const App = () => {

  return (
    <>
      <Suspense fallback={<div>...</div>}>
      <CssBaseline />
      <ToastContainerStyled />
        <Routes>
            <Route path="/" element={<PublicRoute><SharedLayout /></PublicRoute>}>
              <Route index element={<PublicRoute><HomePage /></PublicRoute>} />
              <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
              <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
              <Route path="/contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
    </>
  );
};

export default App;

    // <React.Fragment>
    //   <CssBaseline />
    //   React homework template
    // </React.Fragment>