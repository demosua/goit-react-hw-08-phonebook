import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import AppBar from '../AppBar';
import Loader from '../Loader';


const Layout = () => {
  return (
    <>
    <Container>
        <Suspense fallback={<Loader />}>
          <AppBar />
        <Outlet />
      </Suspense>
    </Container>
    </>
  );
};

export default Layout;