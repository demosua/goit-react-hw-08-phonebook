import React, { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks';
import { useGetCurrentUserQuery } from 'redux/backend/api';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import { useSelector } from 'react-redux';


// const Loader = lazy(() => import("../Loader"));
const SharedLayout = lazy(() => import("../SharedLayout"));
const HomePage = lazy(() => import("pages/HomePage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"));

const App = () => {

  console.log(useGetCurrentUserQuery());

  // useGetCurrentUserQuery(null, { skip: !token });

  return (
    <>
      <Suspense fallback={<div>...</div>}>
        <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<PublicRoute restricted> <HomePage /> </PublicRoute>} />
              <Route path="/register" element={<PublicRoute restricted> <RegisterPage /> </PublicRoute>} />
              <Route path="/login" element={<PublicRoute restricted> <LoginPage /> </PublicRoute>} />
              <Route path="/contacts" element={<PrivateRoute> <ContactsPage/> </PrivateRoute>} />
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