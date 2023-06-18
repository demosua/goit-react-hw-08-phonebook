import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const Loader = lazy(() => import("../Loader"));
const SharedLayout = lazy(() => import("../SharedLayout"));
const HomePage = lazy(() => import("pages/HomePage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
// const ContactsPage = lazy(() => import("pages/ContactsPage"));


const App = () => {

  const { isLoggedIn } = useSelector(state => state.auth);
  console.log(isLoggedIn);
  // const { token } = useSelector(state => state.auth);
  // useGetCurrentUserQuery(undefined, {
  //   skip: !token,
  // });

  return (
    <>
      <Suspense fallback={<div>...</div>}>
        <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/contacts" element={<ContactsPage />} /> */}
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