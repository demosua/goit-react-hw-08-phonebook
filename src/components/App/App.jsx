import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { ToastContainerStyled } from './App.styled';
import { CssBaseline } from '@mui/material';
import { useAuth } from 'components/hooks';
import { useGetCurrentUserQuery } from 'redux/backend/api';


const SharedLayout = lazy(() => import("../SharedLayout"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"));

const App = () => {
  const token = useAuth();
  useGetCurrentUserQuery(null, { skip: !token });

  return (
    <>
      <Suspense fallback={<div>...</div>}>
      <CssBaseline />
      <ToastContainerStyled />
        <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<PublicRoute restricted><LoginPage /></PublicRoute>} />
              <Route path="/register" element={<PublicRoute restricted><RegisterPage /></PublicRoute>} />
              <Route path="/contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
    </>
  );
};

export default App;